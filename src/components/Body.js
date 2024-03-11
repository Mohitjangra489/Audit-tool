import React, { useEffect, useState } from 'react'
import BackgroundImage from '../images/658d2061d0f14ac79b34ee7c_Inventory Management Strategies.jpg';
import Thirddivimage from '../images/5c87b3c0466f830a480ba2214af2c73d.png';
import Orderpng from '../images/order.png';
import Inventory from '../images/inventory.png';
import Reports from '../images/health-check.png';
import Payment from '../images/Payment-Reconciliation.7915b83e640c39b0fde8.png';
import Warehouse from '../images/warehouse.png'
import Return from '../images/cash-flow.png';
import Profit from '../images/statistics.png';
import Tax from '../images/tax.png'
import Multiuser from '../images/business.png'
import BodyCss from '../styles/body.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import FacilityCard from './FacilityCard';

const Body = () => {


  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className={BodyCss.BodyContainer}>
      <div className={BodyCss.BackgroundImageDiv}>
        <img className={BodyCss.BackgroundImage} src={BackgroundImage} alt="image_here" />
      </div>
      <div className={BodyCss.firstdiv}>
        <div className={BodyCss.firstdiv_data}>
          <span className={BodyCss.welcomespan1} data-aos="fade" data-aos-duration="1000">Welcome to Sitename</span><br></br><br></br>
          <span className={BodyCss.welcomespan2} data-aos="fade" data-aos-duration="1000">Here,the site slogan will come<br></br>dolor ipsem te ad<br></br>adiohii dhbuyg bvuegu</span><br></br><br></br>
          <span className={BodyCss.welcomespan3} data-aos="fade" data-aos-duration="1000">Best Marketplace Audit Tool for multichannel Ecommerce Bussiness</span><br></br>
        </div>
      </div>

      <div className={BodyCss.seconddiv}>
        <span className={BodyCss.welcomespan4}>Build A Business That Works For You</span><br></br>
        <span className={BodyCss.welcomespan5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil officia maxime modi exercitationem quo. Provident eligendi numquam cumque quam ad nesciunt culpa sint dignissimos accusantium? Architecto deleniti minima neque. </span><br></br>
        <div className={BodyCss.seconddiv_carddiv}>
          <div className={BodyCss.seconddiv_carddiv_card} data-aos="fade-up" data-aos-duration="1000">
            <span>ABC</span><br></br>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vol</span>
          </div>

          <div className={BodyCss.seconddiv_carddiv_card} data-aos="fade-up" data-aos-duration="1000">
            <span>XYZ</span><br></br>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vol</span>
          </div>

          <div className={BodyCss.seconddiv_carddiv_card} data-aos="fade-up" data-aos-duration="1000">
            <span>QRT</span><br></br>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vol</span>
          </div>

        </div>
      </div>

      <div className={BodyCss.thirddiv}>
        <div className={BodyCss.thirddiv_leftimagediv} >
          <img src={Thirddivimage} alt='image_here' className={BodyCss.thirddiv_image} data-aos="fade-right" data-aos-duration="1000"></img>
        </div>
        <div className={BodyCss.thirddiv_rightdiv}>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore exercitationem aspernatur lao aspernatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quidem sunt blanditiis molestiae tempore cum illo reprehenderit praesentium quod! Soluta iste eos laborum non porro? At dolorum sit dolore nihil?</span>
        </div>
      </div>

      <div className={BodyCss.fourthdiv}>
        <div>
          <h1 style={{ fontSize: "3rem", letterSpacing: "2px" }} data-aos="fade-up" data-aos-duration="1000">Facilities</h1>
        </div>
        <div className={BodyCss.fourthdiv_cardcontainer}>
          <FacilityCard
            src={Orderpng}
            title={`Order Management`}
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quod, sunt id quidem eumi facilis  incidunt nobis? Recusandae.`}
          />
          <FacilityCard
            src={Inventory}
            title={`Centralized Inventory`}
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quod, sunt id quidem eumi facilis  incidunt nobis? Recusandae.`}
          />
          <FacilityCard
            src={Reports}
            title={`Reports`}
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quod, sunt id quidem eumi facilis  incidunt nobis? Recusandae.`}
          />
          <FacilityCard
            src={Payment}
            title={`Payment Reconciliation`}
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quod, sunt id quidem eumi facilis  incidunt nobis? Recusandae.`}
          />
          <FacilityCard
            src={Return}
            title={`Return Reconciliation`}
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quod, sunt id quidem eumi facilis  incidunt nobis? Recusandae.`}
          />
          <FacilityCard
            src={Warehouse}
            title={`Warehouse Management`}
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quod, sunt id quidem eumi facilis  incidunt nobis? Recusandae.`}
          />
          <FacilityCard
            src={Tax}
            title={`Calculated Tax`}
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quod, sunt id quidem eumi facilis  incidunt nobis? Recusandae.`}
          />
          <FacilityCard
            src={Profit}
            title={`Profit & Loss`}
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quod, sunt id quidem eumi facilis  incidunt nobis? Recusandae.`}
          />
          <FacilityCard
            src={Multiuser}
            title={`Multiple User Support`}
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quod, sunt id quidem eumi facilis  incidunt nobis? Recusandae.`}
          />

        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Body
