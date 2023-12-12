import { Injectable } from '@angular/core';
import { project, recipe } from '../../Models/recipe';
import { invoke, updater } from '@tauri-apps/api';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class InternalStorageService {

  public project: project; 

  constructor() { }

  newProjekt(_name: string){

    let _project:project = {
      id: `${_name}_${Date.now().toString()}`,
      name: _name, 
      creationDate: Date.now(), 
      recipes: undefined,
    }

    this.project = _project;
  }

  public getRecipes(): recipe[] | undefined{
    return this.project.recipes;
  }


  public initRecipe(name:string){
    let newID: string; 
   
     this.project.recipes?.length == undefined ? newID = "1" : newID =(this.project.recipes?.length+1).toString();

    if(newID != undefined){
      let recipe: recipe ={
        name: name, 
        id: newID.toString()
      }
      console.log(recipe);
      this.project.recipes?.push(recipe);
      console.log(this.project);
    }

  }

  async saveProject(){
    
     let response = await invoke('save_project', {project_id: ''})
     console.log(response)
  }
}
