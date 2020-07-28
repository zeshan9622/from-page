import { Component, OnInit } from '@angular/core';
import  *  as  data  from  './data.json';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor() { }

dashbordData
purchase
Product
  ngOnInit() {
    this.dashbordData= data["default"][0]["Sales Product"]
    this.purchase= data["default"][1]["Box"]
    this.Product= data["default"][2]["Product Planning"]
    // console.log(data["default"])
   
  }

}
