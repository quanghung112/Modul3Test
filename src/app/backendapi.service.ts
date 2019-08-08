import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {

  apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get(`${this.apiUrl}`);
  }

  addCustomer(id: number, title: string, author: string, description: string): Observable<any> {
    const data = {id, title, author, description};
    return this.http.post(`${this.apiUrl}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  detail(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  update(id: number, title: string, author: string, description: string): Observable<any> {
    const data = { title, author, description};
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
