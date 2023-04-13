import { h } from 'preact';

import { Template } from '@src/components/template';
import { cls } from '@src/helpers/css';
import { useCalendarById } from '@src/hooks/calendar/useCalendarById';
import type EventModel from '@src/model/eventModel';

interface Props {
  event: EventModel;
  userData: any;
}

const classNames = {
  detailItem: cls('detail-item'),
  detailItemIndent: cls('detail-item', 'detail-item-indent'),
  detailItemSeparate: cls('detail-item', 'detail-item-separate'),
  sectionDetail: cls('popup-section', 'section-detail'),
  content: cls('content'),
  locationIcon: cls('icon', 'ic-location-b'),
  repeatIcon: cls('icon', 'ic-repeat-b'),
  userIcon: cls('icon', 'ic-user-b'),
  stateIcon: cls('icon', 'ic-state-b'),
  calendarDotIcon: cls('icon', 'calendar-dot'),
};

// eslint-disable-next-line complexity
export function EventDetailSectionDetail({ event, userData }: Props) {
  const { location, recurrenceRule, attendees, state, calendarId, body } = event;
  const calendar = useCalendarById(calendarId);
  const eventId = event?.id;
  const currentUserData = userData.find((user: any) => {
    if(user?.id == eventId) return true; 
    return false;
  });
  
  console.log({currentUserData});
  return (
    <div className={classNames.sectionDetail} style={{maxHeight: '1000px', overflow: "auto"}} >
      {currentUserData?.image_file && (
        <div className={classNames.detailItem}>
          <span className={classNames.content}>
            <img style={{maxWidth: '100%', aspectRatio: 1, marginTop: "10px", marginBottom: "10px"}} src={currentUserData?.image_file} />
          </span>
        </div>
      )}
      {currentUserData?.description && (
        <div className={classNames.detailItem}>
          <span className={classNames.content}>
            Description: {currentUserData?.description}
            {/* <Template template="popupDetailState" param={event} as="span" /> */}
          </span>
        </div>
      )}
      {currentUserData?.attendance_type && (
        <div className={classNames.detailItem}>
          <span className={classNames.stateIcon} />
          <span className={classNames.content}>
            Attendance Type: {currentUserData?.attendance_type}
            {/* <Template template="popupDetailState" param={event} as="span" /> */}
          </span>
        </div>
      )}
      {currentUserData?.attendance_point && (
        <div className={classNames.detailItem}>
          <span className={classNames.repeatIcon} />
          <span className={classNames.content}>
            Attendance Point: {currentUserData?.attendance_point}
            {/* <Template template="popupDetailState" param={event} as="span" /> */}
          </span>
        </div>
      )}
      {currentUserData?.slots_total && (
        <div className={classNames.detailItem}>
          <span className={classNames.repeatIcon} />
          <span className={classNames.content}>
            Slots Total: {currentUserData?.slots_total}
            {/* <Template template="popupDetailState" param={event} as="span" /> */}
          </span>
        </div>
      )}
      {currentUserData?.slots_remain && (
        <div className={classNames.detailItem}>
          <span className={classNames.repeatIcon} />
          <span className={classNames.content}>
            Slots Remain: {currentUserData?.slots_remain}
            {/* <Template template="popupDetailState" param={event} as="span" /> */}
          </span>
        </div>
      )}
      {currentUserData?.register_by_timestamp && (
        <div className={classNames.detailItem}>
          <span className={classNames.calendarDotIcon} />
          <span className={classNames.content}>
            Register By: {currentUserData?.register_by_timestamp}
            {/* <Template template="popupDetailState" param={event} as="span" /> */}
          </span>
        </div>
      )}
      
      {/* {location && (
        <div className={classNames.detailItem}>
          <span className={classNames.locationIcon} />
          <span className={classNames.content}>
            <Template template="popupDetailLocation" param={event} as="span" />
          </span>
        </div>
      )}
      {recurrenceRule && (
        <div className={classNames.detailItem}>
          <span className={classNames.repeatIcon} />
          <span className={classNames.content}>
            <Template template="popupDetailRecurrenceRule" param={event} as="span" />
          </span>
        </div>
      )}
      {attendees && (
        <div className={classNames.detailItemIndent}>
          <span className={classNames.userIcon} />
          <span className={classNames.content}>
            <Template template="popupDetailAttendees" param={event} as="span" />
          </span>
        </div>
      )}
      {state && (
        <div className={classNames.detailItem}>
          <span className={classNames.stateIcon} />
          <span className={classNames.content}>
            <Template template="popupDetailState" param={event} as="span" />
          </span>
        </div>
      )}
      {calendar && (
        <div className={classNames.detailItem}>
          <span
            className={classNames.calendarDotIcon}
            style={{
              backgroundColor: calendar?.backgroundColor ?? '',
            }}
          />
          <span className={classNames.content}>{calendar?.name ?? ''}</span>
        </div>
      )}
      {body && (
        <div className={classNames.detailItemSeparate}>
          <span className={classNames.content}>
            <Template template="popupDetailBody" param={event} as="span" />
          </span>
        </div>
      )} */}
    </div>
  );
}
