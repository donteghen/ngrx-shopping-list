import { ShoppingItem } from "src/app/models/shopping-item";

export interface AppState {
    readonly shopping: Array<ShoppingItem>
  }