import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor(http: HttpClient) {
    this.http = http;
  }
  private http: HttpClient;

}
