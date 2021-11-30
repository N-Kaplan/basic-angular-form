import {Component, OnInit} from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  title = 'friend-book';
  languages = [
    {value: 'css', name: 'CSS'},
    {value: 'html', name: 'HTML'},
    {value: 'javascript', name: 'JavaScript'},
    {value: 'php', name: 'PHP'}
  ];
  friendModel = new Friend('', '', '', '', '');

  allFriends =  [{firstName: 'Coach', lastName: 'Tim', email: 'tim.broos@becode.org', phoneNr: '0469420666', move: 'Yeet', favLanguage: 'Javascript'}];

  constructor(private addFriendService: AddFriendService) {
  }

  public submit() {
    //console.log(this.friendModel);
    this.addFriendService.addFriend(this.friendModel).subscribe(data => {
      // console.log('hello');
      this.displayFriends('http://localhost:9000/allFriends').then((value) => {
        // console.log(value);
        this.allFriends = value;
      });

    }, error => "it didn't work"); //returns "observable". in order to get this data: subscribe to it
  }

  //request headers: see https://javascript.info/fetch#request-headers
  public async displayFriends(url:string):Promise<any> {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return await response.json();
  }

  //call the fetch function on pageload
  ngOnInit(): any {
    console.log('hello');
    this.displayFriends('http://localhost:9000/allFriends');
  };

}
