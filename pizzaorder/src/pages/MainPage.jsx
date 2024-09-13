import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
      <div className='nav-div'>
        <div className='nav-bar'>
          <button className="nav-menu-item">
            <img src="/Assets/Iteration-2-aseets/icons/1.svg" alt="New Kore" />
            &nbsp;New! Kore
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
      <div className='crt-div'>
        <div class="crt-parent">
          <div class="crt-child1"> background</div>
          <div class="crt-child2"> </div>
          <div class="crt-child3"> </div>
        </div>
      </div>
    </div>  
  )
}

export default MainPage;
