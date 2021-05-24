import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest,
} from "./../../actions/action";
import { connect } from "react-redux";
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      checkStatus: true,
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      this.props.onEditProduct(id);
    }
  }
  onchange = (e) => {
    let target = e.target;
    let name = target.name;

    let value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  componentDidUpdate = (props, a) => {
    let { itemEditing } = props;
    if (itemEditing.id !== this.state.id) {
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        checkStatus: itemEditing.status,
      });
    }
    console.log(this.state);
    console.log(a);
  };

  componentWillReceiveProps = (props, state) => {
    if (props && props.itemEditing) {
      let { itemEditing } = props;

      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        checkStatus: itemEditing.status,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    let { id, txtName, txtPrice, checkStatus } = this.state;
    let { history } = this.props;
    let product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: checkStatus,
    };

    if (id) {
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }

    history.goBack();
  };
  render() {
    let { txtName, txtPrice, checkStatus } = this.state;
    return (
      <div className="container">
        <div className="col">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="productName">Ten san pham</label>
              <input
                id="productName"
                className="form-control"
                type="text"
                name="txtName"
                value={txtName}
                onChange={this.onchange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Gia</label>
              <input
                id="productPrice"
                className="form-control"
                type="number"
                name="txtPrice"
                value={txtPrice}
                onChange={this.onchange}
              />
            </div>
            <div className="form-check">
              <input
                id="productStatus"
                className="form-check-input"
                type="checkbox"
                name="checkStatus"
                checked={checkStatus}
                value={checkStatus}
                onChange={this.onchange}
              />
              <label htmlFor="productStatus" className="form-check-label">
                Con hang
              </label>
            </div>
            <button className="btn btn-primary mr-3" type="submit">
              Luu lai
            </button>
            <Link to="/product-list" className="btn btn-danger ">
              {" "}
              Tro lai
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
