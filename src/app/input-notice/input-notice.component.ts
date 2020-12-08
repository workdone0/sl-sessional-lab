import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../notices.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-input-notice',
  templateUrl: './input-notice.component.html',
  styleUrls: ['./input-notice.component.css'],
})
export class InputNoticeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  onClickSubmit(data) {
    console.log(data);
    const notice = {
      date: data.date,
      title: data.title,
      body: data.body,
      status: data.status,
    };
    this.http
      .post<any>('http://localhost:3000/api/notice', notice)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
