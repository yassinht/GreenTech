import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  board: string;
  errorMessage: string;
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.userService.getall().subscribe(
      data => {
        this.board = data;
        console.log(data);
        console.log(data[0].roles[0].nom);
        this.users = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
    /*
    this.users = this.users.filter(s => {
      return s.roles[0].name == 'ROLE_USER';
    })
    */
  }

  deleteUser(id)
  {
    this.userService.deleteUser(id)
    .subscribe(
      data => {
        console.log(data);
        this.getUsers();
      },
      error => console.log(error));
  }

  blockeUser(user)
  {
    let record={};
    record = user;
    record['etat']="bloquer";
    console.log(record);
    this.userService.updateUser(user.id,record)
    .subscribe(
      data => {
        console.log(data);
        this.getUsers();
      },
      error => console.log(error));
  }

}
