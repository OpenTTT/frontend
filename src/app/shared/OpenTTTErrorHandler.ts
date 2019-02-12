import { Component, ErrorHandler, Inject, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';

// TODO: Do we want to refactor this component some time into its own file?
@Component({
  selector: 'app-validation-error-snack-bar',
  template: `
    {{ data.errors.length }} issues:
    <ul>
      <li *ngFor="let error of data.errors">
        {{error.objectName}}.{{error.field}} {{error.defaultMessage}}
      </li>
    </ul>
  `,
})
export class ValidationErrorSnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}

@Injectable({
  providedIn: 'root'
})
export class OpenTTTErrorHandler implements ErrorHandler {
  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      const httpError = error as HttpErrorResponse;

      if (error.error instanceof ErrorEvent)  {
        this.snackBar.open(`Could not reach server at ${httpError.url}`);
      } else {
        if (httpError.status === 404) {
          this.showSnackbar(`Could not find the entity at ${httpError.url}`);
        } else if (httpError.status === 400) {
          const errorObject = httpError.error;
          this.showSnackbarFromComponent(ValidationErrorSnackbarComponent, errorObject);
        } else {
          this.showSnackbar(`Error: Received ${httpError.status} from the server, message was ${httpError.message}`);
        }
      }
    }
  }

  private showSnackbar(msg: string) {
    this.zone.run(() => this.snackBar.open(msg, null, {
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      duration: 3000,
    }));
  }

  private showSnackbarFromComponent(component: any, data: any) {
    this.zone.run(() => this.snackBar.openFromComponent(component, {
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      data: data,
      duration: 3000,
    }));
  }
}
