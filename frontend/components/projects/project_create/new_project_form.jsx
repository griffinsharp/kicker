import React from "react";

class newProjectForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            sub_title: '',
            total_pledged: 0,
            goal_amount: 1,
            num_backers: 0,
            days_left: 30,
            loved: false,
            location: '',
            campaign: '',
            about: '',
            category_id: 1,
            user_id: this.props.user[0].id,
            categorySelect: "choose-cat",
            infoSelect: "hidden",
            locationSelect: "hidden",
            fundingSelect: "hidden",
            rewardsSelect: "hidden",
            selectedOption: "30",
            newProjId: 0,
        }

        this.handleClickCat = this.handleClickCat.bind(this);
        this.handleClickInfo = this.handleClickInfo.bind(this);
        this.handleClickLoc = this.handleClickLoc.bind(this);
        this.handleClickFunding = this.handleClickFunding.bind(this);
    }
    
    // handling a generic update to a field
    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
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

    handleClickFunding(e) {
        e.preventDefault();
        const newProject = Object.assign({}, this.state);
        this.props.createProject(newProject).then( () => this.props.fetchProjects()).then( () => this.setState({ newProjId: this.props.projects[projects.length - 1].id }));
        this.setState({ fundingSelect: "hidden" });
        this.setState({ rewardsSelect: "choose-rewards" });
    }

    render () {
        console.log(this.state);
        return (
            <div className="new-proj-container">

                {/* Category Select */}

                <div className={this.state.categorySelect}>
                    <div><h1>First, let's get you set up.</h1></div>
                    <div><p>Pick a project category to connect with a specific community. You can always update this later.</p></div>
                   <div>
                       <form>
                            <select onChange={this.update("category_id")} >
                                <option value="" selected disabled hidden>Select your category</option>
                                <option value="1" >Arts</option>
                                <option value="2" >Comics & Illustration</option>
                                <option value="3">Design & Tech</option>
                                <option value="4">Film</option>
                                <option value="5">Food & Craft</option>
                                <option value="6">Games</option>
                                <option value="7">Music</option>
                                <option value="8">Publishing</option>
                            </select>
                            <input
                                className="session-type-button"
                                type="submit"
                                value="Next: Project Idea"
                                onClick={this.handleClickCat}
                            />
                        </form>
                    </div> 
                </div>

                {/* Project Info */}

                <div className={this.state.infoSelect}>
                    <div><h1>Describe what you’ll be creating.</h1></div>
                    <div><p>And don’t worry, you can edit this later, too.</p></div>
                    <div>
                        <form>

                            <input className="session-type-input" onChange={this.update("title")} type="text" placeholder="The Community Shoe Kit">

                            </input>

                            <input className="session-type-input" onChange={this.update("sub_title")} type="text" placeholder="Explore the shoe world around you with an affordable show kit you construct yourself.">

                            </input>

                            <input className="session-type-input" onChange={this.update("campaign")} type="text" placeholder="From Nike to Adidas, a strange and fantastic world surrounds us. Working with people around the world, The Shoe Company has developed an affordable way to peek into this hidden world.">

                            </input>

                            
                            <input
                                className="session-type-button"
                                type="submit"
                                value="Next: Location"
                                onClick={this.handleClickInfo}
                            />
                        </form>
                    </div>
                </div>

                {/* Location Info */}

                <div className={this.state.locationSelect}>
                    <div>
                        <div> <h1>Briefly tell more about yourself or your company.</h1></div>
                        <form>
                            <input className="session-type-input" onChange={this.update("about")} type="text" placeholder="Born on Kickstarter in 2013, The Shoe Company is a San Francisco-based startup in love with shoes and obsessed with product design.">
                            </input>

                        </form>
                    </div>
                    <div><h1>Tell us where you’re based and provide a little more about your company to display alongside your campaign.</h1></div>
                    <div>
                        <form>
                            <select onChange={this.update("location")} >
                                <option value="" selected disabled hidden>Select your country</option>
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
                            <input
                                className="session-type-button"
                                type="submit"
                                value="Next: Funding"
                                onClick={this.handleClickLoc}
                            />
                        </form>
                    </div> 
                </div>

                {/* Funding Info*/}
                <div className={this.state.fundingSelect}>
                    <form>
                        <div><h1>Funding goal</h1></div>
                        <div><p>Set an achievable goal that covers what you need to complete your project.</p></div>
                        <div><p>Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.</p></div>
                        <input className="session-type-input" onChange={this.updateNum("goal_amount")} type="number" placeholder="1" min="1" max="100000000">
                        </input>

                        <div><h1>Campaign duration</h1></div>

                        <div>
                            <input className="session-type-input" onChange={this.updateRadio("days_left")} name="group1" type="radio" value="30" checked={this.state.selectedOption === '30'}/>
                            30 Days
                        </div>
                        <div>
                                <input className="session-type-input" onChange={this.updateRadio("days_left")} name="group1" type="radio" value="60" checked={this.state.selectedOption === '60'}/>
                            60 Days
                        </div>
                        <div>
                                <input className="session-type-input" onChange={this.updateRadio("days_left")} name="group1" type="radio" value="90" checked={this.state.selectedOption === '90'}/>
                            90 Days
                        </div>    
                     

                        <input
                            className="session-type-button"
                            type="submit"
                            value="Next: Create Rewards"
                            onClick={this.handleClickFunding}
                        />
                    </form>
                </div>

            </div>
        );

    }

}

export default newProjectForm;