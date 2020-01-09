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
            location: '',
            filter: '',
            filtprojects: '',
            dropdown: "All Categories",
            dropdowntwo: "Earth",
            dropdownthree:"Magic",
            catbox: "hidden",
            catboxtwo: "hidden",
            formColor: "",
            formColorTwo: "",
            svg: "arrow",
        };
        this.searchFilter = this.searchFilter.bind(this);
        this.checkProj = this.checkProj.bind(this);
        this.updatedrop = this.updatedrop.bind(this);
        this.updatedroptwo = this.updatedroptwo.bind(this);
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
            });
        } else {
            this.props.fetchProjects().then(() => {
                this.setState({
                    filtprojects: this.props.projects,
                });
            });
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

            if (this.state.location === '') {
                results2 = results;
            } else {
                results2 = results.filter(project => (this.state.location == project.location));
            }

            if (this.state.filter === '') {
                results3 = results2;
            } else if (this.state.filter === 'loved') {
                results3 = results2.filter(project => (project.loved == true));
            } else if (this.state.filter === 'newest') {
                results3 = results2.sort( (a,b) => (b.days_left - a.days_left) );
            } else if (this.state.filter === 'funded') {
                results3 = results2.sort((a, b) => ((b.total_pledged / b.goal_amount) - (a.total_pledged / a.goal_amount)));
            } else if (this.state.filter === 'random') {
                results3 = results2.sort(() => Math.random() - 0.5);
            } else if (this.state.filter === 'enddate') {
                results3 = results2.sort((a, b) => (a.days_left - b.days_left));
            } else if (this.state.filter === 'backed') {
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

    updatedroptwo(loc) {
        
        this.setState({ location: loc });
        this.searchFilter(this.props.projects);
        this.setState({ dropdowntwo: loc });
        this.setState({ catboxtwo: "hidden" });
    }

    selectCat(e) {

        if (e.currentTarget !== e.target) return;

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

    // this will handle the lifecycle of the projects.
    // if its non existant, we haven't fetched yet, so return null.
    // once fetched, if the array has a length, lets display each project.
    // if there is no length, return a statement letting the user know. 
    checkProj() {
        if (this.state.filtprojects === '' || !this.state.filtprojects) {
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
            } else if (this.state.filtprojects.length === 0) {
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
        if (this.state.svg === "arrow") {
            svgIcon = <FontAwesomeIcon className="caret-svg-search" icon={faCaretDown} alt="" />
        } else if (this.state.svg === "times") {
            svgIcon = <FontAwesomeIcon className="caret-svg-search" icon={faTimes} alt="" onClick={() =>{
               
                this.updatedrop('All Categories','')}} />
        }
       
        return(
            <div className="search-and-proj">
                <div className="search-container">
                    <p className="search-text">Show me</p>
                    
                    <form className="dropform-search">
                        <div className={`session-type-input-proj-drop-search ${this.state.formColor}`} onClick={(e) => this.selectCat(e)}>{this.state.dropdown}
                           {svgIcon}
                        </div>
                        <div className={this.state.catbox}>
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
                    <div className="search-form-container">
                        <form className="dropform">
                            <select defaultValue="" className="search-type-input" onChange={this.update("location")} >
                                <option value="">Earth</option>
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
                        </form>
                    </div>
                    <p className="search-text">sorted by</p>
                    <div className="search-form-container">
                        <form className="dropform">
                            <select defaultValue="" className="search-type-input" value={this.state.filter} onChange={this.update("filter")} >
                                <option value="">Magic</option>
                                <option value="loved">Projects We Love</option>
                                <option value="newest">Newest</option>
                                <option value="enddate">End Date</option>
                                <option value="funded">Most Funded</option>
                                <option value="backed">Most Backed</option>
                                <option value="random">Random</option>
                            </select>
                        </form>
                    </div>
                </div>
                   {this.checkProj()}
            </div>
        )
    }
}

export default withRouter(SearchIndex);