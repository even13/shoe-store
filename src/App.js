import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      products: [
        {id: 1, name: 'Hi', brand: 'Converse'},
        {id: 2, name: 'Thornby Lace', brand: 'Clarks'},
        {id: 3, name: 'Classic', brand: 'Reebok'},
      ]
    }
  }
render() {
    return (
      <div>
        <h1>My Product Store</h1>
        <ProductList products={this.state.products}/>
      </div>
    );
  }
}
export default App;
