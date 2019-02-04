import { environment } from '@envs/environment';

export class OpenTTTService {
  host = environment.host;

  public url(path: string) {
    return `${this.host}/${path}`;
  }

}
