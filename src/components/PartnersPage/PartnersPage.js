import classes from './PartnersPage.module.css'
import partnersImage from  '../../image/partners/partners.jpg'
import {CompanyName} from '../Footer/CompanyName'
import ScrollButton from '../MyButton/ScrollButton'
import meihua from '../../image/partners/icons/meihua.jpg'
import dongsiao from '../../image/partners/icons/dongsiao.jpg'
import nb  from '../../image/partners/icons/nb.jpg'
import gc from '../../image/partners/icons/gc.webp'

export function PartnersPage(){
    return(

        <div className={classes.partnersPanel}>

            <div className={classes.partnersImageBg}>
                    <h1>Партнери</h1>
             <img src={partnersImage} alt="partnersImage" />

            </div>
            
            <div className={classes.partners}>

            <h2>Нашi партнери</h2>
            <div className={classes.ourPartners}>

            <ScrollButton />

            <div className={classes.items}>
                <img src="https://svitagro.com.ua/wp-content/uploads/2018/01/dsml.png" alt="dsm" />
                <p>
                <strong>DSM </strong> – вітаміни, ферменти.
                </p>
                <a href="https://www.dsm.com/anh/products-and-services/all/all-products-services-and-tools.html" target="blank">перейти на офіціальний сайт</a>
            </div>

                <div className={classes.items}>
                    <img src="https://svitagro.com.ua/wp-content/uploads/2018/01/movusl.png" alt="novus" />
                    <p> <strong>Novus Internationalє</strong> - постачальником рішень в галузі охорони здоров’я з харчування для худоби, домашніх тварин і людей. Novus має співробітників, що працюють в більш ніж в 90 країнах, обслуговуючи понад 2500 клієнтів по всьому світу.</p>
                    <a href="https://www.novusint.com/en-GB/"  target="blank">перейти на офіціальний сайт</a>
                </div>

                <div className={classes.items}>
                    <img src="https://svitagro.com.ua/wp-content/uploads/2018/05/basf.jpg" alt="basf" />
                    <p>
                    <strong>Концерн BASF</strong> є провідним постачальником інноваційних харчових добавок для кормів, призначених для свійських і домашніх тварин.
                    </p>
                    <a href="https://www.basf.com/global/en.html" target="blank">перейти на офіціальний сайт</a>
                </div>

                <div className={classes.items}>
                    <img src="https://svitagro.com.ua/wp-content/uploads/2018/01/luctal.png" alt="lucta" />
                    <p>
                    <strong>Lucta</strong> – іспанська компанія, заснована в Барселоні в 1949 році, що займається виробництвом ароматів, смаків і кормових добавок.
                    </p>
                    <a href="https://www.lucta.com/divisions/flavours"  target="blank">перейти на офіціальний сайт</a>
                </div>
            <div className={classes.items}>
                <img src="https://svitagro.com.ua/wp-content/uploads/2018/01/cjl.png" alt="cj" />
                <p><strong>Cj Corporation</strong> – південнокорейський холдинг, що спеціалізується на виробництві продовольчих товарів, фармацевтиці та біотехнології. Є одним з світових лідерів за об’ємами синтезу органічних амінокислот.</p>
                <a href="https://www.dsm.com/anh/products-and-services/all/all-products-services-and-tools.html" target="blank">перейти на офіціальний сайт</a>
            </div>

            <div className={classes.items}>
                <img src="https://svitagro.com.ua/wp-content/uploads/2018/05/sy.jpg" alt="Synthèse " />
                <p>
                <strong>Synthèse Elevage </strong>-характеризується якісним аспектом що спеціалізується на разробці іноваційних рішень для гігієни та годівлі сільськогосподарських тварин.
                </p>
                <a href="https://www.syntheseelevage.com/" target="blank"> перейти на офіціальний сайт</a>
            </div>

            <div className={classes.items}>
                <img src={meihua} alt="meihua" />
                <p>
                    <strong> Meihua Holdings Group Company Limited </strong>(«Мейхуа») - китайська харчова , біофармацевтична та хімічна корпорація, крупний переробник сільськогосподарської сировини (кукурудзи), виробник амінокислот , харчових добавок, приправ, соусів, розчинних капсул та добрив. 
                </p>
            </div>
            <div className={classes.items}>
                <img src={dongsiao} alt="dongsiao" />
                <p>
                    <strong> Zhucheng Dongxiao Biotechnology Co., Ltd. </strong>  підприємство глибокої переробки кукурудзи, яке об’єднує постачання, дослідження та розробки, виробництво та продаж із кукурудзою як основною сировиною. 
                </p>
            </div>
            <div className={classes.items}>
                <img src={nb} alt="nb" />
                <p>
                    <strong> NB GROUP CO., LTD </strong> - розташована в окрузі Zouping, провінція Шаньдун, була реконструйована в жовтні 2002 року. NB Group є високотехнологічним підприємством, яке одночасно поєднує обробку, дослідження та розробки та міжнародну торгівлю. 
                </p>
            </div>
            <div className={classes.items}>
                <img src={gc} alt="gc" />
                <p>
                    <strong>SHANDONGSHOUGUANG JUNENG GOLDEN CORN CO., LTD </strong> - зосереджена на виробництві та продажу кукурудзяного крохмалю та продуктів глибокої обробки, таких як модифікований крохмаль, L-лізин, кукурудзяна клейковина, кукурудзяна клейковина, модифікований кукурудзяний крохмаль
                </p>
            </div>
        </div>
    </div>
        <CompanyName />
</div>
    )
}