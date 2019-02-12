import { Timetable } from '@shared/model/timetable';
import { Tag } from '@shared/model/tag';

export class ScheduledDispatch {
  id?: number;
  timetable?: Timetable;
  timetableId?: number;
  departures: number[];
  intervalInMinutes: number;
  timetableTags?: Tag[];
}
