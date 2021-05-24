import React, { Component } from "react";
import {Route ,Link} from 'react-router-dom';
const menus =[
  {
    name: 'Trang chu',
    to: '/',
    exact:true
  },
  {
    name: 'Quan ly san pham',
    to: '/product-list',
    exact:false
  }
];

const Meunulink =({ label,to,activeOnlyWhenExact})=>{
  return (
    <Route  
      path ={to}
      exact ={activeOnlyWhenExact}
      children ={({match})=>{
          let active =match?'active': '';
          return(
            <li className={`page-item ${active}`}>
            <Link className="page-link" to ={to}>
              {label}
            </Link>
            </li>
          )
      }}
    />
  )
};
class Menu extends Component {
  showMenus =(menus)=>{
    let result =null;
    if (menus.length>0){
      result =menus.map((menu,index) =>{
        return(
          <Meunulink key ={index}
          label ={menu.name}
          to ={menu.to}
          activeOnlyWhenExact ={menu.exact}
          />
        );
      })
    }
    return result
  }
  render() {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item" aria-current="page">
            <a className="page-link" href="#/">
              Call api <span className="sr-only">(current)</span>
            </a>
          </li>
          {this.showMenus(menus)}
        </ul>
      </nav>
    );
  }
}

export default Menu;
