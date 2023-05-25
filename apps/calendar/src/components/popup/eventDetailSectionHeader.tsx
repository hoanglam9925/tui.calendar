import { h } from 'preact';

import { Template } from '@src/components/template';
import { cls } from '@src/helpers/css';
import type EventModel from '@src/model/eventModel';

interface Props {
  event: EventModel;
  userData: any;
  backpackUrl: any;
  templateCsvUrl: any;
}

const classNames = {
  sectionHeader: cls('popup-section', 'section-header'),
  content: cls('content'),
  eventTitle: cls('event-title'),
};

export function EventDetailSectionHeader({ event, userData, backpackUrl, templateCsvUrl }: Props) {
  const eventId = event?.id;
  return (
    <div className='row'>
      <div className='col-7'>
          <div className={classNames.sectionHeader}>
            <div className={classNames.eventTitle}>
              <Template template="popupDetailTitle" param={event} as="span" />
            </div>
            <div className={classNames.content}>
              <Template template="popupDetailDate" param={event} as="span" />
            </div>
          </div>
      </div>
      {/* <div className='col'>
        <div class="d-print-none with-border float-right" style={{minWidth:"155px"}}>
          <a href={backpackUrl + '/collab-registration?event=%5B"' + eventId + '"%5D'} class="btn btn-primary" data-style="zoom-in" style={{minWidth:"155px"}}><span class="ladda-label">See Registrations</span></a>
        </div>
        <div class="d-print-none with-border float-right" style={{minWidth:"155px"}}>
          <a href={backpackUrl + '/registrationImportView?event_id=' + eventId } class="btn btn-primary" data-style="zoom-in" style={{minWidth:"155px"}}><span class="ladda-label">Bulk Upload (CSV)</span></a>
        </div>
        <div class="d-print-none with-border float-right" style={{minWidth:"155px"}}>
          <a href={templateCsvUrl} class="btn btn-primary" data-style="zoom-in" style={{minWidth:"155px"}}><span class="ladda-label">Download Bulk Upload Template (CSV)</span></a>
        </div>
      </div> */}

    </div>
    
  );
}
