enum StationType {
  STATION,
  WAYPOINT,
  DEPOT,
}
export class Station {
  name: string;
  destinationType: StationType;
}
