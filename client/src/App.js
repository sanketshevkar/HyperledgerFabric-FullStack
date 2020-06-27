import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tab from './components/Table';
import Result from './components/Result';
import AddCar from './components/AddCar';
import ChangeOwner from './components/ChangeOwner';
import Navi from './components/Navi';
import './App.css';


class App extends Component {

  state={
    cars:[{"Key":"","Record":{"make":"","model":"","colour":"","owner":""}}]
  }



  componentDidMount(){
    axios.get('http://127.0.0.1:8080/api/queryallcars') 
    .then(res => this.setState({cars: JSON.parse(res.data.response)}))
  }

  getAll = () =>{
    axios.get('http://127.0.0.1:8080/api/queryallcars') 
    .then(res => this.setState({cars: JSON.parse(res.data.response)}))
  }

  




  render(){
    return (
      <div className='container'>
        <Navi />
      <Router>
        <Route exact path='/' render={props=>(
        <React.Fragment>
          <div className='table'>
          <Tab  cars={this.state.cars}  />
          
            {console.log(this.state.cars)}
          </div>
        </React.Fragment>
        )}/>

<Route exact path='/search' render={props=>(
        <React.Fragment>
          
         <Result/>
          <div>
            {console.log(this.state.cars)}
          </div>
        </React.Fragment>
        )}/>

<Route exact path='/addCar' render={props=>(
        <React.Fragment>
          
         <AddCar />
          <div>
            {console.log(this.state.cars)}
          </div>
        </React.Fragment>
        )}/>

<Route exact path='/changeOwner' render={props=>(
        <React.Fragment>
          
         <ChangeOwner />
          <div>
            {console.log(this.state.cars)}
          </div>
        </React.Fragment>
        )}/>

      </Router>
      </div>
    );
  }
  
}

export default App;
