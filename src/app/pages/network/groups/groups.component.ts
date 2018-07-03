import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

	groupInfos: any;
	connectionInfos: any;

  constructor() { 
  	this.groupInfos = ["Country: USA, Albania, KSA", "Free text search: btc, bitcoin", "Property Tags: documentAutomation", "Connection type: Email contact", "Document received: =5"];
  
  	this.connectionInfos = [
	  	{color: "pink", name: "Dr. John Doe", id: 0, relation: "Connection", type: "Mannually Added"},
	  	{color: "blue", name: "Dr. John Doe", id: 0, relation: "Connection", type: "Automatically Added"},
	  	{color: "gray", name: "Dr. John Doe", id: 0, relation: "Connection", type: "Mannually Added"}
  	]
  }

  ngOnInit() {
  }

  setColor(val) {
    let styles = {};
    if(val == 'pink') {
      styles = {
        'color': 'rgb(36, 164, 239)'
      }
    } else if(val == 'blue') {
      styles = {
        'color': 'rgb(84, 0, 222)'
      }
    } else if(val == 'gray') {
      styles = {
        'color': 'rgb(59, 73, 140)'
      }
    } else {
      styles = {
        'color': 'rgb(0, 0, 0)'
      }
    }
    return styles;
  }

  openDialog(connectInfo) {
    console.log(connectInfo);
  }
}
