import {Gender} from "./gender.enum";

export interface Person {
  personalId: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: string;
}
