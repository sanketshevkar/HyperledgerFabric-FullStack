import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap'

export class Tab extends Component {
    render() {
        return(
            <Table striped bordered hover variant="dark">
        <thead>
        <tr>
      <th className="obj">Make</th>
      <th className="com">Model</th>
      <th className="com">Colour</th>
      <th className="date">Owner</th>
      </tr>
      </thead>
      <tbody>
      {this.props.cars.map((res) => (
          <tr key={res.Key}>
                <td className="obj">{res.Record.make}</td>
                <td className="com">{res.Record.model}</td>
                <td className="com">{res.Record.colour}</td>
                <td className="date">{res.Record.owner}</td>

                </tr>
        ))}
      
    
    
      </tbody>
      </Table>
                ) 
          
          
}
}

Table.propTypes = {
    cars: PropTypes.array
}

export default Tab