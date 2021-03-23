import { Component, OnInit } from '@angular/core';
import { VisitorService } from 'src/app/visitor.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private visitorService: VisitorService) { }

  ngOnInit(): void {
  }

}
