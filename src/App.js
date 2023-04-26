import React, { Component } from "react";
import Form from "./components/form";
import DisplayCV from "./components/cv";
import './App.css';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props)
    // applicant details
    this.state = {
      personalDetails: [{
        id: 1,
        name: '',
        email: '',
        phone: ''
      }],
      education: [{
        id: uuidv4(),
        schoolName: '',
        areaOfStudy: '',
        graduationYear: ''
      }],
      experience: [{
        id: uuidv4(),
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        from: '',
        until: ''
      }]
    }

    // bind this when passing a method
    this.handleChange = this.handleChange.bind(this);

    this.handleAddBtn = this.handleAddBtn.bind(this)

    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
  }

  // update state on change
  handleChange = (event, section, field, id) => {
    this.setState({
      ...this.state,
      [section]:
        [...this.state[section]].map(item => {
          if (item.id === id) {
            // Create a *new* object with changes
            return { ...item, [field]: event.target.value };
          } else {
            // No changes
            return item;
          }
        })
    })
  };

  // add education / experience section to state
  handleAddBtn = (section) => {
    this.setState({
      ...this.state,
      // add new section to array
      [section]: [...this.state[section], this.addSection(section)]
    })
  }

  // delete education or experience section
  handleDeleteBtn = (section, id) => {
    this.setState({
      ...this.state,
      [section]: [...this.state[section]].filter(item => {
        return item.id !== id;
      })
    })
  }

  // create new education or experience section
  addSection = (sectionName) => {
    if (sectionName === 'education') {
      return {
        id: uuidv4(),
        schoolName: '',
        areaOfStudy: '',
        graduationYear: ''
      }
    }

    else {
      return {
        id: uuidv4(),
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        from: '',
        until: ''
      }

    }
  }

  render() {
    const { personalDetails, education, experience } = this.state
    return (
      <>
        <header><h1>CV application</h1></header>
        <main>
          <Form personalDetails={personalDetails} education={education} experience={experience} handleChange={this.handleChange} handleAddBtn={this.handleAddBtn} handleDeleteBtn={this.handleDeleteBtn} />
          <DisplayCV title="CV display" personalDetails={personalDetails} education={education} experience={experience} />
        </main>
      </>
    )
  }
}

export default App;
