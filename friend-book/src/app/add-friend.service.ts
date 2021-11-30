import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Friend} from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor(http: HttpClient) {
    this.http = http;
  }
  private http: HttpClient;

  url:string ="";

  addFriend(friend:Friend) {

    return this.http.post(this.url, friend)
  }

}
