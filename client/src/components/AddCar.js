import React, { Component } from 'react';
import axios from 'axios';
import { Form,Button } from 'react-bootstrap';

export class AddCar extends Component {
    state={
        id:'',
        make:'',
        model:'',
        colour:'',
        owner:''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        this.addCar(this.state);
        this.setState({ id: '', make: '', model:'',colour:'',owner:''});
    }

    addCar = (state) =>{
        //console.log(id);
        axios.post(`http://127.0.0.1:8080/api/addcar`,{
            'carid':state.id,
            'make':state.make,
            'model':state.model,
            'colour':state.colour,
            'owner':state.owner
        })
      }

  render() {
    return (
        <React.Fragment>
            <div className='search'>

    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>CarID</Form.Label>
    <Form.Control type='text' name='id' placeholder='Add Car ID' value={this.state.id} onChange={this.onChange} />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Make</Form.Label>
    <Form.Control type='text' name='make' placeholder='Make' value={this.state.make} onChange={this.onChange} />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Model</Form.Label>
    <Form.Control type='text' name='model' placeholder='Model' value={this.state.model} onChange={this.onChange} />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Colour</Form.Label>
    <Form.Control type='text' name='colour' placeholder='Colour' value={this.state.colour} onChange={this.onChange} />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Owner</Form.Label>
    <Form.Control type='text' name='owner' placeholder='Owner' value={this.state.owner} onChange={this.onChange} />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={this.onSubmit}>
    Add Car
  </Button>
</Form>

            </div>
        </React.Fragment>
        
    );
  }
}


export default AddCar;