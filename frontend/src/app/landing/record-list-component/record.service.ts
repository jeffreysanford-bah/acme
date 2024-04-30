import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, find } from 'rxjs';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private baseUrl = 'http://localhost:3000/api/records';
  selectedUserID = "0000000";

  constructor(private http: HttpClient) { }

  // Method to get a record by UID
  getRecordByUID(UID: string): Observable<any> {
    const url = `${this.baseUrl}/${UID}`;
    return this.http.get(url);
  }

  // Method to get all records
  getAllRecords(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  setSelectedUID(uid: string): void {
    this.selectedUserID = uid;
  }

  getSelectedUID(): string {
    return this.selectedUserID;
  }
}
