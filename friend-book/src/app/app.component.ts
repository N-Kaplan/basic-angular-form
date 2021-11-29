import { Component } from '@angular/core';

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
}
