// import {Button} from '@mui/material'
import { Routes,Route, useLocation } from 'react-router-dom';
import { AboutCompany } from './components/AboutCompany/AboutCompany';
import { FeedAdditives } from './components/FeedAdditives/FeedAdditives';
import {Navigation} from './components/Navigation/Navigation'
import {Company} from './components/Company/Company'
import { useEffect } from 'react';
import { VeterinaryPage } from './components/VeterinaryPage/VeterinaryPage';
import { PetsPage } from './components/PetsPage/PetsPage';
import { InformationPage } from './components/InformationPage/InformationPage';
import { PartnersPage } from './components/PartnersPage/PartnersPage';
import { Contacts } from './components/ContactsPage/Contacts';



function App() {

  const location = useLocation();

  useEffect(()=>{

    window.scrollTo(0,0)
  },[location.pathname])

  return (
    <div >
    <Navigation />
     <Routes>
       <Route path='/' element={<Company />} />
        <Route path='/abouteCompany' element={<AboutCompany />}/>
        <Route path='/feedadditives' element={<FeedAdditives />}/>
        <Route path='/veterinary' element={<VeterinaryPage />}/>
        <Route path='/pets' element={<PetsPage/>}/>
        <Route path='/infoPage' element={<InformationPage />}/>
        <Route path='/partners' element={<PartnersPage />} />
        <Route path='/contacts' element={<Contacts />}/>
     </Routes>
    </div>
  );
}

export default App;
