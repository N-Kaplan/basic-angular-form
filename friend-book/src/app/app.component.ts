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

  ngOnInit() {
    // this.observable.subscribe(
    //   data => console.log(data),
    //   error => console.log(error),
    //   () => console.log('Subscription finished')
    // )
    // console.log('Initialization')
  }
  }


  public submit() {
    console.log(this.friendModel);
    this.addFriendService.addFriend(this.friendModel) //returns "observable". in order to get this data: subscribe to it

  }

}
