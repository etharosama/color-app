import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withStyles } from '@material-ui/core/styles';
import Form from './form.js'
import Palltecreat from './palltecreat.js'

const drawerWidth = 350;
const useStyles = (theme => ({
  root: {
    display: 'flex',
    backgroundColor : '#ffff' ,
    height : '100vh'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor :'#EDEDED' ,
    color : "black"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),


  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    alignItems :'center'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor : '#ffff'

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor : '#ffff'
  },

  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    backgroundColor : '#ffff'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

 class PersistentDrawerLeft extends React.Component {
   constructor(props){
     super(props)
     this.state={
       open : false ,
       color : []
     }
     this.deletecolor =this.deletecolor.bind(this)
   }

   deletecolor (e){
     console.log(e);
     let list =[]
      this.state.color.map(i=>list.push(i.name))
      let id = list.indexOf(e)
  

     this.setState((state) =>{
       state.color.splice(id,1)
      return  { color: state.color }
     })
   }
  componentDidMount(){
    let list = []
    for (var i = 0; i < 9 ; i++) {
      let random_palte =this.props.paltes[Math.floor(Math.random()*9)].colors[Math.floor(Math.random()*20)]
      console.log(list.includes(random_palte));
      while ( list.includes(random_palte)  ) {
        console.log('u');
         random_palte =this.props.paltes[Math.floor(Math.random()*9)].colors[Math.floor(Math.random()*20)]
      }
      list.push(random_palte)
    }

    this.setState((state) =>{
     return  { color: list }
    })

  }
render(){
  let {classes} = this.props
  let {open , color} =this.state

  const handleDrawerOpen = () => {
    this.setState({
      open : true
    })
  };

  const handleDrawerClose = () => {
    this.setState({
      open : false
    })
  };

  const getcolorfrom = (color , name) => {
    this.setState((state) =>{
      let colorElement = {
        color : color,
        name : name
      }
     let list = state.color
     list.push(colorElement)
     return  { color: list }
    })
    console.log(color);
  };
  const clearclicked = ()=> {
    this.setState((state) =>{
     let list = []
     return  { color: list }
    })
    console.log(color);
    console.log('the state has been clear' );
  }
  const rendomcolor =  ()=>{

    let random_palte =this.props.paltes[Math.floor(Math.random()*9)].colors[Math.floor(Math.random()*20)]
    while (this.state.color.includes(random_palte)) {
       random_palte =this.props.paltes[Math.floor(Math.random()*9)].colors[Math.floor(Math.random()*20)]
    }

    console.log(random_palte);
    this.setState((state) =>{
     let list = state.color
     list.push(random_palte)
     return  { color: list }
    })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
                  [classes.appBarShift]: open, })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            color form
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            { <ChevronLeftIcon /> }
          </IconButton>
        </div >
        <Form getcolor = {getcolorfrom} clearclicked= {clearclicked} rendomcolor = {rendomcolor} color = {this.state.color}/>
      </Drawer>
      <div className={clsx(classes.content, { [classes.contentShift]: open, })}>
{     //   <div className={classes.drawerHeader} />
}        <Palltecreat color = {this.state.color} deletecolor={this.deletecolor}/>
     </div>
    </div>
  );
}}
export default withStyles (useStyles)(PersistentDrawerLeft)
