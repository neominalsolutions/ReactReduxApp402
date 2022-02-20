import { createStore } from "redux";
import { todoReducer } from "./reducers/todos.reducer";

export const myStore = createStore(todoReducer); // store en az 1 adet reducer ile çalışır.