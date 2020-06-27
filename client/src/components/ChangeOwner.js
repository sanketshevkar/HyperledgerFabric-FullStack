import React, { Component } from 'react';
import axios from 'axios';
import { Form,Button } from 'react-bootstrap';

export class ChangeOwner extends Component {
    state={
        id:'',
        owner:''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        this.addCar(this.state);
        this.setState({ id: '',owner:''});
    }

    addCar = (state) =>{
        //console.log(id);
        axios.put(`http://127.0.0.1:8080/api/changeowner/${state.id}`,{
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
<Form.Label>Owner</Form.Label>
<Form.Control type='text' name='owner' placeholder='Owner' value={this.state.owner} onChange={this.onChange} />
</Form.Group>



<Button variant="primary" type="submit" onClick={this.onSubmit}>
Change Owner
</Button>
</Form>

        </div>
        </React.Fragment>
        
    );
  }
}


export default ChangeOwner;