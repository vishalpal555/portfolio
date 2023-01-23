import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import certificateBlur from "../certificate_Blur.jpg";
import { useState } from 'react';
import { useEffect } from 'react';

export default function CertificationsTab(props) {
  const certificateDiv = [];
  const navigate = useNavigate();
  const goto = (link) => {
    navigate(link)
  }
  const swipeHandler = useSwipeable({
    onSwipedLeft : () => {goto(props.ContactsTabLink)},
    onSwipedRight : () => {goto(props.AboutTabLink)}
  })
    
  return (
    <div {...swipeHandler} className='swipeableDiv'>
      
      <motion.div 
                  initial={{translateY:"100%", opacity:0.1}}
                  transition={{duration:1}}
                  animate={{translateY:0, opacity:1}}
                  className='certificatesTabDiv'>
            <div className='certificatesTabHeading1'>
              <b>CERTIFICATES</b>
              <span className='horizontalBar'></span>
            </div>     
            {
              Object.keys(props.certificates).map((key) => (
              <div className='eachCertificateDiv' key={key}>
              <a target={"_blank"} rel="noreferrer" href={props.certificates[key][2] ? props.certificates[key][2] : props.certificates[key][1]}>
                <LazyLoadImage
                              className='certificateImg' 
                              alt='certificate' 
                              effect="blur"
                              width="100%"
                              height="auto"
                              placeholderSrc={certificateBlur} 
                              src={props.certificates[key][1]} 
                             />
          <span className='certificateName'>{props.certificates[key][0]}</span>
          </a>
          </div>
          ))
            }
      </motion.div>
    </div>
  )
}
