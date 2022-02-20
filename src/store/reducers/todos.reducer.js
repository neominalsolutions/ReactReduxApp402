
// todo Reducer üzerinde tutulacak olan değerlerin initial default hallerini tuttuk.

const todoInitialState = {  // todo ile etkileşime geçmeden önceki state ne.
    todos: [], // default olarak todos boş,
    selectedTodo: null
}


export const todoReducer = (state = todoInitialState, action) => {

    console.log('action', action);
    console.log('state', state);

    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, // state olduğu dursun yani sadece state içerisindeki todos güncelleyelim dedik
                todos: [action.payload, ...state.todos]
            }
        default:
            break;
    }

    return state;
}

