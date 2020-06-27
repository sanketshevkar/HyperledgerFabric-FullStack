import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import '../App.css'
import {Table} from 'react-bootstrap'

export class Result extends Component {
    state={
        cars:{make:'',model:'',colour:'',owner:''}
    }

    search = (id) =>{
        console.log(id);
        axios.get(`http://127.0.0.1:8080/api/query/${id}`)
        .then(res=> this.setState({cars: JSON.parse(res.data.response)}));
      }

  render() {
    return (
        <React.Fragment>
            <div className='search'>
        <SearchBar search={this.search}/>
        </div>
     
        <div className="container row">
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Colour</th>
      <th>Owner</th>
      </tr>
      </thead>
        <tbody>
        <tr>
      <td>{this.state.cars.make}</td>
      <td>{this.state.cars.model}</td>
      <td>{this.state.cars.colour}</td>
      <td>{this.state.cars.owner}</td>
      </tr>
      </tbody>
      </Table>
</div>
        </React.Fragment>
        
    );
  }
}


export default Result;