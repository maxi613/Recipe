import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ListRecipesComponent } from '../list-recipes/list-recipes.component';
import { deleteModel } from '../shared/Models/delete';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<ListRecipesComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: deleteModel,) {}

    confirmDelete(){
      this.data.delete = true;
    }

    declined(){
      this.data.delete = false; 
    }
}
