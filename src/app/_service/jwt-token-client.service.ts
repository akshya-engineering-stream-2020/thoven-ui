import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenClientService {

  token: string;
  userName: string;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://thoven-api.herokuapp.com';
  }

  public generateToken(request): Observable<any> {
    return this.http.post(this.baseUrl + '/api/v1/thoven/authenticate', request, {responseType: 'text' as 'json'});
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
