import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/users';
  private user = 'http://localhost:8080/api/users/block';

  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  addUser(user): Observable<string> {
    return this.http.post<string>(this.userUrl, user, httpOptions);
  }

  deleteUser(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.userUrl}/${id}`, { responseType: 'text' });
  }

  updateUser(id: number , value : any): Observable<any> {
    console.log(id);
    return this.http.put(`${this.user}/${id}`, { responseType: 'text' });
  }
}
