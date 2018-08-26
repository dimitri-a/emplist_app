import React, { Component } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import PropTypes from 'prop-types';

import '../App.css';
import Axios from 'axios';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state ={companyInfo:{},employees:[]}

  }

  componentDidMount() {
   Axios.get('./sample-data.json').then(
     (data) => {
       this.setState({companyInfo:data.data.companyInfo});
       this.setState({employees:data.data.employees});
     }
   )
  }

  render() {
    return (
      <div className='container'>
        <Header companyInfo={this.state.companyInfo}  />
        <List employees={this.state.employees} />
      </div>
    );
  }
}

// App.propTypes = {
//   fetchData: PropTypes.func.isRequired,
//   items: PropTypes.array.isRequired,
//   hasError: PropTypes.bool.isRequired,
//   isLoading: PropTypes.bool.isRequired
// };


export default App