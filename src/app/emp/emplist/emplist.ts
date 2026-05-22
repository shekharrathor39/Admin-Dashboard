import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { EmpService } from '../../services/employee';
import { EmpAddEdit } from '../../emp/emp-add-edit/emp-add-edit';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-emplist',
  
    imports: [
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    HttpClientModule,
    DatePipe,
    CurrencyPipe,
    MatButtonModule,
    
    
  ],
  providers: [EmpService],
  templateUrl: './emplist.html',
  styleUrl: './emplist.css',
})
export class Emplist implements OnInit{
  
  displayedColumns: string[] = [
  'firstName',
  'lastName',
  'email',
  'company',
  'exprience',
  'action'
  ];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private Dialog: MatDialog,
    private http: HttpClient,
    private EmpService: EmpService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  OpenAddEditEpmForm(): void {
    const dialogRef = this.Dialog.open(EmpAddEdit, {
  disableClose: true
});
    dialogRef.afterClosed().subscribe(() => {
      this.getEmployeeList();
    });

  }

  getEmployeeList(): void {

    this.http.get<any[]>('http://localhost:3001/employees').subscribe({
      next: (res) => {
        this.dataSource.data = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue =
      (event.target as HTMLInputElement).value;

    this.dataSource.filter =
      filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
deleteemployee(id: number): void {

  const confirmDelete = confirm(
    'Are you sure you want to delete this Data?'
  );

  if (confirmDelete) {

    this.EmpService.deleteEmployee(id).subscribe({

      next: () => {

        this.snackBar.open(
          'Employee deleted successfully',
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          }
        );

        this.getEmployeeList();

      },

      error: () => {

        this.snackBar.open(
          'Something went wrong',
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          }
        );

      }

    });

  }

}
OpenEditForm(data: any):void{
  const dialogRef=this.Dialog.open(EmpAddEdit, {
    data:data,
    disableClose:true,
  });

    dialogRef.afterClosed().subscribe(() => {
      this.getEmployeeList();
    });
}
 }   