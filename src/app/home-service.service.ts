import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  students = [
    {name: "Alex" , description: "Alex Details" , email: "alex@demo.net"},
    {name: "Ana" , description: "Ana Details" , email: "ana@demo.net"},
    {name: "Sara" , description: "Sara Details" , email: "sara@demo.net"},
    {name: "John" , description: "John Details" , email: "john@demo.net"},
  ]

  constructor() { }

  public getStudents() : Array<{name, description, email}>{
    return this.students;
  }

  public createStudent(students: {name, description, email}){
    this.students.push(students);
  }

}
