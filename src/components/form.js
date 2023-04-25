import React, { Component } from "react";


class Form extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const { personalDetails, educationDetails, experienceDetails, handleChange } = this.props
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <PersonalDetails handleChange={handleChange} personalDetails={personalDetails} />
                    <EducationDetails handleChange={handleChange} educationDetails={educationDetails} />
                    <ExperienceDetails handleChange={handleChange} experienceDetails={experienceDetails} />
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;

class PersonalDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <fieldset>
                <legend>Personal details</legend>
                <div><label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => { this.props.handleChange(e, 'personalDetails', 'name') }} value={this.props.personalDetails.name}></input></div>


                <div><label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => { this.props.handleChange(e, 'personalDetails', 'email') }} value={this.props.personalDetails.email}></input></div>


                <div><label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" onChange={(e) => { this.props.handleChange(e, 'personalDetails', 'phone') }} value={this.props.personalDetails.phone}></input></div>

            </fieldset>
        )
    }
}

// export { PersonalDetails };

class EducationDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <fieldset>
                <legend>Education</legend>
                <div><label htmlFor="school">School name</label>
                    <input type="text" name="school" id="school" onChange={(e) => { this.props.handleChange(e, 'educationDetails', 'schoolName') }} value={this.props.educationDetails.schoolName}></input></div>


                <div><label htmlFor="areaofstudy">Area of study</label>
                    <input type="text" name="areaofstudy" id="areaofstudy" onChange={(e) => { this.props.handleChange(e, 'educationDetails', 'areaOfStudy') }} value={this.props.educationDetails.areaOfStudy}></input></div>


                <div><label htmlFor="graduationyear">Year of graduation</label>
                    <input type="date" name="graduationyear" id="graduationyear" onChange={(e) => { this.props.handleChange(e, 'educationDetails', 'graduationYear') }} value={this.props.educationDetails.graduationYear}></input></div>

            </fieldset>
        )
    }
}

// export {EducationDetails};

class ExperienceDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <fieldset>
                <legend>Practical experience</legend>
                <div><label htmlFor="company">Company name</label>
                    <input type="text" name="company" id="company" onChange={(e) => { this.props.handleChange(e, 'experienceDetails', 'companyName') }} value={this.props.experienceDetails.companyName}></input></div>


                <div><label htmlFor="position">Position title</label>
                    <input type="text" name="position" id="position" onChange={(e) => { this.props.handleChange(e, 'experienceDetails', 'positionTitle') }} value={this.props.experienceDetails.positionTitle}></input></div>


                <div><label htmlFor="maintasks">Main tasks</label>
                    <input type="text" name="maintasks" id="maintasks" onChange={(e) => { this.props.handleChange(e, 'experienceDetails', 'mainTasks') }} value={this.props.experienceDetails.mainTasks}></input></div>


                <div><label htmlFor="from">From</label>
                    <input type="date" name="from" id="from" onChange={(e) => { this.props.handleChange(e, 'experienceDetails', 'from') }} value={this.props.experienceDetails.from}></input></div>


                <div><label htmlFor="until">Until</label>
                    <input type="date" name="until" id="until" onChange={(e) => { this.props.handleChange(e, 'experienceDetails', 'until') }} value={this.props.experienceDetails.until}></input></div>

            </fieldset>
        )
    }
}