import { Component } from '@angular/core';
import { InternalStorageService } from '../shared/services/internal-storage/internal-storage.service';
import { attribute, dataset, recipe } from '../shared/Models/recipe';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router'
import { MatDialog } from '@angular/material/dialog';
import { DatasetEditComponent } from '../dataset-edit/dataset-edit.component';

@Component({
  selector: 'app-recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrl: './recipe-table.component.scss'
})
export class RecipeTableComponent {

  public dataset: dataset | undefined; 
  constructor(private internalStorage: InternalStorageService, private route: ActivatedRoute, private router: Router, public dialog:MatDialog, ){}
  private recipeName: string;

  ngOnInit(){
    let id = this.route.params.subscribe((parameter: Params)=>{
      this.dataset = this.internalStorage.getDataset(parameter["name"]);

      if(this.dataset?.attributes.length ==  0){

        this.openEditDialog();  
      
      }
    })
  }

  openEditDialog(){
    if(this.dataset != undefined){
      const dialogref = this.dialog.open(DatasetEditComponent,{
        data:{name: this.dataset.name, attributes: this.dataset.attributes },
        width: '600px',
        height: 'auto'
      })
      dialogref.afterClosed().subscribe((result:attribute<any>[])=> {
        if(this.dataset != undefined){
          this.dataset.attributes = result;
        }
      });
    }
  }

  addRow(){
    let length = this.dataset?.recipes.length;
    if(length!= undefined){

      let _values: any[] = new Array<any>(this.dataset?.attributes.length);
      
      let recipe: recipe = {id: (length+1).toString(), values : _values }; 
      _values[0] = recipe.id;
      this.dataset?.recipes.push(recipe);
      console.log(this.dataset?.recipes)
    }else{
      console.log("Error adding Recripe. ID is undefined");
    }
    
  }
}
