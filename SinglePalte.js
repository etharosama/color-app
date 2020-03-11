import React from 'react';
import ColorBox from './colorBox.js'
import { Link } from "react-router-dom";
import Navbar from './navbar.js'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/SinglePalte.js'

class SinglePalte extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    formt:'hex'
    }
    this.handelchangeColorFormat=this.handelchangeColorFormat.bind(this)
  }
  componentDidMount (){

  }
  handelchangeColorFormat(e){
    this.setState({formt:e})
  }
  render (){
    const { classes } = this.props;
    let colorlevel = []
    let colorid = this.props.colorid
    let colors = this.props.colors
    for(let i=100 ; i !==1000 ;i=i+100){
      let color = colors[i]
      color.map((i) => {  if (colorid === i.id){
                          colorlevel.push(i)} return 0 })
    }
    console.log(colorlevel);
    let color = colorlevel.map((color) =>
    <ColorBox
        background ={color[this.state.formt]}
        name ={color['name']}
        key = {color['name'].replace(' ','_')}
        showlink={false}
        height = {'big'}
        displaycopy
        /> )
    return (
      <div className={`${classes.root} Palte SinglePalte`} >
      <Navbar  showslider = {false} handelchangeColorFormat= {this.handelchangeColorFormat}/>
         <div className={classes.colors} >
            {color }
            <Link to = {`/paltte/${this.props.id}`}>
               <ColorBox   background ='black'
                           name ={`Go Back`}
                           key = {`Go Back`.replace(' ','_')}
                             height = {'big'}
                           showlink={false}
                           displaycopy = {false}
                           />
            </Link>
         </div>
         <footer className= { classes.paltefooter } >
         {this.props.paletteName}<span> {this.props.emoji} </span>
         </footer>
      </div>
    )
  }
}
export default  withStyles(styles)(SinglePalte);
