import React, { Component } from 'react';


class ProductList extends Component {
    render() {
        return (
            <table className="table table-dark">
            <thead className="thead-light">
              <tr>
                <th>STT</th>
                <th>Ma</th>
                <th>Ten</th>
                <th>Gia</th>
                <th>Trang thai</th>
                <th>Hanh dong</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        );
    }
}

export default ProductList;