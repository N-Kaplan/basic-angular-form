import { Component } from '@angular/core';
import { Friend } from "./friend";
import { AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'friend-book';
  languages = [
    {value: 'css', name: 'CSS'},
    {value: 'html', name: 'HTML'},
    {value: 'javascript', name: 'JavaScript'},
    {value: 'php', name: 'PHP'}
  ];
  friendModel = new Friend('', '', '', '', '');

  constructor(private addFriendService: AddFriendService) {
  }

  public submit() {
    console.log(this.friendModel);
    return this.addFriendService.addFriend(this.friendModel).subscribe(data => "it worked", error => "it didn't work"); //returns "observable". in order to get this data: subscribe to it
  }

}
