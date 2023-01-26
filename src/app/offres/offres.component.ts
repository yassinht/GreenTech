import { Component, OnInit } from '@angular/core';
import { OffreService } from '../shared/services/offre.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  board: string;
  errorMessage: string;
  offres: any;

  constructor(private offreService: OffreService) { }

  ngOnInit() {
    this.getOffres();
  }
  getOffres(){
    this.offreService.getall().subscribe(
      data => {
        this.board = data;
        console.log(data);
        this.offres = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

  deleteOffre(id)
  {
    this.offreService.deleteOffre(id)
    .subscribe(
      data => {
        console.log(data);
        this.getOffres();
      },
      error => console.log(error));
  }

}
