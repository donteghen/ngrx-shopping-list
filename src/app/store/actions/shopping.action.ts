import { Action } from "@ngrx/store"
import { ShoppingItem } from "src/app/models/shopping-item"


export enum ShoppingActionType{
    LOAD_SHOPPING = '[SHOPPING] Load Shopping',
    LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
    LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
    ADD_ITEM = '[Shopping] Add Item',
    ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
    ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
    DELETE_ITEM = '[Shopping] Delete Item',
    DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
    DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure'
}

export class LoadShoppingAction implements Action {
    readonly type = ShoppingActionType.LOAD_SHOPPING
  }
export class LoadShoppingSuccessAction implements Action {
    readonly type = ShoppingActionType.LOAD_SHOPPING_SUCCESS
  
    constructor(public payload: Array<ShoppingItem>) {}
  
  }
export class LoadShoppingFailureAction implements Action {
    readonly type = ShoppingActionType.LOAD_SHOPPING_FAILURE
    
    constructor(public payload: Error) {}
  }
export class AddItemAction implements Action {
    readonly type = ShoppingActionType.ADD_ITEM
  
    constructor(public payload: ShoppingItem) { }
}
export class AddItemSuccessAction implements Action {
    readonly type = ShoppingActionType.ADD_ITEM_SUCCESS
  
    constructor(public payload: ShoppingItem) { }
  }
export class AddItemFailureAction implements Action {
    readonly type = ShoppingActionType.ADD_ITEM_FAILURE
  
    constructor(public payload: Error) { }
  }
export class DeleteItemAction implements Action{
    readonly type = ShoppingActionType.DELETE_ITEM;

    constructor (public payload: string){}
}
export class DeleteItemSuccessAction implements Action {
    readonly type = ShoppingActionType.DELETE_ITEM_SUCCESS
  
    constructor(public payload: string) { }
  }
  export class DeleteItemFailureAction implements Action {
    readonly type = ShoppingActionType.DELETE_ITEM_FAILURE
  
    constructor(public payload: string) { }
  }
  
  export type ShoppingAction = LoadShoppingAction|LoadShoppingSuccessAction|LoadShoppingFailureAction|
  AddItemAction |AddItemSuccessAction| AddItemFailureAction|DeleteItemAction |DeleteItemSuccessAction|DeleteItemFailureAction