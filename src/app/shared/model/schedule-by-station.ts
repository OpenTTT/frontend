export class StationDeparture {
  arrival: string;
  departure: string;
}
export class ScheduleByStation {
  station: string;
  returnTrip: boolean;
  departures: StationDeparture[];
}
