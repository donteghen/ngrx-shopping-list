import { Action } from "@ngrx/store"
import { ShoppingItem } from "src/app/models/shopping-item"


export enum ShoppingActionType{
    ADD_ITEM = '[Shopping] Add Item',
    DELETE_ITEM = '[Shopping] Delete Item'
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionType.ADD_ITEM
  
    constructor(public payload: ShoppingItem) { }
}
export class DeleteItemAction implements Action{
    readonly type = ShoppingActionType.DELETE_ITEM;

    constructor (public payload: string){}
}
  
  export type ShoppingAction = AddItemAction | DeleteItemAction