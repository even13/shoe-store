import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      products: [
        {id: 1, name: 'Hi', brand: 'Converse'},
        {id: 2, name: 'Thornby Lace', brand: 'Clarks'},
        {id: 3, name: 'Classic', brand: 'Reebok'},
      ]
    }
  }

handleProductSelect (product) {
    this.setState(prevState => {
      return {
        selectedProducts: prevState.selectedProducts.concat(product)
      }
    });
  }

  render() {
      return (
        <div>
          <h1>My Product Store</h1>
          <p>You have selected {this.state.selectedProducts.length} product(s).</p>
          <ProductList
            products={this.state.products}
            onProductSelect={this.handleProductSelect.bind(this)}
          />
        </div>
      );
    }
  }
  
export default App;
