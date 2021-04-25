import React, { Component } from 'react';

import '../App.css';
import Login from './Login'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { useLocation } from 'react-router';

  class Dashboard extends Component{
    
    
    componentDidMount(){
        const { myKey } = this.props.match.params
        console.log(myKey )
    }

    render(){

        return (

            <div class="row" className="mb-2 pageheading">

                <div class="col-sm-12 btn btn-primary">
                        Hi {this.props.match.params.myKey}  
             </div>

            </div>

        );
    }



}


export default Dashboard;