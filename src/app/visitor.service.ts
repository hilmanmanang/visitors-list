import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getVisitors() {
    return this.http.get(`${this.uri}/visitors`);
  }

  getVisitorById(id: any) {
    return this.http.get(`${this.uri}/visitors/${id}`);
  }

  addVisitor(name: any, idNo: number, company: any, host: any, purpose: any) {
    const visitor = {
      name: name,
      idNo: idNo,
      company: company,
      host: host,
      purpose: purpose
    };

    return this.http.post(`${this.uri}/visitors/add`, visitor);
  }

  updateVisitor(id: any, name: any, idNo: number, company: any, host: any, purpose: any) {
    const visitor = {
      name: name,
      idNo: idNo,
      company: company,
      host: host,
      purpose
    };

    return this.http.post(`${this.uri}/visitors/update/${id}`, visitor);
  }

  deleteVisitor(id: any) {
    return this.http.get(`${id}/visitors/delete/${id}`);
  }
}
