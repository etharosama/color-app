export default {
  root: {
    backgroundColor : 'blue',
    height: '100vh',
    marginTop : '0px' ,
    '& h1' :{
      marginTop : '0px' ,
      paddingTop :'5px '} ,
    display : 'flex' ,
    alignItems: 'flex-start' ,
    justifyContent: 'center',

    },
    contain :{
      width : '50%' ,
      display : 'flex' ,
      alignItems: 'flex-start' ,
      flexDirection: 'column ',
      flexWrap:' wrap',
      height : '50%' ,
    },
    nav:{
      display : 'flex' ,
      width : '100%' ,
      justifyContent: 'space-between',
      color : 'white' ,
      '& h1' :{
        paddingTop : '10px' ,
        paddingBottom : '5px' ,
        margin :'0px' ,
        paddingLeft : '15px' ,
      },
      '& a ':{
        paddingTop : '20px' ,
        paddingBottom : '10px' ,
        paddingRight : '15px' ,
        color : 'white' ,
        textDecoration: 'none',
        fontSize : '1.25rem'

      }
    },
    list:{
      boxSizing: 'border-box',
      width: '100%',
      display:'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      columnGap: '5%',
      height : '80%'
    }
}
