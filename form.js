import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {ChromePicker} from 'react-color'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = theme => ({
  button: {
    margin: theme.spacing(1),
    display:'inline-block',
    width : '43%'
  },snackbar: {
    position: 'relative',
    left: 0,
  },
  form_container : {
    marginTop : "60px",
    display:'flex',
    flexDirection: 'column',
    fontSize :'1rem',
    '& h3':{
      margin : '0px' ,
      justifyContent: 'center',
      textAlign: 'center',

    }

  },
  button_contair:{
    display:'flex',
    margin : '15px',
    marginbottom : '0px',

  },
  button1_contair:{
    margin : '10px',
    display:'flex',
    flexDirection: 'column',
  },
  button1:{
    margin: 'auto ',
    width : '90%' ,
    display:'inline-block',
    backgroundColor :  "#74b9ff" ,
    alignSelf:' center' ,
    marginTop : '10px' ,
    '&:hover':{
      backgroundColor :  "#00a7a3" ,
    }
  },
chromePicker : {
  margin : '10px',
  display:'inline-block',
  alignSelf: 'center',
},
})


class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      colorPicked : '',
      colorname: '',
      colornameIsempoty: false ,
      colornamelist :[] ,
      colorrepat : false ,
      limited: false ,
      open: false
    }
    this.changeName = this.changeName.bind(this)
    this.addButton = this.addButton.bind(this)
    this.handleCloseclosing = this.handleCloseclosing.bind(this)
    this.ramdombutton = this.ramdombutton.bind(this)
  }
  changeName(e){
    this.setState({colorname: e.target.value});
  }
  addButton(e){
    let isinclude =  this.state.colornamelist.includes(this.state.colorname )
    console.log(isinclude);
    if ( this.state.colorname === ''  ||
         this.state.colorPicked === '' ||
         isinclude ||
         this.state.colornamelist.length===20){
           if (isinclude){ this.setState({ colorrepat: true }); }
           else if (this.state.colornamelist.length===20) {
              this.setState({ limited: true });
           }
           else { this.setState({ colornameIsempoty: true }); }
    }else{
      this.setState((state) =>{
         let list = []
        this.props.color.map(i => list.push(i.name))
       return  { colornamelist : list }
      })
       this.props.getcolor(this.state.colorPicked , this.state.colorname) ;
       this.setState({ colorname: '' ,   colorPicked : '', colornameIsempoty: false ,   colorrepat : false ,}); }
  }
  ramdombutton (){
    if (this.props.color.length >=20) {
      this.setState({ limited: true });
    } else {
      this.props.rendomcolor()
      this.setState((state) =>{
         let list = []
        this.props.color.map(i => list.push(i.name))
       return  { colornamelist : list }
      })
    }

  }
  handleCloseclosing(){
    this.setState({limited: false })
  }
  render (){
    let{ classes} =this.props
     let Isempoty  = this.state.colornameIsempoty
     let colorrepat  = this.state.colorrepat
     let limited = this.state.limited

    return (
       <div className = {classes.form_container}>
          <h3> chose color </h3>
          <div className=  {classes.button_contair}>
             <Button
                  variant="outlined"
                  color="secondary"
                 size="small"
                 className={classes.button}
                 onClick= { () => this.props.clearclicked()}> clear </Button>
             <Button
                   variant="contained"
                   color="primary"
                   size="small"
                   className={classes.button}
                    onClick= {this.ramdombutton} > random color</Button>
        </div>
        <div className={classes.chromePicker}  >
                < ChromePicker width = {300}
                               onChangeComplete= {(e)=> this.setState({ colorPicked: e.hex } )}
                               color={ this.state.colorPicked}
                              />
        </div>
        <div className=  {classes.button1_contair}>
            <TextField error = {Isempoty || colorrepat}
                id = { Isempoty ? "standard-error-helper-text" : "standard-basic"}
                label="color name"
                helperText={ Isempoty ? "enter color name ." : colorrepat ? "color name is already taken":''}
                value = {this.state.colorname}
                onChange	= {this.changeName}
                />
            <Button
                   variant="contained"
                   color="primary"
                   size="large"
                   style = {{ background : this.state.colorPicked }}
                   className={classes.button1}
                   onClick= { this.addButton }> Add To color list </Button>
         </div>
         { limited  &&
           <div className={classes.snackbar}>
           <Snackbar
              anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left'  }}
              open={this.state.limited }
              autoHideDuration={1000}
              message={`you dot your limit of color `}
              action={ <React.Fragment>
                       <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleCloseclosing}>
                       <CloseIcon fontSize="small" />  </IconButton>
                       </React.Fragment> } />
           </div>
         }
    </div>
    )
  }
}
export default  withStyles (useStyles)(Form)
