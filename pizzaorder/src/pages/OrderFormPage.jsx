import React from 'react';
import '../components/Orderform.css';
import Footer from '../utils/Footer';

function OrderFormPage({
  selectedSize,
  selectedCrust,
  selectedToppings,
  handleSizeSelect,
  handleCrustSelect,
  handleToppingChange,
  isToppingDisabled,
  toppingPrice,
  pizzaBasePrice,
  totalPrice,
  quantity,
  setQuantity,
  name,
  handleNameChange,
  note,
  handleNoteChange,
  increaseQuantity,
  decreaseQuantity,
  errors, 
  handleOrderSubmit,
}) {
  return (
    <div className='orderform'>
      <div className="headline">
        <img className="tekno-logo2" src="/Assets/Iteration-1-assets/logo.svg" alt="logo" />
      </div>
      <div className='orderform-banner-div'>
        <div className='options'>
          <p className='options-text'> Anasayfa&nbsp;-&nbsp;</p>
          <p className='options-text'>&nbsp;Seçenekler&nbsp;-&nbsp;</p>
          <p className='options-text'>&nbsp;Sipariş oluştur</p>
          <div className='orderform-banner-h2'>
            <h2>Position Absolute Acı Pizza</h2>
          </div>
        </div>
      </div>
      <div className='orderform-price'>
        <div className='orderform-price-text'>
          <p className='orderform-price-bold'>{pizzaBasePrice.toFixed(2)}₺</p>
          <p className='orderform-price-right'>4.9</p>
          <p>(200)</p>
        </div>
      </div>
      <div className='orderform-description'>
        <div className='orderform-description-text'>
          <p>
            Front End Dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam sana
            göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemeler ile kaplanmış, daha
            sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
            genellikle yuvarlak düzleştirilmiş, mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta da denir.
          </p>
        </div>
      </div>
      <div className='size-crust-div'>
        <div className="selection-container">
          <div className="size-selection">
            <label htmlFor="sizeS">Boyut Seç </label>
            <div className="radio-group">
              <input
                type="radio"
                id="sizeS"
                name="size"
                value="S"
                onChange={handleSizeSelect}
                checked={selectedSize === 'S'}
              />
              <label htmlFor="sizeS">S</label>

              <input
                type="radio"
                id="sizeM"
                name="size"
                value="M"
                onChange={handleSizeSelect}
                checked={selectedSize === 'M'}
              />
              <label htmlFor="sizeM">M</label>

              <input
                type="radio"
                id="sizeL"
                name="size"
                value="L"
                onChange={handleSizeSelect}
                checked={selectedSize === 'L'}
              />
              <label htmlFor="sizeL">L</label>
            </div>
            {/* Error message for size */}
            {errors.size && <p className="error">{errors.size}</p>}
          </div>

          <div className="crust-selection">
            <label htmlFor="crustSelect">Kenar Seç</label>
            <select
              id="crustSelect"
              name="crust"
              onChange={handleCrustSelect}
              value={selectedCrust}
            >
              <option value="" disabled>--Kenar Seç--</option>
              <option value="thin">İnce Kenar</option>
              <option value="thick">Kalın Kenar</option>
              <option value="cheesy">Peynir Kenar</option>
              <option value="garlic">Sarımsaklı Kenar</option>
            </select>
            {/* Error message for crust */}
            {errors.crust && <p className="error">{errors.crust}</p>}
          </div>
        </div>
      </div>
      <div className='toppings-div'>
        <div className="topping-selection">
          <h3>Ek Malzemeler</h3>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

          <div className="checkbox-group">
            {[
              { value: 'pepperoni', label: 'Pepperoni' },
              { value: 'domates', label: 'Domates' },
              { value: 'biber', label: 'Biber' },
              { value: 'sosis', label: 'Sosis' },
              { value: 'misir', label: 'Mısır' },
              { value: 'zeytin', label: 'Zeytin' },
              { value: 'sucuk', label: 'Sucuk' },
              { value: 'pastirma', label: 'Pastırma' },
              { value: 'kanada-jambonu', label: 'Kanada Jambonu' },
              { value: 'ananas', label: 'Ananas' },
              { value: 'tavuk-izgara', label: 'Tavuk Izgara' },
              { value: 'jalepeno', label: 'Jalepeno' },
              { value: 'kabak', label: 'Kabak' },
              { value: 'sogan', label: 'Soğan' },
              { value: 'sarmisak', label: 'Sarımsak' }
            ].map(topping => (
              <label key={topping.value}>
                <input
                  type="checkbox"
                  value={topping.value}
                  checked={selectedToppings.includes(topping.value)}
                  onChange={handleToppingChange}
                  disabled={isToppingDisabled(topping.value)}
                />
                <span>{topping.label}</span>
              </label>
            ))}
          </div>
          {/* Error message for toppings */}
          {errors.toppings && <p className="error">{errors.toppings}</p>}
        </div>
      </div>
      <div className='name-note-div'>
        <div className="name-div">
          <label htmlFor="name">Adınız</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleNameChange}
            value={name}
          />
          {/* Error message for name */}
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="note-div">
          <label htmlFor="note">Sipariş Notunuz</label>
          <input
            id="note"
            name="note"
            onChange={handleNoteChange}
            value={note}
          />
          {/* Error message for note */}
          {errors.note && <p className="error">{errors.note}</p>}
        </div>
      </div>
      <div className='separator-div'></div>
      <div className='amount-card-div'>
        <div className='quantity-div'>
          <button className='decrease-btn' onClick={decreaseQuantity}>-</button>
          <p className='quantity'>{quantity}</p>
          <button className='increase-btn' onClick={increaseQuantity}>+</button>
        </div>
        <div className='total-price-div'>
          <div className="card">
            <div className="card-content">
              <h3>Sipariş Toplamı</h3>
              <div className="item">
                <p>Seçimler</p>
                <span className="price">{toppingPrice.toFixed(2)}₺</span>
              </div>
              <div className="item">
                <p><strong>Toplam</strong></p>
                <span className="total-price">{totalPrice.toFixed(2)}₺</span>
              </div>
            </div>
            <Link to="/ordercomplete" />
            <button
  className="order-button"
  onClick={handleOrderSubmit}
  disabled={
    errors.size || errors.crust || errors.toppings || errors.name || errors.note
  }
>
  SİPARİŞ VER
</button>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderFormPage;
