import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Carousel from "react-multi-carousel";

export default function PortfolioTab(props) {
  const portfolios = [
    {"name" : "iAssistant",
      "source" : "https://vishalpalprofile.s3.ap-south-1.amazonaws.com/portfolio/carDetection.mp4",
      "type" : "video",
      "info" : "blah blah blah"

    },
    { "name" : "Indijobs",
      "source" : "https://vishalpalprofile.s3.ap-south-1.amazonaws.com/portfolio/indijobsScreenShot.png",
      "type" : "image",
      "info" : "blah blah blah"

    },
    { "name" : "iAssistant",
      "source" : "https://vishalpalprofile.s3.ap-south-1.amazonaws.com/portfolio/CurrencyDetection.mp4",
      "type" : "video",
      "info" : "blah blah blah"
    },
    { "name" : "iAssistant",
      "source" : "https://vishalpalprofile.s3.ap-south-1.amazonaws.com/portfolio/100_detection.jpg",
      "type" : "image",
      "info" : "blah blah blah"
    },
    { "name" : "iAssistant",
      "source" : "https://vishalpalprofile.s3.ap-south-1.amazonaws.com/portfolio/500_detection.jpg",
      "type" : "image",
      "info" : "blah blah blah"
    }
  ]
  const navigate = useNavigate();
  const goto = (link) => {
    navigate(link)
  }
  const swipeHandler = useSwipeable({
    onSwipedLeft : () => {goto(props.ResumeTabLink)},
    onSwipedRight : () => {goto(props.AboutTabLink)}
  })
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div {...swipeHandler} className='swipeableDiv'>
    <div className="portfolioTabDiv">
      <Carousel
                 swipeable={false}
                 draggable={false}
                 showDots={true}
                 responsive={responsive}
                 ssr={true} // means to render carousel on server-side.
                 infinite={true}
                 autoPlay={this.props.deviceType !== "mobile" ? true : false}
                 autoPlaySpeed={1000}
                 keyBoardControl={true}
                 customTransition="all .5"
                 transitionDuration={500}
                 containerClass="carousel-container"
                 removeArrowOnDeviceType={["tablet", "mobile"]}
                 deviceType={this.props.deviceType}
                 dotListClass="custom-dot-list-style"
                 itemClass="carousel-item-padding-40-px"
                >
        <div>hello1</div>
        <div>hello2</div>
      </Carousel>
    </div>
    </div>
  )
}
