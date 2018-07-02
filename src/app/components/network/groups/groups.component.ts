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
	  	{name: "Dr. John Doe", id: 0, relation: "Connection", type: "Mannually Added"},
	  	{name: "Dr. John Doe", id: 0, relation: "Connection", type: "Automatically Added"},
	  	{name: "Dr. John Doe", id: 0, relation: "Connection", type: "Mannually Added"}
  	]
  }

  ngOnInit() {
  }
}
