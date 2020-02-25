import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IFootballer } from '../models/footballer.interface';
import { Observable } from 'rxjs';

@Injectable()
export class FootballerService{

    apiURL: string

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){ 
        this.apiURL = baseUrl
    }

    getFootballers(): Observable<IFootballer[]> {
        return this.http.get<IFootballer[]>(this.apiURL + 'api/footballers');
    }
 
    addFootballer(footballer: IFootballer) : Observable<IFootballer>{
        return this.http.post<IFootballer>(this.apiURL + 'api/footballers', footballer); 
    }

    editFootballer(footballer: IFootballer) : Observable<IFootballer>{
        return this.http.put<IFootballer>(this.apiURL + 'api/footballers', footballer); 
    }
}