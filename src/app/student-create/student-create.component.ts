import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student : {name: string, description: string, email: string} = 
             {name: '', description: '', email:''}
       
  constructor(public homeService: HomeServiceService) { }

  ngOnInit(): void {
  }

  createStudent(){
    console.log(this.student);
    this.homeService.createStudent(this.student);
    this.student = {name: '', description:'', email:''}
  }

}
