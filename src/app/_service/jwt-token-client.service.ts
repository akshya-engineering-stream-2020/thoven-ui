import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    return this.http.post('http://localhost:8888/api/v1/thoven/user/authenticate', request, {responseType: 'text' as 'json'});
  }

  public welcome(token): Observable<any> {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get('http://localhost:8888/api/v1/thoven/user/getUsername', {headers, responseType: 'text' as 'json'});
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
