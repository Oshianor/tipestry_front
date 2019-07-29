// import React, { Component } from 'react';
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

// class Ads extends Component {
// 	render() {
// 		const content = [
//       {
//         title: "tghimff",
//         link: "https://tipestry.com",
//         image: "/static/images/default.png",
//         description: "description uguhir description io iodescription",
//         button: "See More"
//       },
//       {
//         title: "tghimff",
//         link: "https://tipestry.com",
//         image: "/static/images/login.png",
//         description: "description uguhir description io iodescription",
//         button: "See More"
//       }
//     ];
// 		return (
//       <Slider
//         className="slider-wrapper"
//         buttonDisabled={true}
//         autoplay={3000}
//       >
//         {content.map((item, index) => (
//           <div
//             key={index}
//             className="slider-content"
//             style={{
//               background: `url('${item.image}') no-repeat center center`
//             }}
//           >
//             <div className="inner">
//               <Typography variant="h1">{item.title}</Typography>
//               <Typography variant="body1">
//                 {/* {moment(game.createdAt).fromNow()} */}
//                 &#8358;{item.description}
//               </Typography>
//               <a href={"/game"} style={{ textDecoration: "none" }}>
//                 <Button
//                   size="large"
//                   style={{ background: "red", color: "white" }}
//                 >
//                   Enter Now
//                 </Button>
//               </a>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     );
// 	}
// }

// export default Ads;




import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
  }
];

const useStyles = theme => ({
  root: {
    maxWidth: 450,
    flexGrow: 1,
    margin: "0px 10%"
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 500,
    overflow: "hidden",
    width: "100%"
  }
});

function SwipeableTextMobileStepper(props) {
  const { classes } = props;
  
  // const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default withStyles(useStyles)(SwipeableTextMobileStepper);