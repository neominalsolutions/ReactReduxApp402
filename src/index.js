import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { todoReducer } from './store/reducers/todos.reducer';
import { myStore } from './store/mystore';




// npm i redux react-redux
// 2. createStore index page
// 3. Provider içine store sarıyoruz (index page)
// 4. store klasörü aç içine actions ve reducers diye klasör açalım
// 5. useSelector, useDispacth hookları ile store üzerinden işlem yap.



// reducer store bağlanması işlemi
// Provider ile store'umuzuda uygulama geneline sardık. tüm componentler bu global state değişimi görebiliyor



ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<App />}>
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
