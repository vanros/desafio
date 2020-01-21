import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-frontend';
  public selected_member = {id: 0, name: '', address:'', phone:''};

  members = [
    {name: 'Member 01', id: 1, address:'Rua 01', photo:'http://www.minhaapp.com/photo1.png'},
    {name: 'Member 02', id: 2, address:'Rua 02', photo:'http://www.minhaapp.com/photo2.png'},
    {name: 'Member 03', id: 3, address:'Rua 03', photo:'http://www.minhaapp.com/photo3.png'},
  ];

  constructor(private api: ApiService){
    this.getMembers();

  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data;
      },
      error => {
        console.log("Ocorreu um erro", error.message);
      }
    );
  };

  memberClicked = (member) => {

  };

}
