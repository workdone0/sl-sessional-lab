import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../notices.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-display-notice',
  templateUrl: './display-notice.component.html',
  styleUrls: ['./display-notice.component.css'],
})
export class DisplayNoticeComponent implements OnInit {
  public noticeList;
  constructor(private nbService: NoticesService, private http: HttpClient) {}

  ngOnInit() {
    let obs = this.http.get('http://localhost:3000/api/notice');
    obs.subscribe((response) => {
      console.log(response);
      this.noticeList = response;
    });
  }
}
