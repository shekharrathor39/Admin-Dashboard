import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { MatAnchor } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule, } from '@angular/material/snack-bar';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { DialogRef } from '@angular/cdk/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

/* FIXED IMPORT */
import { EmpService } from '../../services/employee';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-emp-add-edit',
  standalone: true,

  imports: [
    MatDialogContent,
    MatPaginator,
    MatDialogActions,
    ReactiveFormsModule,
    MatSnackBarModule,
    CommonModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatAnchor,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogClose,
  
  ],

  providers: [EmpService],

  templateUrl: './emp-add-edit.html',
  styleUrl: './emp-add-edit.css'
})

export class EmpAddEdit implements OnInit {

  empform: FormGroup;
  submitted = false;

  values = [
    { value: 'matric', viewValue: 'Matric' },
    { value: 'diploma', viewValue: 'Diploma' },
    { value: 'graduate', viewValue: 'Graduate' },
    { value: 'postgraduate', viewValue: 'Post Graduate' }
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: DialogRef<EmpAddEdit>,
    private empService: EmpService,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.empform = this.fb.group({

      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      dob: [''],

      gender: [
        '',
        Validators.required
      ],

      education: [
        '',
        Validators.required
      ],

      company: [
        '',
        Validators.required
      ],

      /* FIXED NAME */
      experience: [
        '',
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      package: [
        '',
        [
          Validators.min(1)
        ]
      ],

    });

  }

  ngOnInit(): void {

    if (this.data) {
      this.empform.patchValue(this.data);
    }

  }

  onFormSubmit() {

    this.submitted = true;

    if (this.empform.invalid) {
      return;
    }

    if (this.data) {

      this.empService
        .updateEmployee(this.data.id, this.empform.value)
        .subscribe({

          next: () => {

            this.snackbar.open(
              'Employee updated successfully',
              'Close',
              {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top'
              }
            );

            this.dialogRef.close();

          },

          error: (err: any) => {
            console.log(err);
          }

        });

    } else {

      this.empService
        .addEmployee(this.empform.value)
        .subscribe({

          next: () => {

            this.snackbar.open(
              'Employee added successfully',
              'Close',
              {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top'
              }
            );

            this.dialogRef.close();

          },

          error: (err: any) => {

            this.snackbar.open(
              'Operation failed',
              'Close',
              {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top'
              }
            );

            console.log(err);

          }

        });

    }

  }

}