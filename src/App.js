import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './scss/app.scss';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Header 
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              }>
              <Route index element={<Home searchValue={searchValue} />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
