import React, { Component } from "react";

class DisplayCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, personalDetails } = this.props
        return (
            <div>
                <h2>{title}</h2>
                <PersonalSection personalDetails={personalDetails} />
                <EducationSection />
                <ExperienceSection />
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
            </section>
        )
    }
}