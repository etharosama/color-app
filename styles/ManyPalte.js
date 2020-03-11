export default {
  root: {
    backgroundColor : 'white',
    borderRadius: '5px',
    padding :'0.5rem' ,
    position: ' relative' ,
    overflow:'hidden',
    border: '1px solid black ',
    '&:hover':{
      cursor: 'pointer',
    },
    '& a': {
      textDecoration: 'none',
    },
    marginTop : '10px'
  },
  color:{
    backgroundColor : '#F6F6F6',
    display:'grid',
    height : '150px ' ,
    gridGap: '0%',
    width :'100%',
    gridTemplateColumns: '25% 25% 25% 25%',
    borderRadius: '5px' ,
    overflow : 'hidden',
  },
  paletteName:{
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    margin :'0px',
    color : 'black' ,
    paddingTop: '0.5rem',
    fontSize :'1rem ' ,
    position : ' relative',
    textDecoration: 'none',
  },
  emoji:{
    fontSize :'1.5rem ' ,
    marginLeft: '0.5rem',
    textDecoration: 'none',
  }
};
