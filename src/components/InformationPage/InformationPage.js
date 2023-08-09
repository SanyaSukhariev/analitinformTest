import classes from './InformationPage.module.css'
import info from '../../image/informations/infoPanel.jpg'
import { CompanyName } from '../Footer/CompanyName'


export function InformationPage(){
    return(
        <div className={classes.InformationPage}>
            
                <div className={classes.infoImageBg}>
                <h1>Новини та подiї</h1>
                    <img src={info} alt="info" />
                </div>

                <div className={classes.container}>
                    <div className={classes.infoContainer}>
                         <h2>Інформаційний портал компанії ТОВ "Аналітінформ"</h2>

                         <p>Саме на цій сторінці будуть розміщенні новини та події компанії, чекай :)</p>
                    </div>
                   
                </div>
            <CompanyName/>  
        </div>
    )
}