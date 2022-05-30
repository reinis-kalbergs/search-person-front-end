import {Component, OnInit} from '@angular/core';
import {PersonService} from "../service/person.service";
import {catchError, Observable, of} from "rxjs";
import {Person} from "../model/person.model";

@Component({
  selector: 'app-find-person',
  templateUrl: './find-person.component.html',
  styleUrls: ['./find-person.component.scss']
})
export class FindPersonComponent implements OnInit {

  personNotFound: boolean = false;
  person$: Observable<Person> | undefined;
  personalIdInput: string = '';
  dateOfBirthInput: string = '';

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
  }

  searchPerson(): void {
    this.personNotFound = false;
    this.person$ = this.personService.getPerson(this.personalIdInput, this.dateOfBirthInput)
      .pipe(
        catchError(error => {
          this.personNotFound = true;
          return of();
        })
      );
  }
}
