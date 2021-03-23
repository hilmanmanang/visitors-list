import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  date: any;
  month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  today: any;
  time: any;

  ngOnInit(): void {
    this.date = new Date();
    this.today = this.date.getDate() + " " + this.month[this.date.getMonth()] + " " + this.date.getFullYear();
    this.time = this.date.getHours() + ":" + this.date.getMinutes()
    console.log(this.today)
    console.log(this.time)
  }

}
