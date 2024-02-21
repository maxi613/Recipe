import { Routes } from '@angular/router';
import { RecipeTableComponent } from './recipe-table/recipe-table.component';

export const routes: Routes = [{
    path: 'recipe/:name', component: RecipeTableComponent
}];
