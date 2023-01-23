import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";
import { useSwipeable } from 'react-swipeable';

export default function HomeTab(props) {
  const navigate = useNavigate();
  const goto = (link) => {
    navigate(link)
  }
  const swipeHandler = useSwipeable({
    onSwipedLeft : () => {goto(props.AboutTabLink)}
  })
  return (
    <div {...swipeHandler} className='swipeableDiv'>
    <div className='homeTabDiv'>
    <motion.div 
                transition={{duration:0.5}}
                animate={{scale:1}} 
                initial={{scale:0}} 
                className='homeTabContainer'>
        <h1 className='fullNameh1Tag'>I'm <span className='greenText'>&#160; {props.fullName}</span></h1>
        <h4 className="homeTabShortText"><Typewriter
                  
                  onInit={(typewriter)=> {
                            typewriter
                                    .changeDelay(100)
                                    .typeString(props.homeTabShortText[0])
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString(props.homeTabShortText[1])
                                    .pauseFor(1000)
                                    .start();
                            
                          }}
                          options={{
                            autoStart: true,
                            loop: true,
                          }}
       /></h4>
        <button onClick={() => {goto(props.AboutTabLink)}} className='homeTabAboutButton'>About me</button>
    </motion.div>
    </div>
    </div>
  )
}
