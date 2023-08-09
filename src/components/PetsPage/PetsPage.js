import classes from './PetsPage.module.css'
import dog from '../../image/pets/dog.jpg'
import ScrollButton from '../MyButton/ScrollButton'
import { CompanyName } from '../Footer/CompanyName'



export function PetsPage(){
    return(
        <div className={classes.petsPage}>

                <div className={classes.petsImgBg}>
                            <h1>Домашні тварини</h1>
                        <img src={dog} alt="pets" />
                </div>

                <div className={classes.infoPetsPanel}>

                    <div className={classes.infoPetsContainer}>
                        <ScrollButton />

                        <div className={classes.sectionLeft}>
                        <h3> ДОМАШНІ ТВАРИНИ</h3>
                            <ul>
                                <li><a href="#section1">Препарати для домашніх тварин</a></li>
                                <li><a href="#section2">Вакцини для домашніх тварин</a></li>
                            </ul>
                        </div>
                        <div className={classes.sectionRight}>
                               
                                
                                <section id='section1'>

                                <h3>Препарати для дрібних домашніх тварин MSD Animal Health</h3>
                                            <div className={classes.column}>
                            
                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Бравекто®</div>
                                                    <div className={classes.description}>Профілактика і лікування собак при ектопаразитарних інвазіях</div>
                                                </div>
                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Бравекто® Плюс</div>
                                                    <div className={classes.description}>Профілактика і лікування котів при екто- і ендопаразитарних інвазіях.</div>
                                                </div>
                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Дексафорт®</div>
                                                    <div className={classes.description}>Лікування великої рогатої худоби, коней, свиней, собак та котів, хворих на артрити, бурсити, тендовагініти, алергічні дерматити, первинні кетози, ацетонемію, мастити, агалактію, екзему, а також при родовому парезі</div>
                                                </div>

                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Канінсулін</div>
                                                    <div className={classes.description}>Для лікування собак і котів, хворих на цукровий діабет</div>
                                                </div>
                                                
                                                
                                            </div>
                                </section>
                                <section id='section2' className={classes.secondSection}>
                                             <h3>Вацкцини для дрібних домашніх тварин MSD Animal Health</h3>
                                            <div className={classes.column}>
                            
                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Нобівак® КС</div>
                                                    <div className={classes.description}>Вакцина жива ліофілізована комбінована проти бордетеліозу та парагрипу собак</div>
                                                </div>
                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Нобівак® Паппі ЧП</div>
                                                    <div className={classes.description}>Вакцина жива полівалентна проти чуми та парвовірусу собак</div>
                                                </div>
                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Нобівак® ЧГППІ</div>
                                                    <div className={classes.description}>Вакцина жива полівалентна проти чуми, вірусного гепатиту, парвовірусної інфекції і парагрипу собак</div>
                                                </div>

                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Нобівак® Трікет Тріо</div>
                                                    <div className={classes.description}>Жива атенуйована вакцина проти вірусного ринотрахеїту, панлейкопенії та каліцивірусної інфекції котів</div>
                                                </div>
                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Нобівак® Лепто</div>
                                                    <div className={classes.description}>Вакцина інактивована проти лептоспірозу собак</div>
                                                </div>
                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Нобівак® Рабієс</div>
                                                    <div className={classes.description}>Вакцина інактивована проти сказу тварин</div>
                                                </div>
                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Нобівак® РЛ</div>
                                                    <div className={classes.description}>Вакцина інактивована проти сказу й лептоспірозу собак</div>
                                                </div>
                                                <div className={classes.termItem}>
                                                    <div className={classes.term}>Нобівак® Ділуент</div>
                                                    <div className={classes.description}>Розчинник ліофілізованих вакцин Nobivac, що застосовуються ін’єкційно для імунізації дрібних домашніх тварин</div>
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