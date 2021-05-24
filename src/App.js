import React, { Component } from "react";

import Menu from "./components/menus/Menu";
import routers from './routers';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <Menu/>
        <div className="container">
          <div className="row">
          
            <Switch> {this.showContentMenus(routers)} </Switch>
            
          </div>
        </div>
      </Router>
    );
    
  }

  showContentMenus =(routers)=>{
    let result =null;
    
    if(routers.length>0){
      result =routers.map((route,index)=>{
       
       return(
          <Route
          key ={index}
          path ={route.path}
          exact ={route.exact}
          component ={route.main}
        />
       
        )
       
      })
      
    }
    
    return result
  }

}

export default App;
