// import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../studentData';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student: Student = {
    id: 1,
    name : "test",
    description: "test",
    email: "test@demo.net"
  };

  students = STUDENTS;

  selectedStudent? : Student;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  // getStudents(): void {
  //   this.students = this.studentService.getStudents();
  // }

  getStudents(): void {
    this.studentService.getStudents()
        .subscribe(students => this.students = students);
  }

}
