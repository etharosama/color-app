import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './colorBox.js'
const useStyles = theme => ({
  palte:{
    height :'94vh' ,
    margin : '0px' ,
    paddingTop : '63.984px',

  },
  palte_box:{
      height :'100%'
  }
})
class Palltecreat extends React.Component{
  constructor(props) {
    super(props)
    this.state={

    }
    this.getelementid =this.getelementid.bind(this)
  }

  getelementid(e){
    this.props.deletecolor(e)

  }
  render(){
    let box = this.props.color.map( color => <ColorBox background = {color.color}
                                              name ={color.name}
                                              key={color.name.replace(' ','_')}
                                              id_color = {color.name.replace(' ','_')}
                                              showlink = {false}
                                              height = {'samll'}
                                              displaycopy
                                              deletshow= {true}
                                              getelementid= {this.getelementid}/> )
    let { classes} =  this.props
    return(
      <div className= {classes.palte}>
        <div className= {classes.palte_box} >
        {box}
        </div>
      </div>

    )
  }
}
export default  withStyles (useStyles)(Palltecreat)
