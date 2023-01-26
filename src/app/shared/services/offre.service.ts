import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private offreUrl = 'http://localhost:8080/api/offres';

  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    return this.http.get(this.offreUrl);
  }

  addOffre(offre): Observable<string> {
    return this.http.post<string>(this.offreUrl, offre, httpOptions);
  }

  deleteOffre(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.offreUrl}/${id}`, { responseType: 'text' });
  }
}
