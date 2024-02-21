import { Injectable } from '@angular/core';
import { attribute, dataset, project, recipe } from '../../Models/recipe';
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
      datasets:[]
    }

    this.project = _project;
  }

  public getDatasets(): dataset[] | undefined{
    return this.project.datasets;
  }

  public getDataset(id: string):dataset | undefined{
    return this.project.datasets?.find(dataset => dataset.name == id)

  }


  public initDataset(name:string){
    let newID: string; 

    this.project.datasets?.length == undefined ? newID = "1" : newID =(this.project.datasets?.length+1).toString();

    if(newID != undefined){
      let dataset: dataset ={
        name: name, 
        id: newID.toString(), 
        attributes: [],
        recipes: []
      }
      
      this.project.datasets?.push(dataset);
    }

  }

  async saveProject(){
    
     let response = await invoke('save_project', {project_id: ''})
     console.log(response)
  }
}
