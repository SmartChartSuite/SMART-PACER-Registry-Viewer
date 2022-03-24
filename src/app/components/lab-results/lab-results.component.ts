import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {openAnnotationDialog} from "../annotation-dialog/annotation-dialog.component";
import {filter} from "rxjs";
import {openDetailsDialog} from "../details-dialog/details-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrls: ['./lab-results.component.css', '../registry-viewer/registry-viewer.component.css'],
})
export class LabResultsComponent implements OnInit{

  @Input() matCardContentHeight: number;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onEditAnnotation(value: any): void {
    openAnnotationDialog(this.dialog, {category: "One", description: "Sample annotation text"})
      .pipe(filter(val => !!val))
      .subscribe(
        val=> console.log(val)
      )
  }

  onViewDetails(value: any): void {
    openDetailsDialog(this.dialog, {key: "value"})
      .subscribe(
        val=> console.log(val)
      )
  }

  labResultsFormatted = [
    {
      "group": "Syphilis",
      "values" : [
        {
          "date": "2022-01-14T05:00:00.000Z",
          "test": "Reagin Ab [Presence] in Serum by RPR",
          "result": "Reactive"
        },
        {
          "date": "2022-01-14T05:00:00.000Z",
          "test": "Reagin Ab [Titer] in Serum by RPR",
          "result": "1:4"
        },
        {
          "date": "2021-07-10T04:00:00.000Z",
          "test": "Reagin Ab [Titer] in Serum by RPR",
          "result": "1:64"
        },
        {
          "date": "2022-01-14T05:00:00.000Z",
          "test": "Reagin Ab [Presence] in Serum by RPR",
          "result": "Reactive"
        },
        {
          "date": "2022-01-14T05:00:00.000Z",
          "test": "Reagin Ab [Titer] in Serum by RPR",
          "result": "1:4"
        },
        {
          "date": "2021-07-10T04:00:00.000Z",
          "test": "Reagin Ab [Titer] in Serum by RPR",
          "result": "1:64"
        },
        {
          "date": "2022-01-14T05:00:00.000Z",
          "test": "Reagin Ab [Presence] in Serum by RPR",
          "result": "Reactive"
        },
        {
          "date": "2022-01-14T05:00:00.000Z",
          "test": "Reagin Ab [Titer] in Serum by RPR",
          "result": "1:4"
        }
      ],
    },
    {
      "group": "HIV",
      "values" : [
        {
          "date": "2022-01-14T05:00:00.000Z",
          "test": "HIV 1+2 Ab [Presence] in Serum",
          "result": "Negative"
        },
        {
          "date": "2022-01-14T05:00:00.000Z",
          "test": "HIV 1+2 Ab [Presence] in Serum",
          "result": "Negative"
        }
      ],
    },

  ]


}