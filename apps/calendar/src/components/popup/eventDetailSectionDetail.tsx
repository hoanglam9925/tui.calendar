import { h } from 'preact';

import { Template } from '@src/components/template';
import { cls } from '@src/helpers/css';
import { useCalendarById } from '@src/hooks/calendar/useCalendarById';
import type EventModel from '@src/model/eventModel';
// // @ts-ignore
// import sanitizeHtml from 'sanitize-html-react';
// import parse from 'html-react-parser'
interface Props {
  event: EventModel;
  userData: any;
  backpackUrl: any;
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
  calendarDotIcon: cls('icon', 'ic-close'),
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
  
  return (
    <div className={`${classNames.sectionDetail}`} style={{maxHeight: '1000px', overflow: "auto", 'font-size': "13px"}} >
      {currentUserData?.qr_code && (
        <div className={classNames.detailItem}>
          <span className={classNames.content}>
            <img style={{maxWidth: '50%', aspectRatio: 1, margin: 'auto', display: 'block', marginTop: "10px", marginBottom: "10px"}} src={currentUserData?.qr_code} />
          </span>
        </div>
      )}
      {currentUserData?.image_file && (
        <div className={classNames.detailItem}>
          <span className={classNames.content}>
            <img style={{maxWidth: '100%', aspectRatio: 1, margin: 'auto', display: 'block', marginTop: "10px", marginBottom: "10px"}} src={currentUserData?.image_file} />
          </span>
        </div>
      )}

    <div className='row'>
    <div className='col'>
          
        {currentUserData?.register_by_timestamp && (
          <div className={classNames.detailItem}>
            <span className='fa-regular fa-calendar' />
            <span className={classNames.content}>
            <b> Register By:</b> {currentUserData?.register_by_timestamp}
              {/* <Template template="popupDetailState" param={event} as="span" /> */}
            </span>
          </div>
        )}
        {currentUserData?.registration_count >= 0 && (
          <div className={classNames.detailItem}>
            <span className='fa-solid fa-rotate' />
            <span className={classNames.content}>
            <b> Registration Count:</b> {currentUserData?.registration_count}
              {/* <Template template="popupDetailState" param={event} as="span" /> */}
            </span>
          </div>
        )}
       
        
        {/* {currentUserData?.attendance_point && (
          <div className={classNames.detailItem}>
            <span className={classNames.repeatIcon} />
            <span className={classNames.content}>
            <b>Attendance Point:</b> {currentUserData?.attendance_point}
            </span>
          </div>
        )} */}
        
      </div>

      <div className="col">
        
        {currentUserData?.slots_total && (
          <div className={classNames.detailItem}>
            <span className='fa-regular fa-square-plus' />
            <span className={classNames.content}>
            <b> Slots Total:</b> {currentUserData?.slots_total}
              {/* <Template template="popupDetailState" param={event} as="span" /> */}
            </span>
          </div>
        )}
        {currentUserData?.slots_remain && (
          <div className={classNames.detailItem}>
            <span className="fa-solid fa-plus-minus"></span>
            <span className={classNames.content}>
            <b> Slots Remain:</b> {currentUserData?.slots_remain}
              {/* <Template template="popupDetailState" param={event} as="span" /> */}
            </span>
          </div>
        )}
      </div>
      
    </div>

      {currentUserData?.category_relation && (
        <div className={classNames.detailItem}>
          <span className="fa-regular fa-rectangle-list"></span>
          <span className={classNames.content}>
            <b> Category:</b> {currentUserData?.category_relation?.title}
            {/* <Template template="popupDetailState" param={event} as="span" /> */}
          </span>
        </div>
      )}
      {currentUserData?.attendance_type && (
        <div className={classNames.detailItem}>
          <span className="fa-solid fa-water"></span>
          <span className={classNames.content}>
          <b> Attendance Type:</b> {currentUserData?.attendance_type}
          </span>
        </div>
      )}
      {currentUserData?.qr_content && (
        <div className={classNames.detailItem}>
          <span className="fa-solid fa-qrcode"></span>
          <span className={classNames.content}>
            <b> QR Code: </b> {currentUserData?.qr_content}
          </span>
        </div>
      )}
      
     
      
      {currentUserData?.description && (
        <div className={classNames.detailItem}>
          <span className={classNames.content}>
          <span className="fa-solid fa-circle-info"></span>
          <b> Description:</b>
          {/* {currentUserData?.description} */}
          <div dangerouslySetInnerHTML={{ __html: (currentUserData?.description) }} />
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
