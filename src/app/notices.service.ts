import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class NoticesService {
  constructor(private http: HttpClient) {}

  getNotice() {
    return this.http.get('http://localhost:3000/api/notice');
  }
}
