// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Thumbnails from '../reuseable/thumbnails';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Camera from '@material-ui/icons/CameraAlt';
// import IconButton from '@material-ui/core/IconButton';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginBottom: '5%'
//   },
//   demo: {
//     // width: '100%',
//     position: 'relative',
//     [theme.breakpoints.up("lg")]: {
//       width: 1170
//     }
//   },
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
// });

// class EditProfile extends React.Component {

//   handleChange = name => event => {
//     this.setState({
//       [name]: event.target.value,
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <div className={classes.root}>
//         <Grid container justify="center">
//           <Grid
//             container
//             className={classes.demo}
//             alignItems="center"
//             justify="center"
//           >
//           <Typography style={{ textAlign: 'left' }}>Personal Information</Typography>
//             <Grid item>
// 						  <Thumbnails name="elute" size="xl" borderColor="black" borderWidth={2} />
//               <IconButton aria-label="Delete" style={{ marginTop: -55, marginLeft: 75, position: 'absolute' }} >
//                 <Camera style={
//                   {
//                     fontSize: 40,
//                     color: 'dimgray'
//                   }
//                 }
//                 />
//               </IconButton>
//               <form className={classes.container} noValidate autoComplete="off">
//                 <TextField
//                   id="outlined-uncontrolled"
//                   label="Uncontrolled"
//                   defaultValue="foo"
//                   className={classes.textField}
//                   margin="normal"
//                   variant="outlined"
//                 />
//                 <TextField
//                   required
//                   id="outlined-required"
//                   label="Required"
//                   defaultValue="Hello World"
//                   className={classes.textField}
//                   margin="normal"
//                   variant="outlined"
//                 />
//                 <TextField
//                   error
//                   id="outlined-error"
//                   label="Error"
//                   defaultValue="Hello World"
//                   className={classes.textField}
//                   margin="normal"
//                   variant="outlined"
//                   fullWidth
//                 />
//                 <TextField
//                   id="outlined-multiline-static"
//                   label="Multiline"
//                   multiline
//                   rows="4"
//                   defaultValue="Default Value"
//                   className={classes.textField}
//                   margin="normal"
//                   fullWidth
//                   variant="outlined"
//                 />
//               </form>
//             </Grid>


//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

// EditProfile.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(EditProfile);






















import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import Thumbnails from '../reuseable/thumbnails';
import Camera from '@material-ui/icons/CameraAlt';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    width: 400
  },
  button: {
    margin: theme.spacing.unit,
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  cutspace: {
    marginTop: -18
  },
  addspace: {
    marginTop: 18
  }
});


class Productform extends React.Component {
  constructor(props) {
    super(props);

    this.imgUpload = element => {
      this.imgUp = element
    }
  }

  state = {
    name: "",
    category: "",
    img: {},
    previewImg: "",
    description: "",
    price: "",
    nameError: false,
    categoryError: false,
    imgError: false,
    descriptionError: false,
    priceError: false,
    colorError: false,
    loading: false,
    success: false,
    color: "#ff9800",
    redirect: false
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }


  handleChangeComplete = (color) => {
    // console.log(color);

    this.setState({ color: color.hex });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  upload = (e) => {
    e.preventDefault();
    let self = this;
    var reader = new FileReader();

    if (e.target.files[0] !== undefined) {
      this.setState({
        img: this.imgUp.files[0]
      })

      reader.onload = function (e) {
        self.setState({
          previewImg: e.target.result
        });
      }
      reader.readAsDataURL(e.target.files[0]);
    }
    // console.log(this.imgUp.files[0])
  }


  handleFormComplete = () => {

  }

  render() {

    const category = ["Shoes", "Bags", "Clothes", "Electronics"]
    const { classes } = this.props;
    const { redirect, loading, success, img, previewImg, nameError, colorError, categoryError, imgError, descriptionError, priceError } = this.state;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success,
    });

    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={8}>
          <form className={classes.container} autoComplete="off">

            <Grid item md={12} className={classes.cutspace}>
              {
                previewImg !== "" &&
                <img src={previewImg} alt="uploaded preview" width="140" height="140" />
              }
              
              <Thumbnails name="elute" size="xl" borderColor="black" borderWidth={2} />
              <IconButton
                onClick = {
                  (e) => {
                    this.imgUp.click()
                  }
                }
                aria-label="Delete" 
                style={{ marginTop: -55, marginLeft: 75, position: 'absolute' }} >
                <Camera style={
                  {
                    fontSize: 40,
                    color: 'dimgray'
                  }
                }
                />
              </IconButton>
              <input
                ref={this.imgUpload}
                type='file'
                accept="image/*"
                style={{ display: "none" }}
                onChange={this.upload}
              />
            </Grid>

            <Grid item md={12}>
              <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
                error={nameError.status}
                helperText={nameError.msg}
              />
            </Grid>

            <Grid item md={12} className={classes.cutspace}>
              <TextField
                id="outlined-name"
                label="Bio"
                multiline
                rows={3}
                className={classes.textField}
                value={this.state.description}
                onChange={this.handleChange('description')}
                margin="normal"
                variant="outlined"
                error={descriptionError.status}
                helperText={descriptionError.msg}
              />
            </Grid>

            <Grid item md={12}>
              <TextField
                id="price"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Price"
                value={this.state.price}
                onChange={this.handleChange('price')}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₦</InputAdornment>,
                }}
                error={priceError.status}
                helperText={priceError.msg}
              />
            </Grid>

            <Grid item md={12}>
              <div className={classes.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  className={buttonClassname}
                  disabled={loading}
                  onClick={this.handleFormComplete}
                >
                  Add Product
                  {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </Button>

              </div>
            </Grid>

          </form>

        </Grid>
      </div>
    );
  }
}

Productform.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Productform);