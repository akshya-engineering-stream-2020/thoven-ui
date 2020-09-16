import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenClientService {

  token: string;
  userName: string;

  constructor(private http: HttpClient) {
  }

  public generateToken(request): Observable<any> {
    return this.http.post('http://localhost:8888/api/v1/thoven/authenticate', request, {responseType: 'text' as 'json'});
  }

  public setToken(token): void {
    this.token = token;
  }

  public getToken(): string {
    return this.token;
  }

  public setUsername(username): void {
    this.userName = username;
  }

  public getUsername(): string {
    return this.userName;
  }
}
