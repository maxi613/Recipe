import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { deleteModel } from '../shared/Models/delete';
import { filter } from 'rxjs';
import { InternalStorageService } from '../shared/services/internal-storage/internal-storage.service';

@Component({
  //imports : [CommonModule],
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss'
})
export class ListRecipesComponent {
  @ViewChild('recipeinput') recipeInput: any;

  constructor(public dialog:MatDialog, private internalStorage: InternalStorageService){}

  addClicked: boolean=false;

  recipes : string[]=[]

  showInput(){
    this.addClicked = true;
    setTimeout(()=>{
      this.recipeInput.nativeElement.focus();
    },10)
  }

  addRecipe($event: any){
 
    if($event.key==='Enter'){

      this.recipes.push($event.target.value)
      this.internalStorage.initDataset($event.target.value);
      $event.target.value= '';
      this.addClicked = false;
    }

    if($event.key==='esc'){
      $event.target.value= '';
      this.addClicked = false;
    }

  }

  intputDefocued(){
    this.addClicked=false;
    this.recipeInput.nativeElement.value ='';
  }

  deleteItem(item: string){
    
    let deleteObj: deleteModel= {
      name: item, 
      delete: false
    }

    const dialogref = this.dialog.open(DeleteDialogComponent,{
      data:{name: deleteObj.name, delete: deleteObj.delete},
      width: '400px'
    })
    dialogref.afterClosed().pipe(filter(data => data.delete == true)).subscribe(()=> {
      let index=this.recipes.indexOf(item);

      this.recipes.splice(index, index)
  
      if(index == 0){
        console.log(index)
        this.recipes.splice(index, index+1)
      }
    });
  }

}
