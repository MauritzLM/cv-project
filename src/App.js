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
        graduationYear: ''
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

  handleChange = (event, section, field) => {
    this.setState({
      ...this.state,
      [section]: {
        ...this.state[section],
        [field]: event.target.value
      }
    })
  };

  onClickBtn() {
    console.log("clicked btn!")
  }

  render() {
    const { personalDetails, educationDetails, experienceDetails } = this.state
    return (
      <>
        <header><h1>CV application</h1></header>
        <main>
          <Form personalDetails={personalDetails} educationDetails={educationDetails} experienceDetails={experienceDetails} handleChange={this.handleChange} />
          <DisplayCV title="CV display" personalDetails={personalDetails} educationDetails={educationDetails} experienceDetails={experienceDetails} />
        </main>
      </>
    )
  }
}

export default App;
