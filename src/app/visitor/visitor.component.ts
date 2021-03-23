import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {

  constructor(private visitorService: VisitorService) { }

  visitorList: any;
  ngOnInit(): void {
    this.visitorService.getVisitors().subscribe(res => {
      console.log(res)
      this.visitorList = res;
    })
  }

}
