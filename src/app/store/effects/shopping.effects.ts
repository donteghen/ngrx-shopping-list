import { Injectable } from "@angular/core"
import { Effect, ofType, createEffect, Actions } from "@ngrx/effects"
//import { Actions } from "@ngrx/store-devtools/src/reducer"
import { of } from "rxjs"
import { mergeMap, map, catchError } from "rxjs/operators"
import { ShoppingService } from "src/app/service/shopping.service"
import { LoadShoppingAction, LoadShoppingSuccessAction, LoadShoppingFailureAction, ShoppingActionType, AddItemAction, AddItemSuccessAction, AddItemFailureAction, DeleteItemAction, DeleteItemSuccessAction, DeleteItemFailureAction } from "../actions/shopping.action"

@Injectable()
export class ShoppingEffects {
    loadShopping$ = createEffect(() => this.actions$.
    pipe(ofType<LoadShoppingAction>(ShoppingActionType.LOAD_SHOPPING),
    mergeMap(()=> 
    this.shoppingService.getShoppingItems()
    .pipe(
        map(data =>{ return new LoadShoppingSuccessAction(data)},
       catchError(error => of(new LoadShoppingFailureAction(error)))
    ),))));

    addItem$ = createEffect(()=> this.actions$
    .pipe(ofType<AddItemAction>(ShoppingActionType.ADD_ITEM),
    mergeMap((data)=> this.shoppingService.addShoppingItem(data.payload)
    .pipe(
        map(()=> new AddItemSuccessAction(data.payload)),
    catchError(error => of(new AddItemFailureAction(error)),
    )))));

    deleteItem$ = createEffect(()=> this.actions$
    .pipe(
        ofType<DeleteItemAction>(ShoppingActionType.DELETE_ITEM),
        mergeMap((data) => this.shoppingService.deleteShoppingItem(data.payload)
        .pipe(
            map(() => new DeleteItemSuccessAction(data.payload)),
            catchError(error => of(new DeleteItemFailureAction(data.payload)),)
        ))
    ))
  constructor(private actions$: Actions, private shoppingService: ShoppingService) { }
}