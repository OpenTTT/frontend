import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenTTTErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      const httpError = error as HttpErrorResponse;

      if (error.error instanceof ErrorEvent)  {
        console.error(`Could not reach server at ${httpError.url}`);
      } else {
        if (httpError.status === 404) {
          this.showSnackbar(`Could not find the entity at ${httpError.url}`);
        } else if (httpError.status === 400) {
          const errorObject = httpError.error;
          this.showSnackbarFromComponent(undefined, errorObject);
        } else {
          this.showSnackbar(`Error: Received ${httpError.status} from the server, message was ${httpError.message}`);
        }
      }
    }
  }

  private showSnackbar(msg: string) {
    console.error(msg);
  }

  private showSnackbarFromComponent(component: any, data: any) {
    console.error('fancy error', data);
  }
}
