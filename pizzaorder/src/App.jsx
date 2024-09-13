import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderFormPage from './pages/OrderFormPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import { ToastContainer, Bounce } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
import './components/Layout.css';


function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/orderform" component={OrderFormPage} />
            <Route path="/ordersuccess" component={OrderSuccessPage} />
          </Switch>
          <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
        </div>
      </Router>
    </>
  );
}

export default App;
