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
            selectedOption: "30",
            newProjId: (this.props.projects.length + 1),
            loading: false,
            dropdown: "Select your category",
            catbox: "hidden"
        }),

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderNumCount = this.renderNumCount.bind(this);
        this.handleClickCat = this.handleClickCat.bind(this);
        this.handleClickInfo = this.handleClickInfo.bind(this);
        this.handleClickLoc = this.handleClickLoc.bind(this);
    }

    componentDidMount() {
        this.props.fetchProjects().then(() => this.setState({ newProjId: this.props.projects.length + 1}));
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

    updatedrop(field, cat) {
        
        return e => {this.setState({ [field]: e.currentTarget.value }), this.setState({ dropdown: [cat] }), this.setState({catbox: "hidden"})};

    }

    selectCat() {
        this.setState({ catbox: "cat-box" });
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
                            this.props.history.push(`/projects/${this.state.newProjId}`)
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
                            <div className="session-type-input-proj-drop" onClick={() => this.selectCat()}>{this.state.dropdown}
                                <FontAwesomeIcon className="caret-svg" icon={faCaretDown} alt="" />
                            </div>
                                <div className={this.state.catbox}> 
                                    <div onClick={this.updatedrop("category_id", "Arts")} value="1" className="cat-box-option">Arts</div>
                                    <div onClick={this.updatedrop("category_id", "Comics & Illustration")} value="2" className="cat-box-option">Comics & Illustration</div>
                                    <div onClick={this.updatedrop("category_id", "Design & Tech")} value="3" className="cat-box-option">Design & Tech</div>
                                    <div onClick={this.updatedrop("category_id", "Film")} value="4" className="cat-box-option">Film</div>
                                    <div onClick={this.updatedrop("category_id", "Food & Craft")} value="5" className="cat-box-option">Food & Craft</div>
                                    <div onClick={this.updatedrop("category_id", "Games")} value="6" className="cat-box-option">Games</div>
                                    <div onClick={this.updatedrop("category_id", "Music")} value="7" className="cat-box-option">Music</div>
                                    <div onClick={this.updatedrop("category_id", "Publishing")} value="8" className="cat-box-option">Publishing</div>
                            </div>
                            
                    
            
                        </form>

                        <div className="btn-proj">
                            <input
                                className="session-type-button-proj"
                                type="submit"
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
                                type="submit"
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
                            <select defaultValue="0" onChange={this.update("location")} className="session-type-input-proj">
                                <option value="0" disabled hidden>Select your country</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Canada">Canada</option>
                                <option value="Denmark">Denmark</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Italy">Italy</option>
                                <option value="Japan">Japan</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Mexico">Mexico</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Norway">Norway</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Spain">Spain</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="the Netherlands">the Netherlands</option>
                                <option value="the United Kingdom">the United Kingdom</option>
                                <option value="the United States">the United States</option>
                            </select>
                                <div className="btn-proj">
                                    <input
                                        className="session-type-button-proj"
                                type="submit"
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