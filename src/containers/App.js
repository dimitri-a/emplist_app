import React, { Component } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import PropTypes from 'prop-types';
import { itemsFetchData } from '../actions/items';
import { connect } from 'react-redux';
import '../App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchData('./sample-data.json');
  }

  render() {
    return (
      <div className='container'>
        <Header companyInfo={this.props.companyInfo}  />
        <List employees={this.props.employees} />
      </div>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    employees: state.items.employees,
    companyInfo:state.items.companyInfo,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);