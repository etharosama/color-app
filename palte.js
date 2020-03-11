import React from 'react';
import ColorBox from './colorBox.js'
import Navbar from './navbar.js'
import { withStyles } from '@material-ui/core/styles';
import useStyles from './styles/palte.js'

class Palte extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      level :500
      ,formt:'hex'
    }
    this.change= this.change.bind(this)
    this.handelchangeColorFormat= this.handelchangeColorFormat.bind(this )
  }
  change(le){
    console.log(le);
    this.setState({level:le})
  }
  handelchangeColorFormat(e){
    this.setState({formt:e})
  }
  render(){
    let level =   this.state.level
let color = this.props.colors[level].map((color) =>
<ColorBox
    background = {color[this.state.formt]}
    name ={color.name}
    key={color.id}
    id_color = {color.id}
    palteid = {this.props.id}
    showlink
    displaycopy
    /> )
let {classes}=this.props
console.log(classes);
    return (
      <div className= {classes.palte}>
      <div className= 'slider'>
      <Navbar showslider = {true} handelchange = {this.change} handelchangeColorFormat= {this.handelchangeColorFormat}/>
      </div>
      <div className= {classes.palte_box} >
      {color}</div>
      <footer className= {classes.paltefooter} >
      {this.props.paletteName}<span> {this.props.emoji} </span>
      </footer>
      </div>
    )
  }
}
export default withStyles(useStyles)(Palte)   ;
