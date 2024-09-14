import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../utils/Footer';


function MainPage() {
  const notifySuccess = () => {
    toast.success("Choose Order!", {
      position: "top-right"
    });
  };

  const notifyError = () => {
    toast.error("Redirect failed!", {
      position: "top-right"
    });
  };

  async function handleClick() {
    try {
      const response = await fetch('/orderform', {
        method: 'GET',
      });

      if (response.ok) {
        notifySuccess();
      } else {
        notifyError();
        throw new Error('Redirect failed!');
      }
    } catch (error) {
      console.error(error);
      notifyError();
    }
  }

  return (
    <div>
      <div className="mainpage-div">
        <div className="mainpage-header">
          <img className="tekno-logo" src="/Assets/Iteration-1-assets/logo.svg" alt="logo" />
        </div>
        <div className="hero-div">
          <div className="heropar-div">
            <p className="firsat">fırsatı kaçırma</p>
            <p className="kod-ac">KOD ACIKTIRIR</p>
            <p className="pizz-doy">PIZZA, DOYURUR</p>
          </div>
          <div>
            <Link to="/orderform">
              <button className="aciktim-button" type="button" onClick={handleClick}>ACIKTIM</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="nav-div">
        <div className="nav-bar">
          <button className="nav-menu-item">
            <img src="/Assets/Iteration-2-aseets/icons/1.svg" alt="New Kore" />
            &nbsp;New! Korea
          </button>
          <button className="nav-menu-item">
            <img src="/Assets/Iteration-2-aseets/icons/2.svg" alt="Pizza" />
            &nbsp;Pizza
          </button>
          <button className="nav-menu-item">
            <img src="/Assets/Iteration-2-aseets/icons/3.svg" alt="Burger" />
            &nbsp;Burger
          </button>
          <button className="nav-menu-item">
            <img src="/Assets/Iteration-2-aseets/icons/4.svg" alt="Fries" />
            &nbsp;Fries
          </button>
          <button className="nav-menu-item">
            <img src="/Assets/Iteration-2-aseets/icons/5.svg" alt="Fast Food" />
            &nbsp;Fast Food
          </button>
          <button className="nav-menu-item">
            <img src="/Assets/Iteration-2-aseets/icons/6.svg" alt="Fizzy Drinks" />
            &nbsp;Fizzy Drinks
          </button>
        </div>
      </div>
      <div className="crt-div">
        <div className="crt-parent">
          <div className="crt-child1">
            <div className="crt-child1cont">
              <h2 className="ozel-lh2">Özel</h2>
              <h2 className="ozel-lh22">Lezzetus</h2>
              <p className="ozel-lp">Position: Absolute Acı Burger</p>
              <Link to="/orderform">
              <button className="ozel-lbtn" onClick={handleClick}>SİPARİŞ VER</button>
              </Link>
            </div>
          </div>
          <div className="crt-child2">
            <div className="crt-child2cont">
              <h2 className="hack-h2">Hackathlon</h2>
              <h2 className="hack-h22">Burger Menü</h2>
              <Link to="/orderform">
              <button className="hack-btn" onClick={handleClick}>SİPARİŞ VER</button>
              </Link>
            </div>
          </div>
          <div className="crt-child3">
            <div className="crt-child3cont">
              <h2 className="cok-h2"><span className="cok-h21">Çooooook</span> hızlı</h2>
              <h2 className="cok-h22">npm gibi kurye</h2>
              <Link to="/orderform">
              <button className="cok-btn" onClick={handleClick}>SİPARİŞ VER</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="themost-div">
        <div className="themost-parent">
          <div className="themost-text">
            <h3 className="themost-h3">En çok paketlenen menüler</h3>
            <h2 className="themost-h2">Acıktıran Kodlara Doyuran Lezzetler</h2>
          </div>
          <div className="themost-nav">
            <div className="scrtnav-div">
              <div className="scrtnav-bar">
                <button className="scrtnav-menu-item">
                  <img src="/Assets/Iteration-2-aseets/icons/1.svg" alt="New Kore" />
                  &nbsp;Ramen
                </button>
                <button className="scrtnav-menu-item">
                  <img src="/Assets/Iteration-2-aseets/icons/2.svg" alt="Pizza" />
                  &nbsp;Pizza
                </button>
                <button className="scrtnav-menu-item">
                  <img src="/Assets/Iteration-2-aseets/icons/3.svg" alt="Burger" />
                  &nbsp;Burger
                </button>
                <button className="scrtnav-menu-item">
                  <img src="/Assets/Iteration-2-aseets/icons/4.svg" alt="Fries" />
                  &nbsp;Fries
                </button>
                <button className="scrtnav-menu-item">
                  <img src="/Assets/Iteration-2-aseets/icons/5.svg" alt="Fast Food" />
                  &nbsp;Fast Food
                </button>
                <button className="scrtnav-menu-item">
                  <img src="/Assets/Iteration-2-aseets/icons/6.svg" alt="Fizzy Drinks" />
                  &nbsp;Fizzy Drinks
                </button>
              </div>
            </div>
          </div>
          <div className="themost-grid">
            <div className="card-div">
              <div className="container">
                <div className="grid">
                  <div className="card">
                    <img src="/Assets/Iteration-2-aseets/pictures/food-1.png" alt="Pizza 1" />
                    <h2>Terminal Pizza</h2>
                    <div className='price'>
                      <p>4.9</p>
                      <p>(200)</p>
                      <p className='price-bold'>60₺</p>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="card">
                    <img src="/Assets/Iteration-2-aseets/pictures/food-2.png" alt="Pizza 2" />
                    <h2>Position Absolute Acı Pizza</h2>
                    <div className='price'>
                      <p>4.9</p>
                      <p>(200)</p>
                      <p className='price-bold'>85₺</p>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="card">
                  <img src="/Assets/Iteration-2-aseets/pictures/food-3.png" alt="Pizza 3" />
                    <h2>useEffect Tavuklu Burger</h2>
                    <div className='price'>
                      <p>4.9</p>
                      <p>(200)</p>
                      <p className='price-bold'>75₺</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
