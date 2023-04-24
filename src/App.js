import React, { Component } from "react";
import Form from "./components/form";
import DisplayCV from "./components/cv";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    // applicant details
    this.state = {
      personalDetails: {
        name: '',
        email: '',
        phone: ''
      },
      educationDetails: {
        schoolName: '',
        areaOfStudy: '',
        date: ''
      },
      experienceDetails: {
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        from: '',
        until: ''
      }
    }

    // bind this when passing a method
    this.onClickBtn = this.onClickBtn.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, section, field) => {
    this.setState({
      ...this.state,
      [section]: {
        [field]: e.target.value
      }
    });
  };

  onClickBtn() {
    console.log("clicked btn!")
  }

  render() {
    const { personalDetails } = this.state
    return (
      <>
        <header><h1>CV application</h1></header>
        <main>
          <Form personalDetails={personalDetails} handleChange={this.handleChange} />
          <DisplayCV title="CV display" personalDetails={personalDetails} />
        </main>
      </>
    )
  }
}

export default App;
