import React, { Component } from 'react';
import ProductList from '../../components/productLists/ProductList'
import ProductItem from '../../components/productItems/ProductItem'
import {connect} from 'react-redux';
//import callApi from './../../utils/apiCaller'
import { Link } from 'react-router-dom';
import {actFetchProductsRequest,actDeleteProductRequest} from './../../actions/action'
class ProductListPage extends Component {
   constructor(props) {
       super(props);
       this.state ={
           products: []
       }
   }
 componentDidMount(){
  this.props.fetchAllProducts();

 }  

 onDelete =(id) =>{
     this.props.onDeleteProduct(id)
 }
    render() {
      
         let {products} =this.props
        
        return (
            <div className="col-12">
             <Link className="btn btn-primary" to="/product/add">
                Them san pham
              </Link>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Danh sach san pham</h3>
                </div>
                <div className="panel-body">
              <ProductList>
                  {this.showProducts(products)}
              </ProductList>
                  
                </div>
              </div> 
              
              
            </div>
              
        );
    }
    showProducts=(products)=>{
        let result=null;
        if(products.length>0){
            result= products.map((product,index) =>{
                return (
                    <ProductItem
                        key ={index}
                        product ={product}
                        index ={index}
                        onDelete ={this.onDelete}
                    />
                )
            })
        }
        return result;

    }
}

 const mapSateToProps=(state)=>{
     return{
        products: state.products
     }
 }
 const mapDispatchToProps =(dispatch, props)=>{
     return{
         fetchAllProducts: () =>{
             dispatch(actFetchProductsRequest());
         },
         onDeleteProduct :(id)=>{
             dispatch(actDeleteProductRequest(id))
         }
     }
 }
export default  connect(mapSateToProps,mapDispatchToProps) (ProductListPage);