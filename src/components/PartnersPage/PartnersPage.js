import classes from './PartnersPage.module.css'
import partnersImage from  '../../image/partners/partners.jpg'
import {CompanyName} from '../Footer/CompanyName'
import ScrollButton from '../MyButton/ScrollButton'
import meihua from '../../image/partners/icons/meihua.jpg'
import dongsiao from '../../image/partners/icons/dongsiao.jpg'
import nb  from '../../image/partners/icons/nb.jpg'
import gc from '../../image/partners/icons/gc.webp'
import basf from '../../image/company/icon/basf1.jpg'
import dsm from '../../image/company/icon/dsm.jpg'
import lucta from '../../image/company/icon/lucta.png'
import novus from '../../image/company/icon/novus1.png'
import cj from '../../image/company/icon/cj.png'
import synth from '../../image/company/icon/synth.jpg'

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
            <div className={classes.partnerBlock}>
                  <img src={basf}  alt="Partner Logo" />
                <div className={classes.partnerInfo}>
                   <p>
                    <strong>Концерн BASF</strong> є провідним постачальником інноваційних харчових добавок для кормів, призначених для свійських і домашніх тварин.
                    </p>
                    <a href="https://www.basf.com/global/en.html" target="_blank" rel="noopener noreferrer" className={classes.partnerLink}>
                        Відвідати сайт
                    </a>
                </div>
                
            </div>
            <div className={classes.partnerBlock}>
                  <img src={dsm} alt="Partner Logo" />
                <div className={classes.partnerInfo}>
                <p>
                <strong>DSM </strong> – вітаміни, ферменти.
                </p>
                    <a href="https://www.dsm.com/anh/products-and-services/all/all-products-services-and-tools.html" target="_blank" rel="noopener noreferrer" className={classes.partnerLink}>
                        Відвідати сайт
                    </a>
                </div>
            </div>
            <div className={classes.partnerBlock}>
                  <img src={lucta} alt="Partner Logo" />
                <div className={classes.partnerInfo}>
                  <p>
                    <strong>Lucta</strong> – іспанська компанія, заснована в Барселоні в 1949 році, що займається виробництвом ароматів, смаків і кормових добавок.
                 </p>
                    <a href="https://www.lucta.com/divisions/flavours" target="_blank" rel="noopener noreferrer" className={classes.partnerLink}>
                        Відвідати сайт
                    </a>
                </div>
            </div>
            <div className={classes.partnerBlock}>
                  <img src={novus} alt="Partner Logo" />
                <div className={classes.partnerInfo}>
                <p> <strong>Novus Internationalє</strong> - постачальником рішень в галузі охорони здоров’я з харчування для худоби, домашніх тварин і людей. </p>
                    <a href="https://www.novusint.com/en-GB/" target="_blank" rel="noopener noreferrer" className={classes.partnerLink}>
                        Відвідати сайт
                    </a>
                </div>
                
            </div>
            <div className={classes.partnerBlock}>
                  <img src={cj} alt="Partner Logo" />
                <div className={classes.partnerInfo}>
                <p><strong>Cj Corporation</strong> – є одним з світових лідерів за об’ємами синтезу органічних амінокислот.</p>
                    <a href="https://www.dsm.com/anh/products-and-services/all/all-products-services-and-tools.html" target="_blank" rel="noopener noreferrer" className={classes.partnerLink}>
                        Відвідати сайт
                    </a>
                </div>
                
            </div>
            
            <div className={classes.partnerBlock}>
                  <img src={synth} alt="Partner Logo" />
                <div className={classes.partnerInfo}>
                <p>
                <strong>Synthèse Elevage </strong>-характеризується якісним аспектом що спеціалізується на разробці іноваційних рішень для гігієни та годівлі сільськогосподарських тварин.
                </p>
                    <a href="https://www.syntheseelevage.com/" target="_blank" rel="noopener noreferrer" className={classes.partnerLink}>
                        Відвідати сайт
                    </a>
                </div>
            </div>

            <div className={classes.partnerBlock}>
                <img src={meihua} alt="meihua" />
                <div className={classes.partnerInfo}>
                    <p>
                        <strong> Meihua Holdings Group Company Limited </strong>(«Мейхуа») - китайська харчова , біофармацевтична та хімічна корпорація, крупний переробник сільськогосподарської сировини (кукурудзи), виробник амінокислот , харчових добавок, приправ, соусів, розчинних капсул та добрив. 
                    </p>
                </div>
                
            </div>

            <div className={classes.partnerBlock}>
                <img src={dongsiao} alt="dongsiao" />
                <div className={classes.partnerInfo}>
                    <p>
                        <strong> Zhucheng Dongxiao Biotechnology Co., Ltd. </strong>  підприємство глибокої переробки кукурудзи, яке об’єднує постачання, дослідження та розробки, виробництво та продаж із кукурудзою як основною сировиною. 
                    </p>
                </div>
            </div>
            <div className={classes.partnerBlock}>
                <img src={nb} alt="nb" />
                <div className={classes.partnerInfo}>
                    <p>
                        <strong> NB GROUP CO., LTD </strong> - розташована в окрузі Zouping, провінція Шаньдун, була реконструйована в жовтні 2002 року. NB Group є високотехнологічним підприємством, яке одночасно поєднує обробку, дослідження та розробки та міжнародну торгівлю. 
                    </p>
                </div>
            </div>
            {/* <div className={classes.partnerBlock}>
                <img src={gc} alt="gc" />
                <div className={classes.partnerInfo}>
                    <p>
                        <strong>SHANDONGSHOUGUANG JUNENG GOLDEN CORN CO., LTD </strong> - зосереджена на виробництві та продажу кукурудзяного крохмалю та продуктів глибокої обробки, таких як модифікований крохмаль, L-лізин, кукурудзяна клейковина, кукурудзяна клейковина, модифікований кукурудзяний крохмаль
                    </p>
                 </div>
            </div> */}
        </div>
    </div>
    <div className={classes.footer}>
                <CompanyName />
    </div>
        
</div>
    )
}