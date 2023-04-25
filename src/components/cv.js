import React, { Component } from "react";

class DisplayCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, personalDetails, educationDetails, experienceDetails } = this.props
        return (
            <div className="cv-wrapper">
                <h2>{title}</h2>
                <PersonalSection personalDetails={personalDetails} />
                <EducationSection educationDetails={educationDetails} />
                <ExperienceSection experienceDetails={experienceDetails} />
            </div>
        )
    }
}

export default DisplayCV

class PersonalSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <h3>Personal Details</h3>
                <p>name: {this.props.personalDetails.name}</p>
                <p>email: {this.props.personalDetails.email}</p>
                <p>phone: {this.props.personalDetails.phone}</p>
            </section>
        )
    }
}

class EducationSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <h3>Education Details</h3>
                <p>School: {this.props.educationDetails.schoolName}</p>
                <p>Area of study: {this.props.educationDetails.areaOfStudy}</p>
                <p>Year of graduation: {this.props.educationDetails.graduationYear}</p>
            </section>
        )
    }
}

class ExperienceSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <h3>Experience Details</h3>
                <p>Company name: {this.props.experienceDetails.companyName}</p>
                <p>Position title: {this.props.experienceDetails.positionTitle}</p>
                <p>Main tasks: {this.props.experienceDetails.mainTasks}</p>
                <p>Date from: {this.props.experienceDetails.from}</p>
                <p>Date until: {this.props.experienceDetails.until}</p>

            </section>
        )
    }
}