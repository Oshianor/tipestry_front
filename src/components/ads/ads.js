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
    label: "accesswire",
    imgPath: "/static/homepage/bitcfnews.png",
    href:
      "https://www.accesswire.com/560634/First-Bitcoin-Capital-Corp-OTCBITCF-Incubator-Division-Announced-Tipestry-Inc-An-Innovative-Content-Monetization-And-Social-Media-Platform-As-Its-First-Client-Company"
  },
  {
    label: "Post of the week",
    imgPath: "/static/homepage/potw-banner.png",
    href: "https://tipestry.com/topics/5d9397d496e2273b3425453b/post-of-the-week-thread"
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
        activeStep={activeStep}
        variant="dots"
        onChangeIndex={handleStepChange}
        // enableMouseEvents
        steps={2}
        position="static"
        className={classes.root}
        interval={8000}
      >
        {tutorialSteps.map((step, index) => (
          <a href={step.href} target="_blank" key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </a>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={tutorialSteps.length}
        position="static"
        variant="dots"
        className={classes.root}
        activeStep={activeStep}
      />
    </div>
  );
}

export default withStyles(useStyles)(SwipeableTextMobileStepper);