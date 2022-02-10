import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select'
import AppNavbar from './AppNavbar';

// multi-select for ingredients list
const options = [
    {value: "ethyl alcohol", label: "ethyl alcohol"},
    {value: "isopropyl alcohol", label: "isopropyl alcohol"},
    {value: "water", label: "water"},
    {value: "dimethyl siloxane", label: "dimethyl siloxane"},
    {value: "copper gluconate", label: "copper gluconate"},
    {value: "snake oil", label: "snake oil"},
]

class ProductForm extends React.Component{

    emptyItem = {
        name: '',
        ingredients: []
    };

    
    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        //not needed
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    selectChange(value) {
        let item = {...this.state.item};
        item.ingredients = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        let ingredients = [];
        for(let i=0;i<item.ingredients.length; i++) {
            ingredients.push(item.ingredients[i].value);
        }
        item.ingredients = ingredients;
        if(item.name == '') {
            alert('Product must have a name');
        }
        else if(item.ingredients.length == 0) {
            alert('Product must have at least one ingredient');
        }
        else {
            await fetch('http://localhost:8080/products', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(item),
            });
            this.props.history.push('/products');
        }
    }

    render() {
        const {item} = this.state;
        const title = <h2>Add Product</h2>;
    
        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="ingredients">Ingredients</Label>
                        <Select 
                            options={options} 
                            isMulti
                            closeMenuOnSelect={false}
                            name={"ingredients"}
                            id={"ingredients"}
                            onSubmit
                            onChange={this.selectChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/products">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(ProductForm);