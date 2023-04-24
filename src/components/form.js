import React, { Component } from "react";


class Form extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const { personalDetails, handleChange } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <PersonalDetails handleChange={handleChange} personalDetails={personalDetails} />
                    <EducationDetails />
                    <ExperienceDetails />
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
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={(e) => { this.props.handleChange(e, 'personalDetails', 'name') }} value={this.props.personalDetails.name}></input>
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
            </fieldset>
        )
    }
}