import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {Link} from "react-router-dom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './styles/navbar.js'


class Navbar extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      level :500
      , format : 'hex'
      ,open: false
    }
    this.change1= this.change1.bind(this)
    this.handelchangeformat= this.handelchangeformat.bind(this)
    this.handleCloseclosing= this.handleCloseclosing.bind(this)

  }
  change1(le){
    console.log(le);
    this.setState({level:le})
  this.props.handelchange(le)
  }
  handelchangeformat(e){
    this.setState({format: e.target.value , open: true})
    this.props.handelchangeColorFormat( e.target.value)
  }
  handleCloseclosing(){
    this.setState({open: false })
  }
    render(){
      let {classes}=this.props
      return(
        <header className= {classes.navbar}>
        <div className= {classes.logo}> <Link to = '/'> color-app </Link> </div>
        {this.props.showslider &&
        <div className= {classes.silder_container}>
          <span> level :{this.state.level}</span>
          <div   className = {classes.slider} >
              < Slider
                 defaultValue = {this.state.level}
                 min = {100}
                 max= {900 }
                 step={100}
                 onAfterChange= {this.change1} />
             </div>

        </div> }
        <div className= {classes.select_container}>
           < Select value= {this.state.format}
                    onChange={this.handelchangeformat} >
                 <MenuItem value="hex">hex - #ffff </MenuItem>
                 <MenuItem value="rgb">rgb - rgb(255,255,255) </MenuItem>
                 <MenuItem value="rgba">rgba - rgba(255,255,255,1)</MenuItem>
               </Select>
        </div>
        <div className={classes.snackbar}>
        <Snackbar
           anchorOrigin={{
              vertical: 'bottom',
             horizontal: 'left'  }}
           open={this.state.open}
           autoHideDuration={1000}
           message={`format change sucessfuly to ${this.state.format}`}
           action={
                   <React.Fragment>

                    <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleCloseclosing}>
                    <CloseIcon fontSize="small" />  </IconButton>
                    </React.Fragment>
        }
             />
             </div>
        </header>
      )
    }
}
export default  withStyles(useStyles)(Navbar)
