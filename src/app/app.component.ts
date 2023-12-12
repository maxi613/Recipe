import { Component, HostListener } from '@angular/core';
import { invoke } from '@tauri-apps/api';
import { open, save} from '@tauri-apps/api/dialog';
import { InternalStorageService } from './shared/services/internal-storage/internal-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private internaleStrorage: InternalStorageService){}
  ngOnInit(){
    this.internaleStrorage.newProjekt('myFirsProject');
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue ='Your changes will not be saved'; 
  }

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
      console.log(this.internaleStrorage.saveProject())
    } else if (path === null) {
      console.log('canceled')
    }
  }

  
}
