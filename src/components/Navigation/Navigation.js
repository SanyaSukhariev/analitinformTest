import { Link } from "react-router-dom";
import classes from './Navigation.module.css'
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import logo from '../../image/icons/log.jpg'


export function Navigation(){

    const [active, setActive]=useState(false)

    return(
        <header className={classes.header}>
        
            
      
            <div className={classes.box}>
                    <div >
                        <Link className={classes.logo} to='/'>
                                <img className={classes.img} src={logo} alt="logo" /> 
                            Analitinform 
                        </Link>
                    </div>
                    <ul className={active? [classes.menu, classes.active].join(' '): [classes.menu]}>
                        <li> <Link to ='/abouteCompany'>Про компанію</Link></li>
                        <li> <Link to='/feedAdditives'>Кормові добавки</Link></li>
                        <li> <Link to='/veterinary'>Ветеринарія</Link></li>
                        <li> <Link to='/pets'>Домашні тварини </Link></li>
                        <li> <Link to='/infoPage'>Інформація</Link></li>
                        <li> <Link to='/partners'>Партнери</Link></li>
                        <li> <Link to='/contacts'>Контакти</Link></li>
                    </ul>
                    <div onClick={()=>setActive(!active)} className={classes.mobileBtn}>
                    {active ? <AiOutlineClose size={50}/>: <AiOutlineMenu size={50}/>}
                        
                    </div>
            </div>
         
        </header>
    )
}