import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITeam } from '../models/team.interface';
import { Observable } from 'rxjs';

@Injectable()
export class TeamService{

    apiURL: string

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){ 
        this.apiURL = baseUrl
    }
 
    getTeams() : Observable<ITeam[]> {
        return this.http.get<ITeam[]>(this.apiURL + 'api/teams'); 
    }

    addTeam(team: ITeam) : Observable<ITeam> {
        return this.http.post<ITeam>(this.apiURL + 'api/teams', team);
    }

}