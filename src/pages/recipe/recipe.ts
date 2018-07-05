import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditRecipePage } from '../edit-recipe/edit-recipe';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {
  constructor(private navCtrl:NavController){}
  onNewRecipe(){
    this.navCtrl.push(EditRecipePage,{mode:'New'})
  }
}
