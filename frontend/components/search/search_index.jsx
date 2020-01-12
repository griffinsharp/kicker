import React from 'react';
import SearchIndexItem from './search_index_item';
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category_id: '',
            location: 'Earth',
            filter: 'Magic',
            filtprojects: '',
            dropdown: "All Categories",
            dropdowntwo: "Earth",
            dropdownthree:"Magic",
            catbox: "hidden",
            catboxtwo: "hidden",
            catboxthree: "hidden",
            formColor: "",
            formColorTwo: "",
            formColorThree: "",
            svg: "arrow",
            svgTwo: "arrow",
            svgThree: "arrow"
        };
        this.searchFilter = this.searchFilter.bind(this);
        this.checkProj = this.checkProj.bind(this);
        this.updatedrop = this.updatedrop.bind(this);
        this.updateDropTwo = this.updateDropTwo.bind(this);
    }
    

    componentDidMount() {

        if (typeof this.props.location.state !== 'undefined') {
            this.props.fetchProjects().then(() => {
                this.setState({
                    category_id: this.props.location.state.category_id,
                    location: this.props.location.state.location,
                    filter: this.props.location.state.filter,
                    filtprojects: this.props.projects,
                });
                this.searchFilter(this.props.projects);
                this.updateDropTwo(`${this.props.location.state.location}`);
            });
        } else {
            this.props.fetchProjects().then(() => {
                this.setState({
                    filtprojects: this.props.projects,
                });
            });
        }
    }


    componentDidUpdate (prevProps) {
        console.log(this.props.location)
        if ((this.props.location.state !== prevProps.location.state) && (typeof this.props.location.state !== 'undefined')) {
            
            if (this.props.location.state.category_id) {
                this.setState({
                    category_id: this.props.location.state.category_id,
                    filtprojects: prevProps.projects,
                });
                this.searchFilter(this.state.filtprojects);
                this.updatedrop(`${this.props.location.state.category_id}`);
            }

            if (this.props.location.state.location) {
                this.setState({
                    location: this.props.location.state.location,
                    filtprojects: prevProps.projects,
                });
                this.searchFilter(this.state.filtprojects);
                this.updateDropTwo(`${this.props.location.state.location}`);
            }

            if (this.props.location.state.filter) {
                this.setState({
                    filter: this.props.location.state.filter,
                    filtprojects: prevProps.projects,
                });
                this.searchFilter(this.state.filtprojects);
                this.updateDropThree(`${this.props.location.state.filter}`);
            }
        
               
        } 

    }

    searchFilter(projects) {
        let results;
        let results2;
        let results3;
        this.props.fetchProjects().then(() => {
            if (this.state.category_id === '') {
                results = projects;
            } else {
                results = projects.filter(project => (this.state.category_id == project.category_id));
            }

            if (this.state.location === 'Earth') {
                results2 = results;
            } else {
                results2 = results.filter(project => (this.state.location == project.location));
            }

            if (this.state.filter === 'Magic') {
                results3 = results2;
            } else if (this.state.filter === 'Projects We Love') {
                results3 = results2.filter(project => (project.loved == true));
            } else if (this.state.filter === 'Newest') {
                results3 = results2.sort( (a,b) => (b.days_left - a.days_left) );
            } else if (this.state.filter === 'Most Funded') {
                results3 = results2.sort((a, b) => ((b.total_pledged / b.goal_amount) - (a.total_pledged / a.goal_amount)));
            } else if (this.state.filter === 'Random') {
                results3 = results2.sort(() => Math.random() - 0.5);
            } else if (this.state.filter === 'End Date') {
                results3 = results2.sort((a, b) => (a.days_left - b.days_left));
            } else if (this.state.filter === 'Most Backed') {
                results3 = results2.sort((a, b) => (b.num_backers - a.num_backers));
            }

            this.setState({ filtprojects: results3 });
        });
    
       
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
            this.searchFilter(this.props.projects);
        };
    }

    updatedrop(cat, num) {
        if (num === '') {
            this.state.svg = "arrow";
        } else {
            this.state.svg = "times";
        }
        this.setState({ category_id: num });
        this.searchFilter(this.props.projects);
        this.setState({ dropdown: cat });
        this.setState({ catbox: "hidden" });
    }

    updateDropTwo(loc) {

        if (loc === 'Earth') {
            this.state.svgTwo = "arrow";
        } else {
            this.state.svgTwo = "times";
        }
        
        this.setState({ location: loc });
        this.searchFilter(this.props.projects);
        this.setState({ dropdowntwo: loc });
        this.setState({ catboxtwo: "hidden" });
    }

    updateDropThree(filter) {
        if (filter === 'Magic') {
            this.state.svgThree = "arrow";
        } else {
            this.state.svgThree = "times";
        }

        this.setState({ filter: filter });
        this.searchFilter(this.props.projects);
        this.setState({ dropdownthree: filter });
        this.setState({ catboxthree: "hidden" });
    }

    selectCat(e) {
        if (e.currentTarget !== e.target) return;

        if (this.state.catbox === "hidden") {
            this.setState({ catbox: "cat-box-search" });
        } else {
            this.setState({ catbox: "hidden" });
        }
    }

    selectX() {
        if (this.state.catbox === "hidden") {
            this.setState({ catbox: "cat-box-search" });
        } else {
            this.setState({ catbox: "hidden" });
        }
    }

    selectLoc(e) {

        if (e.currentTarget !== e.target) return;

        if (this.state.catboxtwo === "hidden") {
            this.setState({ catboxtwo: "cat-box-search" });
        } else {
            this.setState({ catboxtwo: "hidden" });
        }
    }

    selectXTwo() {
        if (this.state.catboxtwo === "hidden") {
            this.setState({ catboxtwo: "cat-box-search" });
        } else {
            this.setState({ catboxtwo: "hidden" });
        }
    }

    selectFilt(e) {
        if (e.currentTarget !== e.target) return;

        if (this.state.catboxthree === "hidden") {
            this.setState({ catboxthree: "cat-box-search" });
        } else {
            this.setState({ catboxthree: "hidden" });
        }
    }

    selectXThree() {
        if (this.state.catboxthree === "hidden") {
            this.setState({ catboxthree: "cat-box-search" });
        } else {
            this.setState({ catboxthree: "hidden" });
        }
    }
    

    // this will handle the lifecycle of the projects.
    // if its non existant, we haven't fetched yet, so return null.
    // once fetched, if the array has a length, lets display each project.
    // if there is no length, return a statement letting the user know. 
    checkProj() {
        if (this.state.filtprojects === '') {
            return null;
        } else {
            if (this.state.filtprojects.length > 0) {
                return (
                    <div className="proj-and-amt">
                        <div className="proj-amt">Explore <div className="green-amt">&nbsp;{this.state.filtprojects.length} projects</div></div>
                        <div className="proj-search-container">
                            {this.state.filtprojects.map(project => <SearchIndexItem project={project} />)}
                        </div>
                    </div>
                )
            } else if ((typeof this.state.filtprojects === "undefined")) {
                return (
                    <div className="proj-and-amt">
                        <div className="proj-search-container">
                            <div className="no-search-result">
                                Oops! Looks like we couldn’t find any results. Why not change some things around or broaden your search?
                            </div>
                        </div>
                    </div>
                )
            } else if ((this.state.filtprojects.length === 0)) {
                return (
                    <div className="proj-and-amt">
                        <div className="proj-search-container">
                            <div className="no-search-result">
                                Oops! Looks like we couldn’t find any results. Why not change some things around or broaden your search?
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }

    render() {
        let svgIcon;
        let svgIconTwo;
        let svgIconThree;
        if (this.state.svg === "arrow") {
            svgIcon = <FontAwesomeIcon className="caret-svg-search" icon={faCaretDown} alt="" onClick={() => this.selectX() } />
        } else if (this.state.svg === "times") {
            svgIcon = <FontAwesomeIcon className="caret-svg-search" icon={faTimes} alt="" onClick={() =>{this.updatedrop('All Categories','')}} />
        }

        if (this.state.svgTwo === "arrow") {
            svgIconTwo = <FontAwesomeIcon className="caret-svg-search" icon={faCaretDown} alt="" onClick={() => this.selectXTwo()} />
        } else if (this.state.svgTwo === "times") {
            svgIconTwo = <FontAwesomeIcon className="caret-svg-search" icon={faTimes} alt="" onClick={() => { this.updateDropTwo('Earth') }} />
        }

        if (this.state.svgThree === "arrow") {
            svgIconThree = <FontAwesomeIcon className="caret-svg-search" icon={faCaretDown} alt="" onClick={() => this.selectXThree()} />
        } else if (this.state.svgThree === "times") {
            svgIconThree = <FontAwesomeIcon className="caret-svg-search" icon={faTimes} alt="" onClick={() => { this.updateDropThree('Magic') }} />
        }


        const { catbox, catboxtwo, catboxthree, formColor, dropdown, dropdowntwo, dropdownthree, filter } = this.state;
       
        return(
            <div className="search-and-proj">
                <div className="search-container">
                    <p className="search-text">Show me</p>
                    
                    <form className="dropform-search">
                        <div className={`session-type-input-proj-drop-search ${formColor}`} onClick={(e) => this.selectCat(e)}>{dropdown}
                           {svgIcon}
                        </div>
                        <div className={catbox}>
                            <div onClick={() => this.updatedrop("All Categories", '')} className="cat-box-option">All Categories</div>
                            <div onClick={() => this.updatedrop("Arts", 1)} className="cat-box-option">Arts</div>
                            <div onClick={() => this.updatedrop("Comics & Illustration", 2)} className="cat-box-option">Comics & Illustration</div>
                            <div onClick={() => this.updatedrop("Design & Tech", 3)} className="cat-box-option">Design & Tech</div>
                            <div onClick={() => this.updatedrop("Film", 4)} className="cat-box-option">Film</div>
                            <div onClick={() => this.updatedrop("Food & Craft", 5)} className="cat-box-option">Food & Craft</div>
                            <div onClick={() => this.updatedrop("Games", 6)} className="cat-box-option">Games</div>
                            <div onClick={() => this.updatedrop("Music", 7)} className="cat-box-option">Music</div>
                            <div onClick={() => this.updatedrop("Publishing", 8)} className="cat-box-option">Publishing</div>
                        </div>
                    </form>


                    

                    <p className="search-text">projects on</p>
                    <form className="dropform-search">
                        <div className={`session-type-input-proj-drop-search ${formColor}`} onClick={(e) => this.selectLoc(e)}>{dropdowntwo}
                            {svgIconTwo}
                        </div>
                        <div className={catboxtwo}>
                            <div onClick={() => this.updateDropTwo("Earth")} className="cat-box-option">Earth</div>
                            <div onClick={() => this.updateDropTwo("Australia")} className="cat-box-option">Australia</div>
                            <div onClick={() => this.updateDropTwo("Austria")} className="cat-box-option">Austria</div>
                            <div onClick={() => this.updateDropTwo("Belgium")} className="cat-box-option">Belgium</div>
                            <div onClick={() => this.updateDropTwo("Canada")} className="cat-box-option">Canada</div>
                            <div onClick={() => this.updateDropTwo("Denmark")} className="cat-box-option">Denmark</div>
                            <div onClick={() => this.updateDropTwo("France")} className="cat-box-option">France</div>
                            <div onClick={() => this.updateDropTwo("Germany")} className="cat-box-option">Germany</div>
                            <div onClick={() => this.updateDropTwo("Ireland")} className="cat-box-option">Ireland</div>
                            <div onClick={() => this.updateDropTwo("Italy")} className="cat-box-option">Italy</div>
                            <div onClick={() => this.updateDropTwo("Japan")} className="cat-box-option">Japan</div>
                            <div onClick={() => this.updateDropTwo("Luxembourg")} className="cat-box-option">Luxembourg</div>
                            <div onClick={() => this.updateDropTwo("Mexico")} className="cat-box-option">Mexico</div>
                            <div onClick={() => this.updateDropTwo("New Zealand")} className="cat-box-option">New Zealand</div>
                            <div onClick={() => this.updateDropTwo("Singapore")} className="cat-box-option">Singapore</div>
                            <div onClick={() => this.updateDropTwo("Spain")} className="cat-box-option">Spain</div>
                            <div onClick={() => this.updateDropTwo("Sweden")} className="cat-box-option">Sweden</div>
                            <div onClick={() => this.updateDropTwo("Switzerland")} className="cat-box-option">Switzerland</div>
                            <div onClick={() => this.updateDropTwo("the Netherlands")} className="cat-box-option">the Netherlands</div>
                            <div onClick={() => this.updateDropTwo("the United Kingdom")} className="cat-box-option">the United Kingdom</div>
                            <div onClick={() => this.updateDropTwo("the United States")} className="cat-box-option">the United States</div>
                            
                        </div>
                    </form>

                    <p className="search-text">sorted by</p>
                    <form className="dropform-search">
                        <div className={`session-type-input-proj-drop-search ${formColor}`} onClick={(e) => this.selectFilt(e)}>{dropdownthree}
                            {svgIconThree}
                        </div>
                        <div className={catboxthree}>
                            <div onClick={() => this.updateDropThree("Magic")} className="cat-box-option">Magic</div>
                            <div onClick={() => this.updateDropThree("Projects We Love")} className="cat-box-option">Projects We Love</div>
                            <div onClick={() => this.updateDropThree("Newest")} className="cat-box-option">Newest</div>
                            <div onClick={() => this.updateDropThree("End Date")} className="cat-box-option">End Date</div>
                            <div onClick={() => this.updateDropThree("Most Funded")} className="cat-box-option">Most Funded</div>
                            <div onClick={() => this.updateDropThree("Most Backed")} className="cat-box-option">Most Backed</div>
                            <div onClick={() => this.updateDropThree("Random")} className="cat-box-option">Random</div>

                        </div>
                    </form>
                </div>
                   {this.checkProj()}
            </div>
        )
    }
}

export default withRouter(SearchIndex);