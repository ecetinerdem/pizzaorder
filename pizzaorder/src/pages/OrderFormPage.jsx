import '../components/Orderform.css';

function OrderFormPage() {
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
          <p className='orderform-price-bold'>85.50₺</p>
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
        <div class="selection-container">
          <div class="size-selection">
            <label for="sizeS">Boyut Seç </label>
            <div class="radio-group">
              <input type="radio" id="sizeS" name="size" value="S" />
              <label for="sizeS">S</label>

              <input type="radio" id="sizeM" name="size" value="M" />
              <label for="sizeM">M</label>

              <input type="radio" id="sizeL" name="size" value="L" />
              <label for="sizeL">L</label>
            </div>
          </div>

          <div class="crust-selection">
            <label for="crustSelect">Kenar Seç</label>
            <select id="crustSelect" name="crust">
              <option value="" disabled selected>--Kenar Seç--</option>
              <option value="thin">İnce Kenar</option>
              <option value="thick">Kalın Kenar</option>
              <option value="cheesy">Peynir Kenar</option>
              <option value="garlic">Sarımsaklı Kenar</option>
            </select>
          </div>
        </div>
      </div>
      <div className='toppings-div'>
        <div class="topping-selection">
          <h3>Ek Malzemeler</h3>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

          <div class="checkbox-group">
            <label>
              <input type="checkbox" value="pepperoni" />
              <span>Pepperoni</span>
            </label>
            <label>
              <input type="checkbox" value="domates" />
              <span>Domates</span>
            </label>
            <label>
              <input type="checkbox" value="biber" />
              <span>Biber</span>
            </label>
            <label>
              <input type="checkbox" value="sosis" />
              <span>Sosis</span>
            </label>
            <label>
              <input type="checkbox" value="misir" />
              <span>Mısır</span>
            </label>
            <label>
              <input type="checkbox" value="zeytin" />
              <span>Zeytin</span>
            </label>
            <label>
              <input type="checkbox" value="sucuk" />
              <span>Sucuk</span>
            </label>
            <label>
              <input type="checkbox" value="pastirma" />
              <span>Pastırma</span>
            </label>
            <label>
              <input type="checkbox" value="kanada-jambonu" />
              <span>Kanada Jambonu</span>
            </label>
            <label>
              <input type="checkbox" value="ananas" />
              <span>Ananas</span>
            </label>
            <label>
              <input type="checkbox" value="tavuk-izgara" />
              <span>Tavuk Izgara</span>
            </label>
            <label>
              <input type="checkbox" value="jalepeno" />
              <span>Jalepeno</span>
            </label>
            <label>
              <input type="checkbox" value="kabak" />
              <span>Kabak</span>
            </label>
            <label>
              <input type="checkbox" value="sogan" />
              <span>Soğan</span>
            </label>
            <label>
              <input type="checkbox" value="sarmisak" />
              <span>Sarimsak</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderFormPage;
