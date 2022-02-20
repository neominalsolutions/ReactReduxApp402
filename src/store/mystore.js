import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers/todos.reducer";

// apiden gelen istekler asekron olduğu için redux ile apiden gelen responsun thunk ile store uygulanması sağlar.
// thunk burada redux ile react arasında bir köprü niteliğindedir.
// apiden gelen istekler asenkron istekler olduğu için ve redux yapısıda senkron çalıştığından dolayı store güncellemede bazı sıkıntılar yazşıyoruz.
// bu sıkıntılardan kurtulmak için ise thunk middleware kullanıyoruz.

export const myStore = createStore(todoReducer, applyMiddleware(thunk)); // store en az 1 adet reducer ile çalışır.