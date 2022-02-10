import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        fetch('/products')
            .then(response => response.json())
            .then(data => this.setState({products: data}));
    }

    render() {
        const {products, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    
        const productList = products.map(product => {
            return <tr key={product.id}>
                <td style={{whiteSpace: 'nowrap'}}>{product.name}</td>
                <td>
                {product.ingredients.map(i => (
                    <div>{i}&nbsp;</div>
                ))}
                </td>
            </tr>
        });
    
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/products/new">Add Product</Button>
                    </div>
                    <h3>Products</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Ingredients</th>
                        </tr>
                        </thead>
                        <tbody>
                        {productList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }

}
export default ProductList;