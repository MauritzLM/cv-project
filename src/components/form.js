import React, { Component } from "react";


class Form extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const { personalDetails, education, experience, handleChange, handleAddBtn, handleDeleteBtn } = this.props
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <PersonalDetails handleChange={handleChange} personalDetails={personalDetails} />

                    <EducationDetails handleChange={handleChange} education={education} handleDeleteBtn={handleDeleteBtn} />
                    <button className="add-btn" onClick={() => handleAddBtn('education')}>add education</button>

                    <ExperienceDetails handleChange={handleChange} experience={experience} handleDeleteBtn={handleDeleteBtn} />
                    <button className="add-btn" onClick={() => handleAddBtn('experience')}>add experience</button>
                    <button type="submit">Submit</button>
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
        const { personalDetails, handleChange } = this.props;
        return (
            <fieldset>
                <legend>Personal details</legend>
                <div><label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => { handleChange(e, 'personalDetails', 'name', 1) }} value={personalDetails[0].name}></input></div>


                <div><label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => { handleChange(e, 'personalDetails', 'email', 1) }} value={personalDetails[0].email}></input></div>


                <div><label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" onChange={(e) => { handleChange(e, 'personalDetails', 'phone', 1) }} value={personalDetails[0].phone}></input></div>

            </fieldset>
        )
    }
}

// export { PersonalDetails };

class EducationDetails extends Component {
    constructor(props) {
        super(props)
    }

    // render education section for each in state
    render() {
        const { education, handleDeleteBtn, handleChange } = this.props

        return (
            <>
                {education.map((item, index) => {
                    return < fieldset >
                        <legend>Education</legend>
                        <div><label htmlFor="school">School name</label>
                            <input type="text" name="school" key={item.id} onChange={(e) => { handleChange(e, 'education', 'schoolName', item.id) }} value={item.schoolName}></input></div>


                        <div><label htmlFor="areaofstudy">Area of study</label>
                            <input type="text" name="areaofstudy" key={item.id} onChange={(e) => { handleChange(e, 'education', 'areaOfStudy', item.id) }} value={item.areaOfStudy}></input></div>


                        <div><label htmlFor="graduationyear">Year of graduation</label>
                            <input type="date" name="graduationyear" key={item.id} onChange={(e) => { handleChange(e, 'education', 'graduationYear', item.id) }} value={item.graduationYear}></input></div>

                        <button type="button" className="delete-btn" onClick={(e) => handleDeleteBtn('education', item.id)} key={item.id}>Delete</button>
                    </fieldset >
                })}

            </>
        )
    }
}

// export {EducationDetails};

class ExperienceDetails extends Component {
    constructor(props) {
        super(props)
    }

    // render experience section for each in state
    render() {
        const { experience, handleDeleteBtn, handleChange } = this.props;
        return (
            <>
                {
                    experience.map(item => {
                        return <fieldset>
                            <legend>Practical experience</legend>
                            <div><label htmlFor="company">Company name</label>
                                <input type="text" name="company" key={item.id} onChange={(e) => { handleChange(e, 'experience', 'companyName', item.id) }} value={item.companyName}></input></div>


                            <div><label htmlFor="position">Position title</label>
                                <input type="text" name="position" key={item.id} onChange={(e) => { handleChange(e, 'experience', 'positionTitle', item.id) }} value={item.positionTitle}></input></div>


                            <div><label htmlFor="maintasks">Main tasks</label>
                                <input type="text" name="maintasks" key={item.id} onChange={(e) => { handleChange(e, 'experience', 'mainTasks', item.id) }} value={item.mainTasks}></input></div>


                            <div><label htmlFor="from">From</label>
                                <input type="date" name="from" key={item.id} onChange={(e) => { handleChange(e, 'experience', 'from', item.id) }} value={item.from}></input></div>


                            <div><label htmlFor="until">Until</label>
                                <input type="date" name="until" key={item.id} onChange={(e) => { handleChange(e, 'experience', 'until', item.id) }} value={item.until}></input></div>

                            <button type="button" className="delete-btn" onClick={() => handleDeleteBtn('experience', item.id)} key={item.id}>Delete</button>
                        </fieldset>
                    })
                }
            </>
        )
    }
}