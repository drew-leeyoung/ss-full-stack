import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/products' exact={true} component={ProductList}/>
            <Route path='/products/:id' component={ProductForm}/>
          </Switch>
        </Router>
    )
  }
}

export default App;

// import { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   state = {
//     products: []
//   };

//   async componentDidMount() {
//     const response = await fetch('http://localhost:8080/products');
//     const body = await response.json();
//     this.setState({products: body});
//   }

//   render() {
//     const {products} = this.state;
//     return (
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <div className="App-intro">
//               <h2>Products</h2>
//               {products.map(product =>
//                   <div key={product.id}>
//                     {product.name} (ingredients:{product.ingredients})
//                   </div>
//               )}
//             </div>
//           </header>
//         </div>
//     );
//   }
// }
// export default App;