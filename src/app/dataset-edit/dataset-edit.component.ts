import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { RecipeTableComponent } from '../recipe-table/recipe-table.component';
import { attribute } from '../shared/Models/recipe';
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


interface editDataset{
  name: string, 
  attributes: attribute<any>[]
}
interface selectObtions{
  name: string, 
  id: number,
}
@Component({
  selector: 'app-dataset-edit',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatSelectModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './dataset-edit.component.html',
  styleUrl: './dataset-edit.component.scss'
})



export class DatasetEditComponent {
  
  constructor( public dialogRef: MatDialogRef<RecipeTableComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: editDataset){
     if(!data.attributes.find((value)=> value.name == 'ID')) { 
        data.attributes.push({
        name: 'ID',
        typeWritte: 'string',
        disabled: true
      }) 
      }
    }
  

  datatypes:selectObtions[] = [
    {name: 'Int16', id: 1, }, 
    {name: 'Int32', id: 2,}, 
    {name: 'Int64', id: 3,}, 
    {name: 'String', id: 4,}, 
    {name: 'Real', id: 5,},
    {name: 'Real64', id: 6,}, 
    {name: 'Boolean', id: 7,},
    {name: 'Char', id: 8,},   
  ]
  selectedValue = null;
  addAtribute(){
    let attribute:attribute<any>={
      name:'',
      typeWritte:'',
      disabled: false
    }

    this.data.attributes.push(attribute);
  }

  removeAttribute(attribute: attribute<any>){
    if(attribute.name!= 'ID'){
      this.data.attributes = this.data.attributes.filter(element=>{ return element !== attribute})
    }
  }

  selectChanged($event: any, index: number){
    this.data.attributes[index].typeWritte = $event; 
  }
}
