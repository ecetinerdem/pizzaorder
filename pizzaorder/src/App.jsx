import React, { useState } from 'react';
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
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCrust, setSelectedCrust] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSizeSelect = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleCrustSelect = (event) => {
    setSelectedCrust(event.target.value);
  };

  const handleToppingChange = (event) => {
    const topping = event.target.value;
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter(item => item !== topping));
    } else {
      if (selectedToppings.length < 10) {
        setSelectedToppings([...selectedToppings, topping]);
      }
    }
  };

  const isToppingDisabled = (topping) => {
    return selectedToppings.length >= 10 && !selectedToppings.includes(topping);
  };

  const toppingPrice = selectedToppings.length * 5;
  const pizzaBasePrice = 85.50;
  const totalPrice = (pizzaBasePrice + toppingPrice) * quantity;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route 
              path="/orderform" 
              render={() => (
                <OrderFormPage
                  selectedSize={selectedSize}
                  selectedCrust={selectedCrust}
                  selectedToppings={selectedToppings}
                  handleSizeSelect={handleSizeSelect}
                  handleCrustSelect={handleCrustSelect}
                  handleToppingChange={handleToppingChange}
                  isToppingDisabled={isToppingDisabled}
                  toppingPrice={toppingPrice}
                  pizzaBasePrice={pizzaBasePrice}
                  totalPrice={totalPrice}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  name={name}
                  handleNameChange={handleNameChange}
                  note={note}
                  handleNoteChange={handleNoteChange}
                />
              )}
            />
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
