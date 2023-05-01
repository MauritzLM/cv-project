import React, { Component } from "react";

class DisplayCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, personalDetails, education, experience } = this.props
        return (
            <div className="cv-wrapper">
                <h2>{personalDetails[0].name}</h2>
                <hr></hr>
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
                <p><span className="detail-field">name:</span> {personalDetails[0].name}</p>
                <p><span className="detail-field">email:</span> {personalDetails[0].email}</p>
                <p><span className="detail-field">phone:</span> {personalDetails[0].phone}</p>
                <hr></hr>
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
                    return <div key={item.id}>
                        <p><span className="detail-field">School:</span> {item.schoolName}</p>
                        <p><span className="detail-field">Area of study:</span> {item.areaOfStudy}</p>
                        <p><span className="detail-field">Year of graduation:</span> {item.graduationYear}</p>
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
                        <p><span className="detail-field">Company name: </span> {item.companyName}</p>
                        <p><span className="detail-field">Position title:</span> {item.positionTitle}</p>
                        <p><span className="detail-field">Main tasks:</span> {item.mainTasks}</p>
                        <p><span className="detail-field">Date from:</span> {item.from}</p>
                        <p><span className="detail-field">Date until:</span> {item.until}</p>
                        <hr></hr>
                    </div>
                })}
            </section>
        )
    }
}