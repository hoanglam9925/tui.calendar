import { h } from 'preact';
import { createPortal } from 'preact/compat';
import { useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks';

import { EventDetailSectionDetail } from '@src/components/popup/eventDetailSectionDetail';
import { EventDetailSectionHeader } from '@src/components/popup/eventDetailSectionHeader';
import { Template } from '@src/components/template';
import { DetailPopupArrowDirection, HALF_OF_POPUP_ARROW_HEIGHT } from '@src/constants/popup';
import { useDispatch, useStore } from '@src/contexts/calendarStore';
import { useEventBus } from '@src/contexts/eventBus';
import { useFloatingLayer } from '@src/contexts/floatingLayer';
import { useLayoutContainer } from '@src/contexts/layoutContainer';
import { cls } from '@src/helpers/css';
import { isLeftOutOfLayout, isTopOutOfLayout } from '@src/helpers/popup';
import { useCalendarColor } from '@src/hooks/calendar/useCalendarColor';
import { optionsSelector } from '@src/selectors';
import { eventDetailPopupParamSelector } from '@src/selectors/popup';
import { allOptionSelector } from '@src/selectors/options';
import TZDate from '@src/time/date';
import { isNil } from '@src/utils/type';
import swal from 'sweetalert';
import $ from 'jquery';

import type { StyleProp } from '@t/components/common';
import type { Rect } from '@t/store';

const classNames = {
  popupContainer: cls('popup-container'),
  detailContainer: cls('detail-container'),
  topLine: cls('popup-top-line'),
  border: cls('popup-arrow-border'),
  fill: cls('popup-arrow-fill'),
  sectionButton: cls('popup-section', 'section-button'),
  content: cls('content'),
  editIcon: cls('icon', 'ic-edit'),
  deleteIcon: cls('icon', 'ic-delete'),
  editButton: cls('edit-button'),
  deleteButton: cls('delete-button'),
  verticalLine: cls('vertical-line'),
};

function calculatePopupPosition(eventRect: Rect, layoutRect: Rect, popupRect: Rect) {
  let top;
  let left;

  let $body = $('body');
  const bodyClass = $body.attr("class");
  const hasSidebar = bodyClass?.includes('sidebar-lg-show');
  // has sidebar
  if(hasSidebar) {
    top = eventRect.top + eventRect.height / 2 - popupRect.height / 2;
    left = eventRect.left + eventRect.width - 255;
  }
  // hide sidebar
  else {
    top = eventRect.top + eventRect.height / 2 - popupRect.height / 2;
    left = eventRect.left + eventRect.width;
  }
  

  if (isTopOutOfLayout(top, layoutRect, popupRect)) {
    top = layoutRect.top + layoutRect.height - popupRect.height;
  }

  const popupLeft = eventRect.left + eventRect.width;

  const outLeftLayout = popupLeft + popupRect.width > layoutRect.left + layoutRect.width;
  // const outLeftLayout = isLeftOutOfLayout(left, layoutRect, popupRect);
  if (outLeftLayout) {
    left = eventRect.left - popupRect.width;
  }

  return [
    Math.max(top, layoutRect.top) + window.scrollY - 110,
    // Math.max(left, layoutRect.left) + window.scrollX - 225,
    // left > layoutRect.left ? (Math.max(left, layoutRect.left) + window.scrollX - (outLeftLayout ? 25 : -225)) : (Math.max(left, layoutRect.left) + window.scrollX - (outLeftLayout ? 255 : 25)),
    Math.max(left, layoutRect.left) + window.scrollX - (hasSidebar ? (outLeftLayout ? 255 : 25) : (outLeftLayout ? 25 : 25)) ,
    // layoutRect.left) + window.scrollX - (outLeftLayout ? 25 : -225),
  ];
}

function calculatePopupArrowPosition(eventRect: Rect, layoutRect: Rect, popupRect: Rect) {
  let top = eventRect.top + eventRect.height / 2 + window.scrollY;
  const popupLeft = eventRect.left + eventRect.width;

  const isOutOfLayout = popupLeft + popupRect.width > layoutRect.left + layoutRect.width;
  // console.log({zxc: popupLeft + popupRect.width, qwe: layoutRect.left + layoutRect.width});
  const direction = isOutOfLayout
    ? DetailPopupArrowDirection.right
    : DetailPopupArrowDirection.left;

  top = top - 110;

  return { top, direction };
}

export function EventDetailPopup() {
  const { useFormPopup } = useStore(optionsSelector);
  const popupParams = useStore(eventDetailPopupParamSelector);
  const options = useStore(optionsSelector);
  
  const { event, eventRect } = popupParams ?? {};

  const { showFormPopup, hideDetailPopup } = useDispatch('popup');

  const calendarColor = useCalendarColor(event);
  const layoutContainer = useLayoutContainer();
  const detailPopupSlot = useFloatingLayer('detailPopupSlot');
  const eventBus = useEventBus();
  const popupContainerRef = useRef<HTMLDivElement>(null);

  const [style, setStyle] = useState<StyleProp>({});
  const [arrowTop, setArrowTop] = useState<number>(0);
  const [arrowDirection, setArrowDirection] = useState<DetailPopupArrowDirection>(
    DetailPopupArrowDirection.left
  );

  const popupArrowClassName = useMemo(() => {
    const right = arrowDirection === DetailPopupArrowDirection.right;
    const left = arrowDirection === DetailPopupArrowDirection.left;

    return cls('popup-arrow', { right, left });
  }, [arrowDirection]);

  useLayoutEffect(() => {
    if (popupContainerRef.current && eventRect && layoutContainer) {
      const layoutRect = layoutContainer.getBoundingClientRect();
      const popupRect = popupContainerRef.current.getBoundingClientRect();

      const [top, left] = calculatePopupPosition(eventRect, layoutRect, popupRect);
      const { top: arrowTopPosition, direction } = calculatePopupArrowPosition(
        eventRect,
        layoutRect,
        popupRect
      );

      setStyle({ top, left });
      setArrowTop(arrowTopPosition - top - HALF_OF_POPUP_ARROW_HEIGHT);
      setArrowDirection(direction);
    }
  }, [eventRect, layoutContainer]);

  if (isNil(event) || isNil(eventRect) || isNil(detailPopupSlot)) {
    return null;
  }

  const {
    title = '',
    isAllday = false,
    start = new TZDate(),
    end = new TZDate(),
    location,
    state,
    isReadOnly,
    isPrivate,
  } = event;

  const popupArrowPointPosition = {
    top: eventRect.top + eventRect.height / 2,
    left: eventRect.left + eventRect.width / 2,
  };

  const onClickEditButton = () => {
    if (useFormPopup) {
      showFormPopup({
        isCreationPopup: false,
        event,
        title,
        location,
        start,
        end,
        isAllday,
        isPrivate,
        eventState: state,
        popupArrowPointPosition,
      });
    } else {
      eventBus.fire('beforeUpdateEvent', { event: event.toEventObject(), changes: {} });
    }
  };

  const onClickDeleteButton = (url: any, token: any) => {
    
    const formdata = new FormData();
    formdata.append("_token", token);

    swal({
		  title: "Warning",
		  text: "Are you sure you want to delete this item?",
		  icon: "warning",
		  buttons: ["Cancel", "Delete"],
		  dangerMode: true,
		}).then((value) => {
			if (value) {
        fetch(url, {
          method: 'DELETE',
          body: formdata,
          headers: {
            'X-CSRF-TOKEN': token,
          },
        }).then((resp) => {
          eventBus.fire('beforeDeleteEvent', event.toEventObject());
        });
      }		
    });

    hideDetailPopup();
  };
  
  const userData = options?.allOptions?.userData || null;
  const token = options?.allOptions?.token;
  const backpackUrl = options?.allOptions?.backpackUrl;
  const templateCsvUrl = options?.allOptions?.templateCsvUrl;

  const editUrl = `${backpackUrl}/collab-event/${event.id}/edit`;
  const deleteURl = `${backpackUrl}/collab-event/${event.id}`;

  const eventId = event?.id;
  return createPortal(
    <div role="dialog" className={classNames.popupContainer} ref={popupContainerRef} style={style}>
      <div className={classNames.detailContainer}>
        <EventDetailSectionHeader event={event} userData={userData} backpackUrl={backpackUrl} templateCsvUrl={templateCsvUrl} />
        <EventDetailSectionDetail event={event} userData={userData} backpackUrl={backpackUrl} />
        {!isReadOnly && (
          <div className={classNames.sectionButton}>
            <a href={editUrl}>
              <button type="button" className={classNames.editButton} onClick={onClickEditButton}>
                <span className={classNames.editIcon} />
                <span className={classNames.content}>
                  <Template template="popupEdit" as="span" />
                </span>
              </button>
            </a>
            
            <div className={classNames.verticalLine} />
            <button type="button" className={classNames.deleteButton} onClick={() => onClickDeleteButton(deleteURl, token)}>
              <span className={classNames.deleteIcon} />
              <span className={classNames.content}>
                <Template template="popupDelete" as="span" />
              </span>
            </button>
          </div>
        )}
        <div className="row">
          <div className="d-print-none with-border col d-flex justify-content-center align-items-center" style={{minWidth:"155px"}}>
            <a href={backpackUrl + '/collab-registration?event=%5B"' + eventId + '"%5D'} className="btn btn-primary" data-style="zoom-in" style={{width:"100%"}}><span class="ladda-label">See Registrations</span></a>
          </div>
          
          <div className="d-print-none with-border d-flex col d-flex justify-content-center align-items-center" style={{minWidth:"155px"}}>
            <a href={backpackUrl + '/registrationImportView?event_id=' + eventId } className="btn btn-primary" data-style="zoom-in" style={{width:"100%"}}><span class="ladda-label">Bulk Upload (CSV)</span></a>
          </div>
        </div>

        <div className="d-print-none with-border d-flex justify-content-center align-items-center" style={{minWidth:"155px",marginTop:"10px",marginBottom:"10px"}}>
          <a href={templateCsvUrl} class="btn btn-primary" data-style="zoom-in" style={{width:"100%"}}><span className="ladda-label">Download Bulk Upload Template (CSV)</span></a>
        </div>

      </div>
      <div
        className={classNames.topLine}
        style={{ background: calendarColor.backgroundColor }}
      />
      <div className={popupArrowClassName}>
        <div className={classNames.border} style={{ top: arrowTop }}>
          <div className={classNames.fill} />
        </div>
      </div>
    </div>,
    detailPopupSlot
  );
}
