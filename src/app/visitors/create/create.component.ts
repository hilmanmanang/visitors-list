import { Component, OnInit } from '@angular/core';
import { VisitorService } from 'src/app/visitor.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private visitorService: VisitorService) { }

  ngOnInit(): void {
  }

}
