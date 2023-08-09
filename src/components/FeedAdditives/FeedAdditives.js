import classes from './FeedAdditives.module.css'
import imBg from '../../image/feed/pexels.jpg'
import ScrollButton from '../MyButton/ScrollButton'
import {CompanyName} from '../Footer/CompanyName'





export function FeedAdditives(){
    return(
        <div className={classes.feedAdditives}>
             
                <div className={classes.feedBg}>
                    <h1>Кормові добавки</h1>
                    <img src={imBg} alt="imgBg" />
                </div>

                <div className={classes.infoPanel}>
               

                    <div className={classes.infoConteiner}>

                            <div><ScrollButton/></div>
                    <div className={classes.sectionLeft}>
                    
                        <h3>КОРМОВІ ДОБАВКИ</h3>
                        <ul>
                            <li>
                                 <a href="#section">Кокцидіостатики</a> 
                            </li>
                            <li>
                                <a href="#section1">Амінокислоти</a>
                            </li>
                            <li>
                                <a href="#section2">Вітаміни</a>
                            </li>
                            <li>
                                 <a href="#section3">Органічні кислоти</a>
                            </li>

                            <li>
                                  <a href="#section4">Мінеральні добавки</a>
                            </li>
                            <li>
                                 <a href="#section5">Ароматизатори та підсолоджувачі</a>
                            </li>
                            <li>
                                <a href="#section6">Антиоксиданти</a>
                            </li>
                            <li>
                                <a href="#section7">Сорбенти</a>
                            </li>

                            <li>
                                <a href="#section8">Білкові добавки</a>
                            </li>

                        </ul>
                        
                    </div>


                    <div className={classes.sectionRight}>
                    
                    
                    <section id="section" className={classes.koksiodiostatick}>
                            <h1>Кокцидіостатики</h1>
                            <p>
                            <strong>Кокцидіостатики</strong> відносяться до лікарських препаратів, що затримують розвиток кокцидий або повністю їх вбивають. Кокцидії викликають захворювання тварин кокцидіозом. Кокцидії є внутрішньоклітинними паразитичними найпростішими сімейства еймерій. Існує багато видів кокцидий, які можуть вражати тварин, але тільки деякі з них вважають дійсно небезпечними. Наприклад, найбільш патогенними є: Eimeria tenella, E. Necatrix, E. Acervulina, E. maxima і E. Brunetlli. Вони вражають окремі ділянки травного тракту, в основному товсту і тонку кишки. При великому ураженні кишечника з’являється кровотеча, відбувається швидка втрата маси тіла, діарея і смертність. <strong>Кокцидіостатики</strong> можуть отримувати хімічним шляхом, а також за своїм характером вони можуть бути антибіотиками, що виробляються різними мікроорганізмами. Більшість кокцідіостатиків необхідно виключати з раціону за кілька днів до забою тварин, щоб уникнути залишкового зараження м’яса.
                            </p>

                            
                        <div className={classes.column}>
                   
                            <div className={classes.termItem}>
                                <div className={classes.term}>Maxiban 160</div>
                                <div className={classes.description}>Профілактика кокцидіозів у курчат бройлерів</div>
                            </div>
                            <div className={classes.termItem}>
                                <div className={classes.term}>Monteban 100</div>
                                <div className={classes.description}>Профілактика кокцидіозів у курчат бройлерів</div>
                            </div>
                            <div className={classes.termItem}>
                                <div className={classes.term}>Elancoban 200</div>
                                <div className={classes.description}>Профілактика еймеріозів у курчат-бройлерів, ремонтного молодняка курей, індиків</div>
                            </div>

                            <div className={classes.termItem}>
                                <div className={classes.term}>Maxus G100</div>
                                <div className={classes.description}>Профілактика та лікування ремонтного молодняку птиці (у т ч бройлерів), хворих на ентерити, що спичинені мікроорганізмами, чутливими до авіламіцину</div>
                            </div>
                            <div className={classes.termItem}>
                            <div className={classes.term}>Salinomycin 12%</div>
                                <div className={classes.description}>Профілактика еймеріозу курчат-бройлерів та ремонтного молодняку кур</div>
                            </div>
                            
                        </div>
                                
                         

                    </section>
                        <section id="section1" className={classes.aminokislotu}>
                                        <h1>Амінокислоти</h1>
                                        <p>
                                        <strong>Амінокислоти</strong>  грають дуже важливу роль у житті тварин, виконуючи багато функцій в обміні речовин. Вісім «незамінних» амінокислот не можуть утворюватися з інших речовин в організмі тварин, і тому повинні споживатися з кормом. <strong>Амінокислоти</strong> служать основними елементами білків.
                                        Амінокислоти можуть об’єднуватися в різних послідовностях для утворення широкої різноманітності протеїнів. Завдяки оптимізації споживання амінокислот підвищується продуктивність тварин, а також, збалансування спожитого протеїну дозволяє істотно знизити виведення азоту з організму тварини.
                                        </p>

                            <div className={classes.amino}>

                                <div className={classes.termItem}>
                                    <div className={classes.term}>L-Lysine HCL</div>
                                    <div className={classes.description}>Збалансування раціонів для свиней та птиці за лізином</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>L-Lysine Sulphate</div>
                                    <div className={classes.description}>Збалансування раціонів для свиней та птиці за лізином</div>
                                </div>
                                 <div className={classes.termItem}>
                                    <div className={classes.term}>L-Treonine</div>
                                    <div className={classes.description}>Збалансування раціонів для свиней та птиці за треоніном</div>
                                </div>

                                <div className={classes.termItem}>
                                    <div className={classes.term}>L-Tryptophan</div>
                                    <div className={classes.description}>Збалансування раціонів для свиней та птиці за триптофаном</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>L-methionine</div>
                                        <div className={classes.description}>Збалансування раціонів для свиней, птиці та риби за метіоніном</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>L-Valine</div>
                                        <div className={classes.description}>Збалансування раціонів для свиней та птиці по валіну</div>
                                </div>
                            


                            </div>
                        </section>
               
                        <section id='section2' className={classes.vitamino}>


                        <h1>Вітаміни</h1>
                                        <h3>Жиророзчинні вітаміни</h3>

                            <div >

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Вітамін A</div>
                                    <div className={classes.description}>А – 1гр=1000000 М.О.=340мг ацетату</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>Вітамін D3</div>
                                    <div className={classes.description}>(Холекальциферол) Д3 – 1гр=500000 М.О.=12,5мг холекальциферолу</div>
                                </div>
                                 <div className={classes.termItem}>
                                    <div className={classes.term}>Вітамін E</div>
                                    <div className={classes.description}>(dl-α-токоферол, dl-α-токоферил ацетат) Е – 1гр=500мг Е-альфа-токоферолацетату</div>
                                </div>

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Вітамін K3</div>
                                    <div className={classes.description}>(Філохінон, фітонадіон, фітоменадіон) К3 – 1гр=515мг менадіону</div>
                                </div>

                                    <h3>Водорозчинні вітаміни</h3>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>L-Аскорбінова кислота</div>
                                        <div className={classes.description}>С – 1гр=990мг аскорбінової к-ти</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>Ніацин</div>
                                        <div className={classes.description}>РР (В3-ніоциномід)-1гр=995мг нікотинової к-ти</div>
                                </div>
                            
                                <div className={classes.termItem}>
                                    <div className={classes.term}>Ніацин</div>
                                        <div className={classes.description}>РР (В3-ніоциномід)-1гр=995мг нікотинової к-ти</div>
                                </div>

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Тіамін</div>
                                        <div className={classes.description}>В1 – 1гр=980мг тіаміну-мононітрату

                                    </div>
                                </div>

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Рибофлавін</div>
                                        <div className={classes.description}>В2 – 1гр=800мг рибофлавіну</div>
                                </div>

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Холін-хлорид</div>
                                        <div className={classes.description}>В4 – 1гр=600мг холіну хлориду або 450мг холіну</div>
                                </div>

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Фолієва кислота</div>
                                        <div className={classes.description}>В9 (Вс)– 1гр=960мг фолієвої к-ти</div>
                                </div>

                            </div>

                        </section>

                        {/* Органічні кислоти */}


                        <section id="section3" className={classes.organik}>
                                        <h1>Органічні кислоти</h1>
                                        <p>
                                        <strong>Органічні кислоти </strong>дозволяють комплексно вирішувати проблеми гігієни в тваринництві, а також знезараження води і сировини, знищення патогенних мікроорганізмів, знижувати захворюваність і відхід тварин, підвищувати конверсію кормів і, в кінцевому рахунку, покращувати товарність і рентабельність сільгоспвиробництва. Препарати на основі органічних кислот(мурашиної, оцтової, молочної, пропіонової, лимонної та ін) абсолютно безпечні у використанні, добре змішуються з кормом і практично не взаємодіють з його компонентами (вітамінами, білками), їх застосування не викликає побічних ефектів і ускладнень. Вони діють на хвороботворні мікроорганізми вибірково шляхом зсуву рН субстрату в сторону зменшення.
                                        </p>

                            <div >

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Acidomix AFG</div>
                                    <div className={classes.description}>Поліпшення гігієни, стабілізація мікрофлори шлунково-кишкового тракту, зниження рівню pH, поліпшення засвоєння білка, профілактика та контроль сальмонельозу</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>Acidomix AFL</div>
                                    <div className={classes.description}>Поліпшення гігієни, стабілізація мікрофлори шлунково-кишкового тракту, зниження рівню pH, поліпшення засвоєння білка, профілактика та контроль сальмонельозу</div>
                                </div>
                                 <div className={classes.termItem}>
                                    <div className={classes.term}>Acidomix FG</div>
                                    <div className={classes.description}>Поліпшення гігієни кормів, зниження рівню pH, поліпшення засвоєння білка у поросят, запобігання розвитку умовно-патогенних ентеробактерій, зниження випадків діареї</div>
                                </div>

                                <div className={classes.termItem}>
                                    <div className={classes.term}>AcidPro</div>
                                    <div className={classes.description}>Зниження дії патогенної мікрофлори на організм тварин і птиці. Покращення споживання корму. Підтримка життєдіяльністі свиней і птиці, підвищення засвоюваністі білків шляхом активації пепсину, створення сприятливих умов для росту корисної мікрофлори</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>AcidPro L</div>
                                        <div className={classes.description}>Профілактика та лікування ремонтного молодняку птиці (у т ч бройлерів), хворих на ентерити, що спичинені мікроорганізмами, чутливими до авіламіцину</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>AcidPro Plus</div>
                                        <div className={classes.description}>Зниження дії патогенної мікрофлори на організм тварин і птиці. Покращення процесу травлення та споживання корму. Покращення конверсії корму</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>Butirex C4</div>
                                        <div className={classes.description}>Покращення травлення за рахунок стимуляції панкреатичних ензимів, зокрема, амілази. Інгібіція патогенної мікрофлори</div>
                                </div>
                            


                            </div>
                        </section>

                        <section id="section4" className={classes.organik}>
                                        <h1>Мінеральні добавки</h1>
                                        
                            <div >

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Monocalcium phosphate</div>
                                    <div className={classes.description}>Сприяє нормалізації обміну в організмі вуглеводів і жирів</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>Mintrex Zn</div>
                                    <div className={classes.description}>Цинк хелат метіонін гідрокси аналога з чітко визначеною хімічною структурою, який містить 17,5% цинку і 81% метіонінової активності</div>
                                </div>
                                 <div className={classes.termItem}>
                                    <div className={classes.term}>Mintrex Cu</div>
                                    <div className={classes.description}>Мідь хелат метіонін гідрокси аналога з чітко визначеною хімічною структурою, який містить 18% міді і 79,5% метіонінової активності</div>
                                </div>

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Mintrex Mn</div>
                                    <div className={classes.description}>Марганець хелат метіонін гідрокси аналога з чітко визначеною хімічною структурою, який містить 15,5% марганцю і 77% метіонінової активності</div>
                                </div>
                                
                            


                            </div>
                        </section>


                        <section id="section5" className={classes.organik}>
                                        <h1>Ароматизатори та підсолоджувачі</h1>
                                        
                            <div >

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Luctarom Sweet SFS</div>
                                    <div className={classes.description}>Підсилювач смаку  та смакоароматичних інгредієнтів кормів для всіх видів продуктивних тварин</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>Luctarom Fruity</div>
                                    <div className={classes.description}>Ароматична добавка для  покращення сенсорних та смакових характеристик  корму продуктивних тварин</div>
                                </div>
                                 <div className={classes.termItem}>
                                    <div className={classes.term}>Luctarom Milky Vanilla</div>
                                    <div className={classes.description}>Ароматична добавка для покращення сенсорних та смакових характеристик корму для тварин  з нижніми нотами солодкої ванілі</div>
                                </div>

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Luctarom Savoury</div>
                                    <div className={classes.description}>Суміш ароматичних речовин для комбікормів всіх видів продуктивних тварин</div>
                                </div>
                                


                            </div>
                        </section>

                        <section id="section6" className={classes.organik}>
                                        <h1>Антиоксиданти</h1>
                                        
                            <div >

                                <div className={classes.termItem}>
                                    <div className={classes.term}>LUCTANOX</div>
                                    <div className={classes.description}>Антиоксидант у формі сухого порошку для захисту кормових інгредієнтів, преміксів та комбікормів</div>
                                </div>
                                
                        
                            </div>
                        </section>

                        <section id="section7" className={classes.organik}>
                                        <h1>Сорбенти</h1>
                                        
                            <div >

                                <div className={classes.termItem}>
                                    <div className={classes.term}>PF-sorb</div>
                                    <div className={classes.description}>Кормова добавка для адсорбції мікотоксинів</div>
                                </div>
                                
                        
                            </div>
                        </section>

                        <section id="section8" className={classes.organik}>
                                        <h1>Білкові добавки</h1>
                                        
                            <div >

                                <div className={classes.termItem}>
                                    <div className={classes.term}>Соєвий концентрат ЕР 200</div>
                                    <div className={classes.description}>Ферментований та висушений корм для свиней та птиці</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>Соєвий концентрат ЕР 200/1</div>
                                    <div className={classes.description}>Борошно соєве знежирене, високопротеїнове джерело для виготовлення комбікормів для тварин і птиці
                            </div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>ЄПУ400 RPC-F</div>
                                    <div className={classes.description}>Функціональний протеїн на основі ферментованого ріпакового шроту</div>
                                </div>
                                <div className={classes.termItem}>
                                    <div className={classes.term}>ЄПУ500 SPC-F</div>
                                    <div className={classes.description}>Функціональний протеїн на основі ферментованого соєвого шроту</div>
                                </div>
                                
                        
                            </div>
                         
                        </section>
                        
                    </div>
                    
                </div>
                       
            </div>

            <CompanyName />
           
        </div>
    )
}