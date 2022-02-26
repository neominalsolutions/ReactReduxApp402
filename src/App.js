import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodo } from './store/actions/todos.action';
import Navbar from './components/Navbar.js';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodo()); // uygulama ilk ayağa kalktığında apiden todos bilgisini çekmek için bir actionda bulun.
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
