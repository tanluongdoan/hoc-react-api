import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  onDelete = (a) => {
    if (confirm("ban muon xoa hay khong ?")) {//eslint-disable-line

      this.props.onDelete(a);
    }
  };

  render() {
    let { product, index } = this.props;
    let statusName = product.status ? "Con hang" : "het hang";
    let statusClass = product.status ? "bg-warning" : "bg-default";
   
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={statusClass}>{statusName}</span>
        </td>
        <td>
          <Link className="btn btn-primary mr-1" to ={`/product/${product.id}/edit`}>
            Sua
          </Link>
          <button
            className="btn btn-danger mr-1"
            type="button"
            onClick={() => this.onDelete(product.id)}
          >
            Xoa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
