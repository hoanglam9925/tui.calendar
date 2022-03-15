import { h } from 'preact';
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks';

import { TimeEvent } from '@src/components/events/timeEvent';
import { useDispatch, useStore } from '@src/contexts/calendarStore';
import { useCurrentPointerPositionInGrid } from '@src/hooks/event/currentPointerPositionInGrid';
import { useDraggingEvent } from '@src/hooks/event/draggingEvent';
import EventUIModel from '@src/model/eventUIModel';
import { isNotDraggingSelector } from '@src/selectors/dnd';
import TZDate from '@src/time/date';
import { setTimeStrToDate } from '@src/time/datetime';
import { findLastIndex } from '@src/utils/array';
import { isNil, isPresent } from '@src/utils/type';

import { GridPositionFinder, TimeGridData, TimeGridRow } from '@t/grid';

type FilteredUIModelRow = [] | [EventUIModel];

export function ResizingGuideByColumn({
  gridPositionFinder,
  totalUIModels,
  columnIndex,
  timeGridData,
}: {
  gridPositionFinder: GridPositionFinder;
  totalUIModels: EventUIModel[][];
  columnIndex: number;
  timeGridData: TimeGridData;
}) {
  const isNotDragging = useStore(isNotDraggingSelector);
  const { updateEvent } = useDispatch('calendar');
  const { draggingEvent: resizingStartUIModel, clearDraggingEvent } = useDraggingEvent(
    'timeGrid',
    'resize'
  );
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const [guideUIModel, setGuideUIModel] = useState<EventUIModel | null>(null);

  const clearStates = useCallback(() => {
    setGuideUIModel(null);
    clearDraggingEvent();
    clearCurrentGridPos();
  }, [clearCurrentGridPos, clearDraggingEvent]);

  const baseResizingInfo = useMemo(() => {
    if (isNil(resizingStartUIModel)) {
      return null;
    }

    const { columns, rows } = timeGridData;

    /**
     * Filter UIModels that are made from the target event.
     */
    const resizeTargetUIModelColumns = totalUIModels.map(
      (uiModels) =>
        uiModels.filter(
          (uiModel) => uiModel.cid() === resizingStartUIModel.cid()
        ) as FilteredUIModelRow
    );

    const findRowIndexOf =
      (targetDate: TZDate, targetColumnIndex: number) => (row: TimeGridRow) => {
        const rowStartTZDate = setTimeStrToDate(columns[targetColumnIndex].date, row.startTime);
        const rowEndTZDate = setTimeStrToDate(
          timeGridData.columns[targetColumnIndex].date,
          row.endTime
        );

        return rowStartTZDate <= targetDate && targetDate < rowEndTZDate;
      };
    const eventStartDateColumnIndex = resizeTargetUIModelColumns.findIndex((row) => row.length > 0);
    const startTZDate = (
      resizeTargetUIModelColumns[eventStartDateColumnIndex][0] as EventUIModel
    ).getStarts();
    const eventStartDateRowIndex = rows.findIndex(
      findRowIndexOf(startTZDate, eventStartDateColumnIndex)
    );
    const eventEndDateColumnIndex = findLastIndex(
      resizeTargetUIModelColumns,
      (row) => row.length > 0
    );
    const endTZDate = (
      resizeTargetUIModelColumns[eventEndDateColumnIndex][0] as EventUIModel
    ).getEnds();
    const eventEndDateRowIndex = rows.findIndex(findRowIndexOf(endTZDate, eventEndDateColumnIndex));

    return {
      eventStartDateColumnIndex,
      eventStartDateRowIndex,
      eventEndDateColumnIndex,
      eventEndDateRowIndex,
      resizeTargetUIModelColumns,
    };
  }, [resizingStartUIModel, timeGridData, totalUIModels]);

  const canCalculateGuideUIModel =
    isPresent(baseResizingInfo) && isPresent(resizingStartUIModel) && isPresent(currentGridPos);

  const minimumHeight = useMemo(
    () =>
      baseResizingInfo ? timeGridData.rows[baseResizingInfo.eventStartDateRowIndex].height : 0,
    [baseResizingInfo, timeGridData.rows]
  );

  // When drag an one-day event
  useEffect(() => {
    if (canCalculateGuideUIModel) {
      const { eventStartDateRowIndex, eventStartDateColumnIndex, eventEndDateColumnIndex } =
        baseResizingInfo;
      if (
        columnIndex === eventEndDateColumnIndex &&
        eventStartDateColumnIndex === eventEndDateColumnIndex
      ) {
        const clonedUIModel = resizingStartUIModel.clone();
        clonedUIModel.setUIProps({
          height: Math.max(
            minimumHeight,
            timeGridData.rows[currentGridPos.rowIndex].top -
              timeGridData.rows[eventStartDateRowIndex].top +
              minimumHeight
          ),
        });
        setGuideUIModel(clonedUIModel);
      }
    }
  }, [
    baseResizingInfo,
    canCalculateGuideUIModel,
    columnIndex,
    currentGridPos,
    resizingStartUIModel,
    timeGridData.rows,
    minimumHeight,
  ]);

  // When drag a two-day event (but less than 24 hours)
  useEffect(() => {
    if (canCalculateGuideUIModel) {
      const { resizeTargetUIModelColumns, eventStartDateColumnIndex, eventEndDateColumnIndex } =
        baseResizingInfo;
      if (
        (columnIndex === eventStartDateColumnIndex || columnIndex === eventEndDateColumnIndex) &&
        eventStartDateColumnIndex !== eventEndDateColumnIndex
      ) {
        let clonedUIModel;
        if (columnIndex === eventStartDateColumnIndex) {
          // first column
          clonedUIModel = (resizeTargetUIModelColumns[columnIndex][0] as EventUIModel).clone();
        } else {
          // last column
          clonedUIModel = resizingStartUIModel.clone();
          clonedUIModel.setUIProps({
            height: timeGridData.rows[currentGridPos.rowIndex].top + minimumHeight,
          });
        }
        setGuideUIModel(clonedUIModel);
      }
    }
  }, [
    baseResizingInfo,
    canCalculateGuideUIModel,
    columnIndex,
    currentGridPos,
    resizingStartUIModel,
    timeGridData.rows,
    minimumHeight,
  ]);

  // When dragging ends
  useEffect(() => {
    const isDraggingEnd =
      isNotDragging &&
      isPresent(baseResizingInfo) &&
      isPresent(currentGridPos) &&
      isPresent(resizingStartUIModel);

    if (isDraggingEnd) {
      const { eventEndDateColumnIndex, eventStartDateRowIndex, eventStartDateColumnIndex } =
        baseResizingInfo;
      if (columnIndex === eventEndDateColumnIndex) {
        const targetEndDate = setTimeStrToDate(
          timeGridData.columns[columnIndex].date,
          timeGridData.rows[
            eventStartDateColumnIndex === eventEndDateColumnIndex
              ? Math.max(currentGridPos.rowIndex, eventStartDateRowIndex)
              : currentGridPos.rowIndex
          ].endTime
        );
        updateEvent({
          event: resizingStartUIModel.model,
          eventData: {
            end: targetEndDate,
          },
        });
      }
      clearStates();
    }
  }, [
    isNotDragging,
    baseResizingInfo,
    currentGridPos,
    resizingStartUIModel,
    clearStates,
    columnIndex,
    timeGridData,
    updateEvent,
  ]);

  if (isNil(guideUIModel)) {
    return null;
  }

  return <TimeEvent uiModel={guideUIModel} isResizingGuide={true} />;
}
