import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../services/employee';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.html',
  styleUrls: ['./view.css'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule]
})

export class ViewComponent implements OnInit {

  employeeList: any[] = [];

  constructor(private EmpService: EmpService) {}

  ngOnInit(): void {

    this.getEmployeeList();

  }

  getEmployeeList() {

    this.EmpService.getEmployees().subscribe({

      next: (res: any) => {

        this.employeeList = res;
    
      },

      error: (err) => {

        console.log(err);

      }

    });

  }

}