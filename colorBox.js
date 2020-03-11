import React from 'react';
import useStyles from './styles/colorbox.js'
import {Link} from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class ColorBox extends React.Component {
  static defaultProps = {
    height : 'small' ,
    deletshow: false
  }
  constructor(props) {
    super(props)
    this.state = {
    value: '',
    copied: false,
  };
  this.handelcopy = this.handelcopy.bind(this)
  }
  handelcopy(){
    this.setState({copied: true}) ;
    setTimeout(()=> this.setState({copied: false}) , 1500);
  }
  render(){
    let color_id = this.props.id_color ;
 const { classes  } = this.props;


    return (
    <CopyToClipboard text={this.props.background} onCopy={this.handelcopy }>
      <div style = {{background : this.props.background}} className={classes.ColorBox} >
        <div style = {{background : this.props.background}}
             className ={ ` ${classes.overlay}  ${this.state.copied && classes.overlay_show}`} />
        <div className=  {`${classes.copied_msg} ${this.state.copied && classes.copied_msg_show}`}>
           <h1 >copied</h1>
           <p  className={classes.colorchanger}  >{this.props.background}</p>
        </div>
        {this.props.deletshow &&
          <IconButton  onClick={e=>
                                   {this.props.getelementid(color_id)
                                   e.stopPropagation() } }  aria-label="delete" className={classes.margin}>
           <DeleteIcon   />
           </IconButton>
        }
        <div className= 'copy-box'>
            <div  className={classes.contant}>
                <span className={classes.colorchanger} >{this.props.name}</span>
            </div>
            {this.props.displaycopy &&
            <button className= {` copy-button ${ classes.copy_button} ${ classes.colorchanger} `}> copy </button> }
        </div>
        {this.props.showlink &&
         <span  className= {`${ classes.see_more} ${ classes.colorchanger} `}>
             <Link to ={ `/paltte/${this.props.palteid}/${color_id}`}
                    onClick={e=> e.stopPropagation() } className={classes.colorchanger}>more< /Link>
         </span> }

      </div>
    </CopyToClipboard>
    )
  }
}
export default withStyles(useStyles)(ColorBox)   ;
