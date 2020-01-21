import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-frontend';
  public selected_member = {id: 0, name: '', address:'', phone:'', email: ''};

  members = [
    {id: 1, name: 'Member 01', address:'Rua 01', phone:'', email: ''},
    {id: 2, name: 'Member 02', address:'Rua 02', phone:'', email: ''},
    {id: 3, name: 'Member 03', address:'Rua 03', phone:'', email: ''},
  ];

  constructor(private api: ApiService,
              private router: Router){
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
    this.router.navigate(['member-detail', member.id]);

  };

}
