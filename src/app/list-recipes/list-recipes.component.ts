import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { showMenu } from "tauri-plugin-context-menu";
import { Item, Options } from 'tauri-plugin-context-menu/dist/types';

@Component({
  selector: 'app-list-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss'
})
export class ListRecipesComponent {
  @ViewChild('recipeinput') recipeInput: any;

  addClicked: boolean=false;
  recipes:string[] = ['Station 220','Station 320','Station 230']
  listInput: number[] =[];

  showInput(){
    this.addClicked = true;
    setTimeout(()=>{
      this.recipeInput.nativeElement.focus();
    },10)
  }

  addRecipe($event: any){

    if($event.key==='Enter'){
      this.recipes.push($event.target.value)
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

  showContextMenu($event: any){
    console.log($event)
    let deleteItem: Item ={
      label: 'Delte',
      shortcut: 'CTRL+X',
      event: (e)=>{
        console.log(e);
      }
    }
    showMenu({
      items:[deleteItem]

    })

  }
}
