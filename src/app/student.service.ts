import { Injectable } from '@angular/core';
import { Student } from './student';
import {STUDENTS} from './studentData';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students?: Student[];
  link = 'http://localhost:3000/api/student';

  constructor(
    private http: HttpClient
  ) { }

  // getStudents(): Student[] {
  //   return STUDENTS;
  // }

  getStudents(): Observable<Student[]>{
    return  this.http.get<Student[]>(this.link);
  }

  getFakeStudents(){
    return this.students;
  }


  // getStudentById(id: number): Student {
  //   const Student = this.students.find(student => {
  //     return student.id == id;
  //   });
  //   return student;
  // }

  // createStudent(student: Student) : void {
  //   console.log(student);
  //   student.id = this.students?[this.student.length - 1].id + 1;
  //   this.students?.push(student)
  // }

  // createStudent(student: Student) : void {
  //   console.log(student);
  //   return this.http.post(this.link.personne);
  // }

}
