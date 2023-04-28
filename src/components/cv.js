import React, { Component } from "react";

class DisplayCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, personalDetails, education, experience } = this.props
        return (
            <div className="cv-wrapper">
                <h2>{title}</h2>
                <PersonalSection personalDetails={personalDetails} />
                <EducationSection education={education} />
                <ExperienceSection experience={experience} />
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
        const { personalDetails } = this.props;
        return (
            <section>
                <h3>Personal Details</h3>
                <p>name: {personalDetails[0].name}</p>
                <p>email: {personalDetails[0].email}</p>
                <p>phone: {personalDetails[0].phone}</p>
            </section>
        )
    }
}

class EducationSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { education } = this.props;
        return (
            <section>
                <h3>Education Details</h3>
                {education.map(item => {
                    return <div key={item.id}> <p>School: {item.schoolName}</p>
                        <p>Area of study: {item.areaOfStudy}</p>
                        <p>Year of graduation: {item.graduationYear}</p>
                        <hr></hr>
                    </div>
                })}
            </section>
        )
    }
}

class ExperienceSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { experience } = this.props;
        return (

            <section>
                <h3>Experience Details</h3>
                {experience.map(item => {
                    return <div key={item.id}>
                        <p>Company name: {item.companyName}</p>
                        <p>Position title: {item.positionTitle}</p>
                        <p>Main tasks: {item.mainTasks}</p>
                        <p>Date from: {item.from}</p>
                        <p>Date until: {item.until}</p>
                        <hr></hr>
                    </div>
                })}
            </section>
        )
    }
}