import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './scss/app.scss';

function App() {


  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<Home />} />
              <Route path='cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
