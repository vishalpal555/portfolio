import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeTab from './Components/HomeTab';
import AboutTab from './Components/AboutTab';
import ContactsTab from './Components/ContactsTab';
import CertificationsTab from './Components/CertificationsTab';
import ResumeTab from './Components/ResumeTab';
import PortfolioTab from './Components/PortfolioTab';
import axios from 'axios';

function App() {
  var [data, setData] = useState({});
  useEffect(() =>{
      axios.get("https://1nfzvjzm51.execute-api.ap-south-1.amazonaws.com/v1/vishalpalprofile")
            .then( (data) =>{
              setData(data.data)
            })
            .catch("json couldnt be retrieved")
  }, [])
  return (
    <div id="app" className="App">
      <BrowserRouter>
      <Header twiterLink={data.twiterLink} 
              githubLink={data.githubLink} 
              instagramLink={data.instagramLink} 
              linkedinLink={data.linkedinLink} 
              facebookLink={data.facebookLink} 
              firstName={data.firstName} 
              HomeTabLink={data.HomeTabLink} 
              AboutTabLink={data.AboutTabLink} 
              ResumeTabLink={data.ResumeTabLink} 
              PortfolioTabLink={data.PortfolioTabLink} 
              CertificationsTabLink={data.CertificationsTabLink} 
              ContactsTabLink={data.ContactsTabLink} />
      
       
        <div className='bodyDiv'>
            <Routes>
              <Route 
                    path={data.HomeTabLink} 
                    element={
                              <HomeTab 
                                        AboutTabLink={data.AboutTabLink} 
                                        fullName={data.firstName+" "+data.lastName} 
                                        homeTabShortText={data.homeTabShortText}
                                />
                              } 
                />

              <Route 
                    path={data.AboutTabLink} 
                    element={
                              <AboutTab 
                                        CertificationsTabLink={data.CertificationsTabLink}
                                        interests={data.interests} 
                                        HomeTabLink={data.HomeTabLink} 
                                        PortfolioTabLink={data.PortfolioTabLink} 
                                        skills={data.skills} 
                                        aboutInfoBottomPara={data.aboutInfoBottomPara} 
                                        personalData={data.personalData} 
                                        aboutInfoTopPara={data.aboutInfoTopPara} 
                                        aboutInfoHeading={data.aboutInfoHeading} 
                                        profileImagePath={data.profileImagePath} 
                                        aboutText={data.aboutText}
                                        cv_url={data.cv_url} 
                                />
                              } 
                />

              {/* <Route 
                    path={data.PortfolioTabLink} 
                    element={
                              <PortfolioTab 
                                            AboutTabLink={data.AboutTabLink} 
                                            ResumeTabLink={data.ResumeTabLink} 
                                />
                              } 
                /> */}

              {/* <Route 
                    path={data.ResumeTabLink} 
                    element={
                              <ResumeTab 
                                        CertificationsTabLink={data.CertificationsTabLink} 
                                        PortfolioTabLink={data.PortfolioTabLink} 
                                        cv_url={data.cv_url} 
                                        education={data.education} 
                                        experience={data.experience} 
                                />
                              } 
                /> */}

              <Route 
                    path={data.CertificationsTabLink} 
                    element={
                              <CertificationsTab 
                                                AboutTabLink={data.AboutTabLink} 
                                                ResumeTabLink={data.ResumeTabLink} 
                                                ContactsTabLink={data.ContactsTabLink}
                                                certificates={data.certificates}
                                />
                              } 
                />

              <Route 
                    path={data.ContactsTabLink} 
                    element={
                              <ContactsTab 
                                            twiterLink={data.twiterLink} 
                                            githubLink={data.githubLink} 
                                            instagramLink={data.instagramLink} 
                                            linkedinLink={data.linkedinLink} 
                                            facebookLink={data.facebookLink} 
                                            personalData={data.personalData} 
                                            CertificationsTabLink={data.CertificationsTabLink} 
                                            HomeTabLink={data.HomeTabLink}
                                />
                              } 
                />
            </Routes>
        </div>
        
      </BrowserRouter>
      <div className='creditsDiv'>
          Designed by <a href={data.pritamProfileLink}>Pritam </a>
          <span className='greenText'> &#38; </span>
          <a href={data.vishalProfileLink}> Vishal</a>
      </div>
    </div>
  );
}

export default App;
