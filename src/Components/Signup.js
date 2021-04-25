import React, { Component } from 'react';

import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Signup extends Component {


  constructor() {

    super();


    this.state = {

      Name: '',

      Region: '',

      Email: '',

      Password: '',

      ConfirmPassword: ''

    }


    this.Email = this.Email.bind(this);

    this.Password = this.Password.bind(this);

    this.EmployeeName = this.EmployeeName.bind(this);

    this.Password = this.Password.bind(this);

    this.Region = this.Region.bind(this);

    this.register = this.register.bind(this);

    this.ConfirmPassword = this.ConfirmPassword.bind(this);

  }




  Email(event) {

    this.setState({ Email: event.target.value })

  }


  ConfirmPassword(event) {

    this.setState({ ConfirmPassword: event.target.value })

  }


  Password(event) {

    this.setState({ Password: event.target.value })

  }

  Region(event) {

    this.setState({ Region: event.target.value })

  }

  EmployeeName(event) {

    this.setState({ Name: event.target.value })

  }


  register(event) {

  fetch('http://localhost:54472/Api/login/InsertEmployee', {

      method: 'post',

      headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

      },

      body: JSON.stringify({

        Name: this.state.Name,

        Password: this.state.Password,

        Email: this.state.Email,

        Region: this.state.Region,

        ConfirmPassword: this.state.ConfirmPassword

      })
    }).then((Response) => Response.json())

      .then((Result) => {

        if (Result.Status == 'Success')

                this.props.history.push("/Dashboard");

        else

          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')

      })

  }

  render() {

    return (

      <div className="app flex-row align-items-center">

        <Container>

          <Row className="justify-content-center">

            <Col md="9" lg="7" xl="6">

              <Card className="mx-4">

                <CardBody className="p-4">

                  <Form>

                    <div class="row" className="mb-2 pageheading">

                      <div class="col-sm-12 btn btn-primary">

                        Sign Up

                        </div>

                    </div>

                    <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.EmployeeName} placeholder="Enter Employee Name" />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.Email} placeholder="Enter Email" />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />

                    </InputGroup>

                    <InputGroup className="mb-4">

                      <Input type="text"  onChange={this.Region} placeholder="Enter Region" />

                    </InputGroup>

                    <InputGroup className="mb-4">

                      <Input type="text"  onChange={this.ConfirmPassword} placeholder="Enter Department" />

                    </InputGroup>

                    <Button  onClick={this.register}  color="success" block>Create Account</Button>

                  </Form>

                </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

      </div>

    );

  }

}

export default Signup;