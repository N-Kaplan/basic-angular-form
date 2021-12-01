import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeleteFriendService {

  constructor(private http: HttpClient) {}

  private url: string = "http://localhost:9000/deleteFriend";

  deleteFriend(email:any) {
    return this.http.post(this.url, email)
  }
}
