import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-registry-viewer',
  templateUrl: './registry-viewer.component.html',
  styleUrls: ['./registry-viewer.component.css']
})
export class RegistryViewerComponent implements OnInit {

  breakpoint: number;
  matCardContentHeight: number;

  //TODO this data should be retrieved from the backend
  demographicData = {
    address:  {
      street: "7985 Waxwing Pass",
      city: "Columbus",
      state: "OH",
      zip: "87913"
    },
    phone: "770-123-9876",
    dob: "Dec 31, 1923",
    gender: "other"
  }

  isDefaultViewActive = true;

  constructor() {
  }

  setMatCardContentHeight(windowSize: number){
    if(windowSize <= 1440){
      this.matCardContentHeight = 60;
    }
    else {
      this.matCardContentHeight = 70;
    }
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 992) ? 1 : 2;
    this.setMatCardContentHeight(event.target.innerWidth);
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth<= 992) ? 1 : 2;
    this.setMatCardContentHeight(window.innerWidth);
  }
}
