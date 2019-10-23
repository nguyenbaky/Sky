import React, { Component } from 'react';

import './App.css';
import App from './App'
import API from '././pages/Database/APICnn';
const api = new API();



class Loading extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        data: []
    };
  }


  componentWillMount() {
    api.getData().then(response => {
      console.log('Data fetched', response)
      this.setState({
           
            data: response,
            isLoading: true
      })
    })
    
  }
  render() {
      if(this.state.isLoading)
      {
          return(
              <div>
                  <App data = {this.state.data}></App>
              </div>
          )
      }
      else
      {
          return(
            <div style = {{textAlign: "center", marginTop: "250px"}}>
                <img src={"https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif"} alt="loading..." style = {{width: "100px", height: "100px"}}/>
            </div>
          )
      }
  }
}

export default Loading;
