import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
export default function AboutTab(props) {
  const data = [];
  const skills = [];
  var percent = "";
  for(var key in props.skills){
    percent = props.skills[key]+"%"
    skills.push(<div key={key} className="mx-2">
      <div style={{"textAlign" : "left"}}>{key}</div>
      <div className="progress" style={{height:"5px"}}>
        <motion.div style={{backgroundColor:"#18D26E", height:"5px"}} transition={{delay:0.3, duration:1}} animate={{width:percent}} className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></motion.div>
      </div>
    </div>);

  }
  for(var key in props.personalData){
    data.push(<div key={key}><b><span style={{"color":"#18D26E", "fontWeight":"600", "fontSize":"larger"}}>&gt;</span> {key} : </b>{props.personalData[key]}</div>);
  }
  const navigate = useNavigate();
  const goto = (link) => {
    navigate(link)
  }
  const swipeHandler = useSwipeable({
    onSwipedLeft : () => {goto(props.CertificationsTabLink)},
    onSwipedRight : () => {goto(props.HomeTabLink)}
  })
  return (
    <div {...swipeHandler} className='swipeableDiv'>
    <motion.div
            initial={{translateX:"100%"}}
            animate={{translateX:0}}
            className='aboutTabDiv'>
      <div className='aboutTabHeading1'>
        <b>ABOUT</b>
        <span className='horizontalBar'></span>
      </div> 
      <div className='aboutTabHeading2'>
      <h2><b>LEARN MORE ABOUT <span className='greenText'>ME</span></b></h2>
      </div>
      <div  className='aboutText'>
        <p>{props.aboutText}</p>
      </div>
      
      <div className='aboutTabInfoDiv'>
        <div>
          <img src={props.profileImagePath} alt="profile pic" className='aboutTabProfileImage' />
          <div className='downloadResumeDiv'>
          <a target={"_blank"} rel="noreferrer" href={props.cv_url} className="btn">
              Resume
          </a>
        </div>
        </div>
        <div className='rightDiv'>
          <span className='greenText'><h3 ><b>{props.aboutInfoHeading}</b></h3></span>
          <p>{props.aboutInfoTopPara}</p>
          <div className='aboutTabpersonalData'>
              {data}
          </div>
        </div>
      </div>
      <p className='aboutInfoBottomPara'>{props.aboutInfoBottomPara}</p>
      <hr />
      <div className='interestTab'>
        <div className='aboutTabHeading1'>
        <b>INTERESTS</b>
          <span className='horizontalBar'></span>
        </div>
        <div className='interests'>
              <div className='interest'>
                  <span className='interestIconSpan'><img src={props.interests["1"][1]} alt="icon" className='interestIcon' /></span>
                  <span className='interestName'>{props.interests["1"][0]}</span>
              </div>
              <div className='interest'>
                  <span className='interestIconSpan'><img src={props.interests["2"][1]} alt="icon" className='interestIcon' /></span>
                  <span className='interestName'>{props.interests["2"][0]}</span>
              </div>
              <div className='interest'>
                  <span className='interestIconSpan'><img src={props.interests["3"][1]} alt="icon" className='interestIcon' /></span>
                  <span className='interestName'>{props.interests["3"][0]}</span>
              </div>
              <div className='interest'>
                  <span className='interestIconSpan'><img src={props.interests["4"][1]} alt="icon" className='interestIcon' /></span>
                  <span className='interestName'>{props.interests["4"][0]}</span>
              </div>
        </div>
      </div>
      <hr />
      <div className='skillSection'>
      <div className='aboutTabHeading1'>
      <b>SKILLS</b>
        <span className='horizontalBar'></span>
      </div>
        <div className='skillsDiv'>
        {skills}
      </div>
      </div>

      
      
    </motion.div>
    </div>
  )
}
