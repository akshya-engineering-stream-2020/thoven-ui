import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtTokenClientService} from './jwt-token-client.service';

@Injectable({
  providedIn: 'root'
})
export class ThovenApiService {

  constructor(private http: HttpClient, private jwtTokenClientService: JwtTokenClientService) {
  }

  public getUserDetails(username): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get('http://localhost:8888/api/v1/thoven/user/' + username, {headers, responseType: 'text' as 'json'});
  }

  public getCardDetailsOfUser(username): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.get<any[]>('http://localhost:8888/api/v1/thoven/user/' + username + '/cardInfo', {headers});
  }

  public createHeaders(): HttpHeaders {
    let tokenString = 'Bearer ' + this.jwtTokenClientService.getToken();
    return new HttpHeaders().set('Authorization', tokenString);
  }
}
