
// todo Reducer üzerinde tutulacak olan değerlerin initial default hallerini tuttuk.

import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const todoInitialState = {  // todo ile etkileşime geçmeden önceki state ne.
    todos: [
        {
            id: 1,
            title: 'todo1',
            completed: false
        },
        {
            id: 2,
            title: 'todo2',
            completed: true
        }
    ], // default olarak todos boş,
    selectedTodo: null
}


export const todoReducer = (state = todoInitialState, action) => {

    console.log('payload', action.payload);
    console.log('state', state);


    // delete işleminde action payload id geliyor
    // add işleminde ise action payload object geliyor.
    // select işleminde de action payload üzerinden yine id göndereceğiz.


    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, // state olduğu dursun yani sadece state içerisindeki todos güncelleyelim dedik
                todos: [action.payload.data, ...state.todos]
            }
        case 'DELETE_TODO':

            console.log('remove', state.todos.filter(x => x.id != action.payload.id));



            return {
                ...state,
                todos: [...state.todos.filter(x => x.id != action.payload.id)]
            }
        case 'SELECT_TODO':

            let selectedTodo = state.todos.find(x => x.id == action.payload.id);

            if (selectedTodo == undefined) // böyle bir id yoksa silme işlemlerinde id null gönderdik böyle bir id olamaz.
                selectedTodo = null;

            return {
                ...state,
                selectedTodo: { ...selectedTodo }
                // action.payload gelen id eğer benim todo listesindeki id eşitse demek
            }

        case 'FETCH_TODO':



            return {
                ...state,
                todos: [...action.payload.data]
                // action.payload gelen id eğer benim todo listesindeki id eşitse demek
            }

        default:
            break;
    }

    return state;
}

