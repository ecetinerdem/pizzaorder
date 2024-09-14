import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section-address">
          <h2 className='footer-tekno'>Teknolojik</h2>
          <h2 className='footer-tekno2'>Yemekler</h2>
          <p>
            <img src="/Assets/Iteration-2-aseets/footer/icons/icon-1.png" alt="Location Icon"/> &nbsp;341 Londonderry Road,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Istanbul Türkiye
          </p>
          <p>
            <img src="/Assets/Iteration-2-aseets/footer/icons/icon-2.png" alt="Email Icon"/> &nbsp;aciktim@teknolojikyemekler.com
          </p>
          <p>
            <img src="/Assets/Iteration-2-aseets/footer/icons/icon-3.png" alt="Phone Icon"/> &nbsp;+90 216 123 45 67
          </p>
        </div>
        <div className="footer-section-menu">
          <h2>Sıcacık Menuler</h2>
          <p className='menu-list'>Terminal Pizza</p>
          <p className='menu-list'>5 Kişilik Hackathlon Pizza</p>
          <p className='menu-list'>useEffect Tavuklu Pizza</p>
          <p className='menu-list'>Beyaz Console Frosty</p>
          <p className='menu-list'>Testler Geçti Mutlu Burger</p>
          <p className='menu-list'>Position Absolute Acı Burger</p>
        </div>
        <div className="footer-section-instagram">
          <h2>Instagram</h2>
          <div className="gallery">
            <img src="/Assets/Iteration-2-aseets/footer/insta/li-0.png" alt="Pizza"/>
            <img src="/Assets/Iteration-2-aseets/footer/insta/li-1.png" alt="Hotdog"/>
            <img src="/Assets/Iteration-2-aseets/footer/insta/li-2.png" alt="Burger"/>
            <img src="/Assets/Iteration-2-aseets/footer/insta/li-3.png" alt="Steak"/>
            <img src="/Assets/Iteration-2-aseets/footer/insta/li-4.png" alt="Cheese Burger"/>
            <img src="/Assets/Iteration-2-aseets/footer/insta/li-5.png" alt="Double Burger"/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='copyright'>&copy; 2023 Teknolojik Yemekler.</p>
        <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter-icon" />
      </div>
    </footer>
  );
}

export default Footer;
