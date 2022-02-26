import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { FavoriteReducer } from './reducers/favorite.reducer';
import { todoReducer } from './reducers/todos.reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
// apiden gelen istekler asekron olduğu için redux ile apiden gelen responsun thunk ile store uygulanması sağlar.
// thunk burada redux ile react arasında bir köprü niteliğindedir.
// apiden gelen istekler asenkron istekler olduğu için ve redux yapısıda senkron çalıştığından dolayı store güncellemede bazı sıkıntılar yazşıyoruz.
// bu sıkıntılardan kurtulmak için ise thunk middleware kullanıyoruz.

// uygulama içerisinde birden fazla reducer varsa combineReducers function ile reduceları obje olarak tek bir reducer çeviriyoruz.
// reducers artık root diğer reducerlardan sorumlu kişi oluyor
const reducers = combineReducers({
	todoState: todoReducer,
	favoriteState: FavoriteReducer,
});

export const myStore = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
); // store en az 1 adet reducer ile çalışır.
