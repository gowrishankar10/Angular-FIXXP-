import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-agnys',
  templateUrl: './agnys.component.html',
  styleUrls: ['./agnys.component.css']
})
export class AgnysComponent   {


  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }




    }
  


