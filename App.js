import React from 'react';
import seedColors from './seedColors.js'
import NewPalteForm from './NewPalteForm.js'
import Palte from './palte.js' ;
import {
  Switch,
  Route,
  // Link
} from "react-router-dom";
import  { generatePalette } from './colorHelper.js';
import Paltelist from './paltelist.js'
import SinglePalte from './SinglePalte.js'
function App() {
  function findnum(id){
   return  seedColors.find(function(palt){
      return palt.id === id
    })
  }
    ;
  return (
    <div >
    <Switch>
    <Route exact path="/paltte/:paltteId/:colorId"
           render = {(propsof)=> <SinglePalte  {... generatePalette(findnum (propsof.match.params.paltteId) )}
                                  colorid= {propsof.match.params.colorId} />} /> }/>

    <Route  exact path="/paltte/:id"
           render = { propsof => <Palte {... generatePalette(findnum (propsof.match.params.id) )} /> }/>
   <Route exact path="/creat-new-pallte" render ={()=> <NewPalteForm  paltes = {seedColors }/>}/>
   <Route exact path="/" render ={()=>  <Paltelist paltes = {seedColors }/>}/>

    </Switch>


    </div>
  );
}

export default App;
