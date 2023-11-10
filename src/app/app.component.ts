import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from '@tauri-apps/api';
import { open, save} from '@tauri-apps/api/dialog';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { onEventShowMenu } from "tauri-plugin-context-menu";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListRecipesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tauriapp';
  response: string;

  async ping(){
    this.response = await invoke('ping');
  }


  async save(){
    const path = await save({
      filters: [{
        name: 'json',
        extensions: ['json']
      }]
      
    });
    if (path) {
      console.log(path)
    } else if (path === null) {
      console.log('canceled')
    }
  }
}
