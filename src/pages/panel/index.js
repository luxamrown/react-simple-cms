import React, { Component } from 'react'
import Header from '../../components/header'
import {
  Navigate
} from "react-router-dom";
import Navigator from '../../components/navigator';

export default class Panel extends Component {  
  render(){
    return (
      <>
        {
            !window.sessionStorage.getItem("isValid") && (
                <Navigate to="/login" replace={true}/>
            )
        }
        <div>
          <Header/>
          <Navigator/>
        </div>
      </>
    )
  }
}
