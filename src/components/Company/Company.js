import React, { Component } from "react";
import Slider from "react-slick";
import classes from './Company.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageInfo from '../../image/istockphoto-485627208-612x612.jpg'
import { Link } from "react-router-dom";
import ScrollButton from "../MyButton/ScrollButton";
import { CompanyName } from "../Footer/CompanyName";
import img1 from '../../image/company/test.jpg'
import img2 from '../../image/company/newFoto/img1.jpg'
import img3 from '../../image/company/newFoto/img2.jpg'
import img4 from '../../image/company/newFoto/img3.jpg'
import img5 from '../../image/company/newFoto/img6.jpg'
import pigs from '../../image/company/pig.jpg'
import animals from '../../image/company/catsDog.jpg'




export class Company extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <div className={classes.beautifulSlider}>
            <Slider {...settings} >
              <div className={classes.slide}>
                <img className={classes.response} src={img1} alt="Slide 1" />
              </div>
              <div className={classes.slide}>
                <img className={classes.response} src={img2} alt="Slide 2" />
              </div>
              <div className={classes.slide}>
                <img className={classes.response} src={img3} alt="Slide 3" />
              </div>
              <div className={classes.slide}>
                <img className={classes.response} src={img4} alt="Slide 4" />
              </div>
              <div className={classes.slide}>
                <img className={classes.response} src={img5} alt="Slide 5" />
              </div>
             
            </Slider>
          </div>
          <div className={classes.informations}>
            <ScrollButton />
            <div className={classes.content}>
              <div className={classes.contentInfo}>
                <h1>Вітаємо Вас на сайті <br /> ТОВ  «Аналітінформ»</h1>
                <div>
                  <p>ТОВ «Аналітінформ» – це колектив професіоналів,<br /> який успішно працює на ринку кормових добавок  та<br /> ветеринарних препаратів України з 2018 року. </p>
                  <p>Основною сферою діяльності компанії є продаж <br />сільськогосподарським підприємствам таких товарів як:</p>
                </div>
                <ul className={classes.itemsInfo}>
                  <li> <strong >Кокцидіостатики </strong> для курчат бройлерів, ремонтного молодняка курей, індиків, кролів.</li>
                  <li> <strong> Амінокислоти </strong> для збалансування раціонів свиней та птиці: <br />L-лізин, L-треонін, L-триптофан, L-метіонин, МНА (метіонінгідрокси аналог).</li>
                  <li><strong>Ветеринарні препарати</strong> для свиней, птиці, великої рогатої худоби.</li>
                  <li><strong>Підкислювачі</strong> на основі органічних кислот з додаванням ефірних масел.</li>
                  <li><strong>Кормові добавки</strong> для птиці, свиней, великої рогатої худоби.</li>
                  <li><strong>Вакцини</strong> для птиці.</li>
                  <li>Препарати для дрібних <strong>домашніх тварин</strong></li>
                </ul>
              </div>
              <div className={classes.imageInfo}>
                <img className={classes.image} src={imageInfo} alt="imageInfo" />
              </div>
            </div>
            <div className={classes.ourProducts}>
              <div className={classes.ourProdContent}>
                <h1>Нашi Продукти</h1>
                <div className={classes.itemBox}>
                  <Link to='/feedadditives' className={classes.box} >
                    <h2>Кормові добавки</h2>
                  </Link>
                  <Link to='/veterinary' className={classes.box1}>
                    <h2>Ветеринарія</h2>
                  </Link>
                  <Link to= '/pets' className={classes.box2}>
                    <h2>Домашні тварини</h2>
                  </Link>
                </div>
              </div>
            </div>
            {/* Partners */}
            <div className={classes.partners}>
              <h2>Нашi партнери</h2>
              <div className={classes.ourPartners}>
                <div className={classes.items}>
                  <img src="https://svitagro.com.ua/wp-content/uploads/2018/01/dsml.png" alt="dsm" />
                  <p><strong>DSM </strong> – вітаміни, ферменти.</p>
                  <a href="https://www.dsm.com/anh/products-and-services/all/all-products-services-and-tools.html" target="blank">перейти на офіціальний сайт</a>
                </div>
                <div className={classes.items}>
                  <img src="https://svitagro.com.ua/wp-content/uploads/2018/01/movusl.png" alt="novus" />
                  <p> <strong>Novus Internationalє</strong> - постачальником рішень в галузі охорони здоров’я з харчування для худоби, домашніх тварин і людей. Novus має співробітників, що працюють в більш ніж в 90 країнах, обслуговуючи понад 2500 клієнтів по всьому світу.</p>
                  <a href="https://www.novusint.com/en-GB/" target="blank">перейти на офіціальний сайт</a>
                </div>
                <div className={classes.items}>
                  <img src="https://svitagro.com.ua/wp-content/uploads/2018/05/basf.jpg" alt="basf" />
                  <p><strong>Концерн BASF</strong> є провідним постачальником інноваційних харчових добавок для кормів, призначених для свійських і домашніх тварин.</p>
                  <a href="https://www.basf.com/global/en.html" target="blank">перейти на офіціальний сайт</a>
                </div>
                <div className={classes.items}>
                  <img src="https://svitagro.com.ua/wp-content/uploads/2018/01/luctal.png" alt="lucta" />
                  <p><strong>Lucta</strong> – іспанська компанія, заснована в Барселоні в 1949 році, що займається виробництвом ароматів, смаків і кормових добавок.</p>
                  <a href="https://www.lucta.com/divisions/flavours" target="blank">перейти на офіціальний сайт</a>
                </div>
                <div className={classes.items}>
                  <img src="https://svitagro.com.ua/wp-content/uploads/2018/01/cjl.png" alt="cj" />
                  <p><strong>Cj Corporation</strong> – південнокорейський холдинг, що спеціалізується на виробництві продовольчих товарів, фармацевтиці та біотехнології. Є одним з світових лідерів за об’ємами синтезу органічних амінокислот.</p>
                  <a href="https://www.dsm.com/anh/products-and-services/all/all-products-services-and-tools.html" target="blank">перейти на офіціальний сайт</a>
                </div>
                <div className={classes.items}>
                  <img src="https://svitagro.com.ua/wp-content/uploads/2018/05/sy.jpg" alt="Synthèse " />
                  <p><strong>Synthèse Elevage </strong>-характеризується якісним аспектом що спеціалізується на разробці іноваційних рішень для гігієни та годівлі сільськогосподарських тварин.</p>
                  <a href="https://www.syntheseelevage.com/" target="blank"> перейти на офіціальний сайт</a>
                </div>
              </div>
            </div>
            {/* contacts */}
            <div className={classes.contacts}>
              <h2>Контакти</h2>
              <div className={classes.contactsInfo}>
                <div className={classes.contactItems}>
                  <p>Tel/Fax</p>
                  <a href="tel:+38(057)7871019">+38(057)7871019</a>
                  <p>Email: sales6apteka95gc.com</p>
                </div>
                <div className={classes.contactItems}>
                  <p>Адреса</p>
                  <p>Харків, вул.Франківська, будинок 14,</p>
                  <p>ТОВ  “АНАЛІТІНФОРМ”</p>
                </div>
                <div className={classes.contactItems}>
                  <p>Поштова адреса</p>
                  <p>м. Харків, 61110 </p>
                  <p>ТОВ  “АНАЛІТІНФОРМ”</p>
                </div>
              </div>
            </div>
            <div className={classes.maps}>
              {/* <OfficeMap /> */}
              <iframe title="This is a unique title"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2156.7569491813965!2d36.25885561130025!3d49.99578330067665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0bfd3add01d%3A0x213ee869c995b234!2z0YPQuy4g0KTRgNCw0L3QutC-0LLRgdC60LDRjywgMTQsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1690877054919!5m2!1sru!2sua" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <CompanyName />
          </div>
          </div>
        );
      }
  }

