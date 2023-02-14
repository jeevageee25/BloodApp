import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {

constructor(private snackBar:MatSnackBar) { }


successSnack(message){
  this.snackBar.open(message,'',{
    duration:2000,
    verticalPosition:"bottom",
    panelClass:['successNotificationBack'],
    horizontalPosition:"right"

  })
}

errorSnack(message){
  this.snackBar.open(message,'',{
    duration:2000,
    verticalPosition:"bottom",
    panelClass:['errorNotificationBack'],
    horizontalPosition:"right"

  })
}

}
