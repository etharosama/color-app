import chroma from "chroma-js";
export  default {
  margin : {
    position: 'absolute',
    top: '0',
    right: '0' ,
    padding : '3px' ,
    '&:hover':{
      backgroundColor : '#D83800',
      color:'#ffff'
    },
    borderRadius: '0px',
    cursor :' pointer',
borderBottomLeftRadius: '5px',

  },
  colorchanger :{
    color : props =>{ let number = 1 - chroma(props.background).luminance();
                       if(number >= 0.55){
                             return 'white'
                        }else{
                            return 'black'
                       }} ,
    textDecoration: 'none',
  },
  ColorBox: {
    height: props => props.height==='big' ? '50%' : '25% ',
    width: '20% ',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4.5px',
    '&:hover .copy-button':{
      opacity: '1',
      transform: '0.5s',
    }
  },
  copy_button :{
    width: '100px' ,
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%' ,
    marginLeft: '-50px' ,
    marginTop: '-15px',
    outline: 'none' ,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    textAlign: 'center',
    color: 'white' ,
    textTransform: 'uppercase',
    border:' none',
    opacity: 0 ,
  } ,
  see_more : {
    textDecoration:'none',
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none' ,
   right: '0px',
   bottom: '0px' ,
   color: 'white' ,
  height: '30px' ,
  width: '60px' ,
  textAlign: 'center',
  lineHeight: '30px ',
  textTransform: 'uppercase',
},contant:{
  position: 'absolute',
  left: '0px' ,
  bottom: '0px' ,
  padding: '5px' ,
  letterSpacing: '1px' ,
  textTransform: 'uppercase',
},overlay : {
  opacity: 0 ,
  zIndex: 0 ,
  width: '100%',
  height: '100%',
  transition: 'transform 0.6s ease-in-out' ,
  transform: 'scale(0.1)',
},overlay_show:{
  opacity: 1 ,
  transform: "scale(50)",
  zIndex: 10,
  position: "absolute",
},copied_msg:{
  position: 'fixed',
  left: 0 ,
  right: 0 ,
  top: 0 ,
  bottom: 0 ,
  display: 'flex' ,
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  fontSize: '4rem ',
  transform: 'scale(0.1)',
  opacity: 0 ,
  color: 'white' ,
  flexDirection: 'column',
  '& h1':{
    fontWeight: 400,
    textShadow: '1px 2px black'  ,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '100% ',
    marginBottom: '0px ',
    padding: '2rem' ,
    textTransform: 'uppercase' },
  '& p' :{
    fontSize:' 2rem ',
    fontWeight:' 100' ,
  }
}
,copied_msg_show:{
  zIndex: 25 ,
  transform: 'scale(1)',
  opacity: 1 ,
  transition: 'transform 0.4s ease-in-out' ,
  transitionDelay: '0.3s' ,
}
}
