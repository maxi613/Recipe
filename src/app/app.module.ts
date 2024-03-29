import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { ContextMenuComponent } from './shared/context-menu/context-menu.component';
import {MatDialogModule} from '@angular/material/dialog'
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { RecipeTableComponent } from './recipe-table/recipe-table.component';
import {MatTooltipModule, TooltipComponent} from '@angular/material/tooltip';
import { RouterModule, ActivatedRoute} from '@angular/router';
import { routes } from './app.routes';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { DatasetEditComponent } from './dataset-edit/dataset-edit.component';

@NgModule({
    imports:      [ BrowserModule, MatDialogModule, CommonModule, MatTooltipModule, RouterModule.forRoot(routes), MatSelectModule, MatButtonModule, DatasetEditComponent],
    providers:    [ ],
    declarations: [ AppComponent,
    ListRecipesComponent, RecipeTableComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }