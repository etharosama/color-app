import React from 'react';
import { Link} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import useStyles from './styles/ManyPalte.js'


function ManyPalte (props){
   const { classes ,colors } = props;
  return (
    <div>
    <div className={classes.root}>
       <Link to = {`/paltte/${props.id}`}  className={classes.container}>
          <div className={classes.color} >
             {colors.map(i =>
                <div key= {i.name}
                     style= {{background : i.color ,
                              height:'100%' ,
                              width: '100%' ,
                              margin : '0px'}}/>)}
          </div>
          <h5 className={classes.paletteName} >
             {props.paletteName}
             <span className={classes.emoji} >{props.emoji}</span>
          </h5>
        </Link>
    </div>
    </div>
  )
}
export default  withStyles(useStyles)(ManyPalte) ;
