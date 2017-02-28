import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Form, Field } from "simple-react-form";

class Forms extends Component {

   constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(event) {
    this.props.onFormChange(this.state);
    event.preventDefault();
  }

  render() {
     return (
      <div>
        <h1>Review</h1>
        <Form state={this.state} ref='form' onChange={changes => this.setState(changes)} onSubmit={this.handleSubmit}>
          <Field fieldName='name' label='Name' type={Text}/>
          <Field fieldName='Email' label='Email' type={Text}/>
          <Field fieldName='Rating' label='Rating' type={Number}/>
          <Field fieldName='Comment' label='Comment'/>
        </Form>
        <Button onClick={() => this.refs.form.submit()} />
      </div>
    );
  }
}

export default Forms;

