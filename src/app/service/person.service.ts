import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../model/person.model";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  getPerson(personalId: string, dateOfBirth: string): Observable<Person> {

    const url = 'http://localhost:8080/person';
    return this.http.get<Person>(`${url}?id=${personalId}&date=${dateOfBirth}`)
  }
}
