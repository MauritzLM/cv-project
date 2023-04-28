import React, { Component } from "react";


class Form extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { personalDetails, education, experience, handleChange, handleAddBtn, handleDeleteBtn, handleSubmit, handleEdit, getFormStatus } = this.props
        if (getFormStatus()) {
            return (
                <>
                    <div className="form-wrapper">
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <PersonalDetails handleChange={handleChange} personalDetails={personalDetails} />

                            <EducationDetails handleChange={handleChange} education={education} handleDeleteBtn={handleDeleteBtn} />
                            <button className="add-btn" onClick={(event) => handleAddBtn('education', event)}>add education</button>

                            <ExperienceDetails handleChange={handleChange} experience={experience} handleDeleteBtn={handleDeleteBtn} />
                            <button className="add-btn" onClick={(event) => handleAddBtn('experience', event)}>add experience</button>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </>
            )
        } else {
            return (
                <button className="editBtn" onClick={handleEdit}>Edit</button>
            )
        }

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
                    return < fieldset key={item.id} >
                        <legend>Education</legend>
                        <div><label htmlFor="school">School name</label>
                            <input type="text" name="school" onChange={(e) => { handleChange(e, 'education', 'schoolName', item.id) }} value={item.schoolName}></input></div>


                        <div><label htmlFor="areaofstudy">Area of study</label>
                            <input type="text" name="areaofstudy" onChange={(e) => { handleChange(e, 'education', 'areaOfStudy', item.id) }} value={item.areaOfStudy}></input></div>


                        <div><label htmlFor="graduationyear">Year of graduation</label>
                            <input type="date" name="graduationyear" onChange={(e) => { handleChange(e, 'education', 'graduationYear', item.id) }} value={item.graduationYear}></input></div>

                        <button type="button" className="delete-btn" onClick={(event) => handleDeleteBtn('education', item.id, event)} >Remove</button>
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
                    experience.map((item) => {
                        return <fieldset key={item.id}>
                            <legend>Practical experience</legend>
                            <div><label htmlFor="company">Company name</label>
                                <input type="text" name="company" onChange={(e) => { handleChange(e, 'experience', 'companyName', item.id) }} value={item.companyName}></input></div>


                            <div><label htmlFor="position">Position title</label>
                                <input type="text" name="position" onChange={(e) => { handleChange(e, 'experience', 'positionTitle', item.id) }} value={item.positionTitle}></input></div>


                            <div><label htmlFor="maintasks">Main tasks</label>
                                <input type="text" name="maintasks" onChange={(e) => { handleChange(e, 'experience', 'mainTasks', item.id) }} value={item.mainTasks}></input></div>


                            <div><label htmlFor="from">From</label>
                                <input type="date" name="from" onChange={(e) => { handleChange(e, 'experience', 'from', item.id) }} value={item.from}></input></div>


                            <div><label htmlFor="until">Until</label>
                                <input type="date" name="until" onChange={(e) => { handleChange(e, 'experience', 'until', item.id) }} value={item.until}></input></div>

                            <button type="button" className="delete-btn" onClick={(event) => handleDeleteBtn('experience', item.id, event)}>Remove</button>
                        </fieldset>
                    })
                }
            </>
        )
    }
}