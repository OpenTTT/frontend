import { environment } from '../../environments/environment';

export class OpenTTTService {
  host = environment.host;

  protected url(path: string) {
    return `${this.host}/${path}`;
  }

}
