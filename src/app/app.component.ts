import { ShoppingItem } from './models/shopping-item';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/model/app-state';
import { Observable } from 'rxjs';
import {v4 as uuid} from 'uuid';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  shoppingItems : Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newShoppingItem : ShoppingItem = {id: '', name: ''};
  constructor(private store : Store<AppState>){}

  ngOnInit(){
    this.shoppingItems = this.store.select(state => state.shopping.list);
    this.loading$ = this.store.select(state => state.shopping.loading);
    this.error$ = this.store.select(state => state.shopping.error);
  }

  addItem(){
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = {id: '', name: ''};
  }
  deleteItem(id:string){
    this.store.dispatch(new DeleteItemAction(id));
  }
}
