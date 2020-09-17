import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtTokenClientService} from './jwt-token-client.service';

@Injectable({
  providedIn: 'root'
})
export class ThovenApiService {

  baseUrl: string;

  constructor(private http: HttpClient, private jwtTokenClientService: JwtTokenClientService) {
    this.baseUrl = 'https://thoven-api.herokuapp.com';
  }

  public getUserInfoByUsername(username): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(this.baseUrl + '/api/v1/thoven/user/' + username, {headers});
  }

  public getAllCardsOfUser(userinfo): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.post<any[]>(this.baseUrl + '/api/v1/thoven/user-cards', userinfo, {headers});
  }

  public getAllUsers(): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.get<any[]>(this.baseUrl + '/api/v1/thoven/users', {headers});
  }

  public getAllGroupsOfUser(userinfo): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.post<any[]>(this.baseUrl + '/api/v1/thoven/user-groups', userinfo, {headers});
  }

  public getGroupByGroupName(groupName): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(this.baseUrl + '/api/v1/thoven/group/' + groupName, {headers, responseType: 'text' as 'json'});
  }

  public createCard(cardInfo): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post(this.baseUrl + '/api/v1/thoven/create-card', cardInfo, {headers, responseType: 'text' as 'json'});
  }

  public getAllGroupsAdminDetailsOfUser(userinfo): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.post<any[]>(this.baseUrl + '/api/v1/thoven/user-groups-admin-details', userinfo, {headers});
  }

  public getCountOfCardsOfGroup(groupInfo): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post(this.baseUrl + '/api/v1/thoven/count-cards', groupInfo, {headers});
  }

  public getCardsOfGroup(groupnfo): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.post<any[]>(this.baseUrl + '/api/v1/thoven/group-cards', groupnfo, {headers});
  }

  public getCountOfMembersOfGroup(groupInfo): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post(this.baseUrl + '/api/v1/thoven/count-members', groupInfo, {headers});
  }

  public getUsersOfGroup(groupnfo): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.post<any[]>(this.baseUrl + '/api/v1/thoven/group-members', groupnfo, {headers});
  }

  public generateShortUrl(cardId: number, longUrl): Observable<string> {
    const headers = this.createHeaders();
    return this.http.post<string>(this.baseUrl + '/thoven/url-shortener/' + cardId, longUrl, {headers});
  }

  public createGroup(groupInfo): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post(this.baseUrl + '/api/v1/thoven/create-group', groupInfo, {headers});
  }

  public createUserGroups(userGroupInfo): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post(this.baseUrl + '/api/v1/thoven/create-user-groups', userGroupInfo, {headers});
  }

  public deleteCardByCardId(cardId): Observable<any> {
    const headers = this.createHeaders();
    return this.http.delete(this.baseUrl + '/api/v1/thoven/delete-card/' + cardId, {headers});
  }

  public updateCardByCardId(cardId, cardInfo): Observable<any> {
    const headers = this.createHeaders();
    return this.http.put(this.baseUrl + '/api/v1/thoven/update-card/' + cardId, cardInfo, {headers});
  }

  public updateUserGroupByUserGroupId(userGroupId, userGroupInfo): Observable<any> {
    const headers = this.createHeaders();
    return this.http.put(this.baseUrl + '/api/v1/thoven/update-user-group/' + userGroupId, userGroupInfo, {headers});
  }

  public deleteUserGroupByUserGroupId(userGroupId): Observable<any> {
    const headers = this.createHeaders();
    return this.http.delete(this.baseUrl + '/api/v1/thoven/delete-user-group/' + userGroupId, {headers});
  }


  public createHeaders(): HttpHeaders {
    let tokenString = 'Bearer ' + this.jwtTokenClientService.getToken();
    return new HttpHeaders().set('Authorization', tokenString);
  }
}
