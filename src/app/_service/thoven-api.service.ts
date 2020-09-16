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

  public getUserInfoByUsername(username): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get('http://localhost:8888/api/v1/thoven/user/' + username, {headers});
  }

  public getAllCardsOfUser(userinfo): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.post<any[]>('http://localhost:8888/api/v1/thoven/user-cards', userinfo, {headers});
  }

  public getAllUsers(): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.get<any[]>('http://localhost:8888/api/v1/thoven/user', {headers});
  }

  public createGroup(groupUserDetails): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post('http://localhost:8888/api/v1/thoven/group/create-group', groupUserDetails, {headers});
  }

  public getAllGroupsOfUser(userinfo): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.post<any[]>('http://localhost:8888/api/v1/thoven/user-groups', userinfo, {headers});
  }

  public getGroupByGroupName(groupName): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>('http://localhost:8888/api/v1/thoven/group/' + groupName, {headers, responseType: 'text' as 'json'});
  }

  public createCard(cardInfo): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post('http://localhost:8888/api/v1/thoven/create-card', cardInfo, {headers, responseType: 'text' as 'json'});
  }

  public createHeaders(): HttpHeaders {
    let tokenString = 'Bearer ' + this.jwtTokenClientService.getToken();
    return new HttpHeaders().set('Authorization', tokenString);
  }
}
