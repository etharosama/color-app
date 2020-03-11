import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ManyPalte from './ManyPalte.js'
import useStyles from './styles/paltelist.js'
import { Link} from "react-router-dom";

class Paltelist extends React.Component{
  // paltes.map(i => <h1> i.paletteName</h1>)
  render(){
    let {paltes , classes }= this.props

    return(
      <div className={classes.root} >
         <div className={classes.contain}>
           <div className={classes.nav} >
             <h1> color pallte </h1>
             <Link to= '/creat-new-pallte'> creat new pallte</ Link>
           </div>
           <div className={classes.list}>
             {paltes.map(i=> <ManyPalte key={i.id} {... i }/>)}
           </div>
         </div>
      </div>
    )
  }
}
export default  withStyles(useStyles)(Paltelist)
