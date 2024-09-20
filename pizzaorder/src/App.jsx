import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderFormPage from './pages/OrderFormPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import { ToastContainer, Bounce } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
import './components/Layout.css';

// Define initial error state for form validation
const initialErrors = {
  selectedSize: 'Lütfen bir boyut seçin',
  selectedCrust: 'Lütfen bir kenar seçin',
  selectedToppings: 'Lütfen en az 4 ek malzeme seçin',
  name: 'Lütfen adınızı girin',
  quantity: 'Lütfen en az 1 adet seçin',
};

function App() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCrust, setSelectedCrust] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState(initialErrors);

  const history = useHistory(); 

  
  const handleSizeSelect = (event) => {
    const size = event.target.value;
    setSelectedSize(size);
    setErrors(prev => ({ ...prev, selectedSize: size ? '' : 'Lütfen bir boyut seçin.' }));
  };

  
  const handleCrustSelect = (event) => {
    const crust = event.target.value;
    setSelectedCrust(crust);
    setErrors(prev => ({ ...prev, selectedCrust: crust ? '' : 'Please bir kenar seçin.' }));
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
    setErrors(prev => ({
      ...prev,
      selectedToppings: selectedToppings.length === 0 ? 'Lütfen en az 4 ek malzeme seçin.' : ''
    }));
  };

  
  const isToppingDisabled = (topping) => {
    return selectedToppings.length >= 10 && !selectedToppings.includes(topping);
  };

  
  const toppingPrice = selectedToppings.length * 5;
  const pizzaBasePrice = 85.50;
  const totalPrice = (pizzaBasePrice + toppingPrice) * quantity;

 
  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 30) {
      setName(inputValue);
    }
    setErrors(prev => ({ ...prev, name: inputValue ? '' : 'Lütfen adınızı girin.' }));
  };

  
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  
  const validateForm = () => {
    const newErrors = {
      selectedSize: selectedSize ? '' : 'Lütfen bir boyut seçin.',
      selectedCrust: selectedCrust ? '' : 'Lütfen bir kenar seçin.',
      selectedToppings: selectedToppings.length > 0 ? '' : 'Lütfen en az 4 ek malzeme seçin.',
      name: name ? '' : 'Lütfen adınızı girin.',
      quantity: quantity > 0 ? '' : 'Lütfen en az 1 adet seçin.',
    };
    setErrors(newErrors);

    
    return Object.values(newErrors).every(error => error === '');
  };

  
  const handleOrderSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      
      history.push('/ordersuccess'); 
    }
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
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  errors={errors} 
                  handleOrderSubmit={handleOrderSubmit} 
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
