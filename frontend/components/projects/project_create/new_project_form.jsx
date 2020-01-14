import React from "react";
import { withRouter } from "react-router-dom";
import { css } from '@emotion/core';
import FadeLoader from 'react-spinners/FadeLoader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown} from "@fortawesome/free-solid-svg-icons";

const override = css`
    display: inline-block;
    margin: 0 auto;
    color: #DCDEDD;
    size: 35px;
    
`;
class newProjectForm extends React.Component {

    constructor(props) {
        super(props);
        (this.state = {
            title: `My Great Project ${Math.floor(Math.random() * 10000 )}`,
            sub_title: 'My Great Project Subtitle',
            total_pledged: 0,
            goal_amount: 1,
            num_backers: 0,
            days_left: 30,
            loved: false,
            location: 'Worldwide',
            campaign: 'Campaign should go here... Please edit me!',
            about: 'This is a company. They have yet to fill out their bio!',
            category_id: 1,
            user_id: this.props.user[0].id,
            categorySelect: "choose-cat",
            infoSelect: "hidden",
            locationSelect: "hidden",
            fundingSelect: "hidden",
            rewardsSelect: "hidden",
            newProjId: (this.props.projects.length + 1),
            selectedOption: "30",
            loading: false,
            dropdown: "Select your category",
            dropdowntwo: "Select your country",
            catbox: "hidden",
            catboxtwo: "hidden",
            formColor: "",
            formColorTwo: ""
        }),
        this.updatedrop = this.updatedrop.bind(this);
        this.updatedroptwo = this.updatedroptwo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderNumCount = this.renderNumCount.bind(this);
        this.handleClickCat = this.handleClickCat.bind(this);
        this.handleClickInfo = this.handleClickInfo.bind(this);
        this.handleClickLoc = this.handleClickLoc.bind(this);
        this.selectCat = this.selectCat.bind(this);
        this.selectLoc = this.selectLoc.bind(this);
    

    }

    renderNumCount() {
        let count = "";
        if (this.state.categorySelect === "choose-cat") {
            count = "1 of 4";
        } else if (this.state.infoSelect === "choose-info") {
            count = "2 of 4";
        } else if (this.state.locationSelect === "choose-loc") {
            count = "3 of 4";
        } else if (this.state.fundingSelect === "choose-funding") {
            count = "4 of 4";
        } 
        return (
            <div className="page-count">
                {count}
            </div>
        )
    }
    
    // handling a generic update to a field
    update(field) {

        return e => this.setState({[field]: e.currentTarget.value});
    }

    updatedrop(cat, num) {
        this.setState({ category_id: num });
        this.setState({ dropdown: cat });
        this.setState({ formColor: "black"})
        this.setState({ catbox: "hidden" });
    }

    updatedroptwo(loc) {
        this.setState({ location: loc });
        this.setState({ dropdowntwo: loc });
        this.setState({ formColorTwo: "black" })
        this.setState({ catboxtwo: "hidden" });
    }

    selectCat() {
        if (this.state.catbox === "hidden") {
            this.setState({ catbox: "cat-box" });
        } else {
            this.setState({ catbox: "hidden" });
        }
        
    }

    selectLoc() {
        if (this.state.catboxtwo === "hidden") {
            this.setState({ catboxtwo: "cat-box" });
        } else {
            this.setState({ catboxtwo: "hidden" });
        }
    }

    updateNum(field) {
        return e => { this.setState({ [field]: Number(e.currentTarget.value) })};
    }

    // handling an update to a radio selector (set state of days_left and selectedOption)
    updateRadio(field) {
        return e => { this.setState({ [field]: Number(e.currentTarget.value) }), this.setState({ selectedOption: e.currentTarget.value })};
    }

    handleClickCat() {
      
        this.setState({categorySelect: "hidden"});
        this.setState({infoSelect: "choose-info"});
    }

    handleClickInfo() {

        this.setState({ infoSelect: "hidden" });
        this.setState({ locationSelect: "choose-loc" });
    }

    handleClickLoc() {
       
        this.setState({locationSelect: "hidden"});
        this.setState({fundingSelect: "choose-funding"});
    }

    // Nested Async calls to make sure that project and rewards are created in the correct order.
    // The next one will only fire after the previous has completed/returns a promise. 
    handleSubmit(e) {
        e.preventDefault();
        this.setState({loading: true});
        const newProject = Object.assign({}, this.state);
        const newReward0 = Object.assign({}, { amount: 10, desc: "This is the filler reward.", subdesc: "Nothing.", delivery: "2 Weeks", shipping: "Domestic", num_backers: 0, project_id: this.state.newProjId });
        const newReward1 = Object.assign({}, { amount: 10, desc: "This is the basic reward.", subdesc: "Most projects will have something worth contributing for here, but nothing major.", delivery: "2 Weeks", shipping: "Domestic", num_backers: 0, project_id: this.state.newProjId});
        const newReward2 = Object.assign({}, { amount: 50, desc: "This is a middle tier reward.", subdesc: "This is where things start getting interesting.", delivery: "2 Weeks", shipping: "Domestic", num_backers: 0, project_id: this.state.newProjId});
        const newReward3 = Object.assign({}, { amount: 500, desc: "This is the whole enchilada.", subdesc: "This is what you really want people to buy.", delivery: "2 Weeks", shipping: "Domestic", num_backers: 0, project_id: this.state.newProjId});
        // let rewardArr = [newReward0, newReward1, newReward2, newReward3];
        this.props.createProject(newProject).then(() => (
            this.props.createReward(newReward0).then( () => (
                this.props.createReward(newReward1).then(() => (
                    this.props.createReward(newReward2).then(() => (
                        this.props.createReward(newReward3).then(() => (
                            this.props.fetchProjects().then(() => (
                                this.props.history.push(`/projects/${this.state.newProjId}`)
                            )) 
                        ))
                    ))
                ))
            ))
        ));
    }


    render () {
        return (
            <div className="new-proj-section">
            {this.renderNumCount()}  
            <div className="new-proj-container">
                {/* Category Select */}
                    <div className='sweet-loading'>
                        <FadeLoader
                            css={override}
                            loading={this.state.loading}
                        />
                    </div> 
                <div className={this.state.categorySelect}>
                    <div className="cat-header"><h1>First, let's get you set up.</h1></div>
                    <div className="cat-sub-header">Pick a project category to connect with a specific community. You can always update this later.</div>
                   
                       <form className="dropform">
                            <div className={`session-type-input-proj-drop ${this.state.formColor}`} onClick={() => this.selectCat()}>{this.state.dropdown}
                                <FontAwesomeIcon className="caret-svg" icon={faCaretDown} alt="" />
                            </div>
                                <div className={this.state.catbox}> 
                                    <div onClick={() => this.updatedrop("Arts", 1)} className="cat-box-option">Arts</div>
                                    <div onClick={() => this.updatedrop("Comics & Illustration", 2)} className="cat-box-option">Comics & Illustration</div>
                                    <div onClick={() => this.updatedrop("Design & Tech", 3)}  className="cat-box-option">Design & Tech</div>
                                    <div onClick={() => this.updatedrop("Film", 4)}  className="cat-box-option">Film</div>
                                    <div onClick={() => this.updatedrop("Food & Craft", 5)}  className="cat-box-option">Food & Craft</div>
                                    <div onClick={() => this.updatedrop("Games", 6)} className="cat-box-option">Games</div>
                                    <div onClick={() => this.updatedrop("Music", 7)} className="cat-box-option">Music</div>
                                    <div onClick={() => this.updatedrop("Publishing", 8)} className="cat-box-option">Publishing</div>
                            </div>
                            
                    
            
                        </form>

                        <div className="btn-proj">
                            <input
                                className="session-type-button-proj"
                             
                                value="Next: Project Idea"
                                onClick={this.handleClickCat}
                            />
                        </div>
                    
                </div>

                {/* Project Info */}

                <div className={this.state.infoSelect}>
                    <div className="cat-header"><h1>Describe what you’ll be creating.</h1></div>
                    <div className="cat-sub-header">And don’t worry, you can edit this later, too.</div>
                    <div className="">
                        <form className="info-form">
                            <div className="box-header">Title</div>
                            <textarea className="session-type-input-info-short" onChange={this.update("title")} type="text" placeholder="The Community Shoe Kit">
                    
                            </textarea>
                            <div className="box-header">Subtitle</div>
                            <textarea className="session-type-input-info-short" onChange={this.update("sub_title")} type="text" placeholder="Explore the shoe world around you with an affordable show kit you construct yourself.">

                            </textarea>
                            <div className="box-header">Description</div>
                            <textarea className="session-type-input-info" onChange={this.update("campaign")} type="text" placeholder="From Nike to Adidas, a strange and fantastic world surrounds us. Working with people around the world, The Shoe Company has developed an affordable way to peek into this hidden world.">

                                </textarea>

                        <div className="btn-proj">
                            <input
                                className="session-type-button-proj"
                               
                                value="Next: Location"
                                onClick={this.handleClickInfo}
                            />
                        </div>
                        </form>
                    </div>
                </div>

                {/* Location Info */}

                <div className={this.state.locationSelect}>
                    <div>
                            <div className="cat-header"><h1>Just a few more things.</h1></div>
                            <div className="cat-sub-header">You're almost done.</div>
                            <div className="page-3-info">
                                <div className="box-header">Company bio</div>
                                <div className="info-sub-header">This will appear on your project page.</div>
                            </div>
                            <form className="info-form">
                            <textarea className="session-type-input-info" onChange={this.update("about")} type="text" placeholder="Born on Kickstarter in 2013, The Shoe Company is a San Francisco-based startup in love with shoes and obsessed with product design.">
                            </textarea>

                        </form>
                    </div>
                    <div className="page-3-info">
                            <div className="box-header">Project location</div>
                            <div className="info-sub-header">Enter the location that best describes where your project is based.</div>
                    </div>
                       
                        <form className="dropform">
                            <div className={`session-type-input-proj-drop ${this.state.formColorTwo}`} onClick={() => this.selectLoc()}>{this.state.dropdowntwo}
                                <FontAwesomeIcon className="caret-svg" icon={faCaretDown} alt="" />
                            </div>
                            <div className={this.state.catboxtwo}>
                                <div onClick={() => this.updatedroptwo("Australia")} className="cat-box-option">Australia</div>
                                <div onClick={() => this.updatedroptwo("Austria")} className="cat-box-option">Austria</div>
                                <div onClick={() => this.updatedroptwo("Belgium")} className="cat-box-option">Belgium</div>
                                <div onClick={() => this.updatedroptwo("Canada")} className="cat-box-option">Canada</div>
                                <div onClick={() => this.updatedroptwo("Denmark")} className="cat-box-option">Denmark</div>
                                <div onClick={() => this.updatedroptwo("France")} className="cat-box-option">France</div>
                                <div onClick={() => this.updatedroptwo("Germany")} className="cat-box-option">Germany</div>
                                <div onClick={() => this.updatedroptwo("Ireland")} className="cat-box-option">Ireland</div>
                                <div onClick={() => this.updatedroptwo("Italy")} className="cat-box-option">Italy</div>
                                <div onClick={() => this.updatedroptwo("Japan")} className="cat-box-option">Japan</div>
                                <div onClick={() => this.updatedroptwo("Luxembourg")} className="cat-box-option">Luxembourg</div>
                                <div onClick={() => this.updatedroptwo("Mexico")} className="cat-box-option">Mexico</div>
                                <div onClick={() => this.updatedroptwo("New Zealand")} className="cat-box-option">New Zealand</div>
                                <div onClick={() => this.updatedroptwo("Norway")} className="cat-box-option">Norway</div>
                                <div onClick={() => this.updatedroptwo("Singapore")} className="cat-box-option">Singapore</div>
                                <div onClick={() => this.updatedroptwo("Spain")} className="cat-box-option">Spain</div>
                                <div onClick={() => this.updatedroptwo("Sweden")} className="cat-box-option">Sweden</div>
                                <div onClick={() => this.updatedroptwo("Switzerland")} className="cat-box-option">Switzerland</div>
                                <div onClick={() => this.updatedroptwo("the Netherlands")} className="cat-box-option">the Netherlands</div>
                                <div onClick={() => this.updatedroptwo("the United Kingdom")} className="cat-box-option">the United Kingdom</div>
                                <div onClick={() => this.updatedroptwo("the United States")} className="cat-box-option">the United States</div>
                            </div>

                            <div className="btn-proj">
                                <input
                                    className="session-type-button-proj"
                                  
                                    value="Next: Funding"
                                    onClick={this.handleClickLoc}
                                />
                            </div>

                        </form>
                    
                        
                    
                </div>

                {/* Funding Info*/}
                <div className={this.state.fundingSelect}>

                        <div className="cat-header"><h1>Finally, set a funding goal & campaign duration.</h1></div>
                        <div className="cat-sub-header">Set an achievable goal that covers what you need to complete your project within the chosen amount of time. Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.</div>
                        <form className="info-form-final" onSubmit={this.handleSubmit}>
                        <div className="box-header">Goal amount</div>

                        <div className="funding-box">
                            <div className="dollar-sign">
                                $
                            </div>
                                <input className="session-type-input-funding" onChange={this.updateNum("goal_amount")} type="number" placeholder="1" min="1" max="100000000">
                                </input>
                        </div>
                        
                        <div className="box-header">
                            Campaign duration
                        </div>

                        <label className="radio-box">
                            <input className="radio-session-type-input" onChange={this.updateRadio("days_left")} name="group1" type="radio" value="30" checked={this.state.selectedOption === '30'}/>
                            30 Days
                        </label>

                        <label className="radio-box">
                            <input className="radio-session-type-input" onChange={this.updateRadio("days_left")} name="group1" type="radio" value="60" checked={this.state.selectedOption === '60'}/>
                            60 Days
                        </label>

                        <label className="radio-box">
                            <input className="radio-session-type-input" onChange={this.updateRadio("days_left")} name="group1" type="radio" value="90" checked={this.state.selectedOption === '90'}/>
                            90 Days
                        </label>    


                        <div className="btn-proj">
                            <input
                            className="session-type-button-proj"
                            type="submit"
                            value="Next: Create Your Project"
                        />
                        </div>
                    </form>
                </div>

            </div>
        </div>
        );

    }

}

export default withRouter(newProjectForm);