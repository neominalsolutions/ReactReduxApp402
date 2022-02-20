import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodo } from './store/actions/todos.action';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchTodo()) // uygulama ilk ayağa kalktığında apiden todos bilgisini çekmek için bir actionda bulun.

  }, [])

  return (
    <div className="App">


      <br></br>
      <Link to="todos">Todo List</Link>
      <br></br>

      <Outlet />
    </div>
  );
}

export default App;
