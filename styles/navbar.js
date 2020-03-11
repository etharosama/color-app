export default {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '5vh',
  },
  snackbar: {
    position: 'relative',
    left: 0,
  },
  logo: {
    marginRight: '25px',
    justifyContent: 'center',
    padding: '0  17px',
    fontSize: '22px',
    width: '200px',
    display: 'flex',
    height: '100%',
    whiteSpace: 'nowrap',
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: 'black',
      textTransform: ' uppercase',
    }
  },
  select_container: {
    marginLeft: 'auto',
    position: 'absolute',
    right: 0,
    marginRight: '30px',
  },
  silder_container: {
    display: 'flex',
    '& span': {
      whiteSpace: ' nowrap ',
      marginRight: '10px',
    },
  },
  slider: {
    width: '350px ',
    margin: ' 0 10px 0 0px ',
    display: 'inline-block ',
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    "& .rc-slider-handle  ": {
      backgroundColor: '#009432',
      border: 'none',
      outline: 'none ',
      boxShadow: 'none',
      width: '13px',
      height: '13px ',
      margin: '-2px -3px',
    },
    '& .rc-slider-rail': {
      height: '8px',
    },
  }

}
