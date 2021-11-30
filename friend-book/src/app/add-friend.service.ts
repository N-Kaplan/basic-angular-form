import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Friend} from "./friend";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AddFriendService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  url:string ="http://localhost:9000/addFriend";

  addFriend(friend:Friend):Observable<Friend> {

    return this.http.post<Friend>(this.url, friend)
  }

}
