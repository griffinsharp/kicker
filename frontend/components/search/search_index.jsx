import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category_id: '',
            location: '',
            filter: '',
            next: true,
            filtprojects: ''
        };
        this.searchFilter = this.searchFilter.bind(this);
        this.checkProj = this.checkProj.bind(this);
    }
    

    componentDidMount() {
        this.props.fetchProjects().then(() => {
            this.setState({filtprojects: this.props.projects});
        });
        
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
            }

            this.setState({ filtprojects: results3 });
        });
    
       
    }

      // updateFilter(field) {
    //     if (e.currentTarget.value === 'Loved') {
    //         this.setState({ [field]: 'loved'});
    //     } else if (e.currentTarget === 'Newest') {
    //         this.setState({ [field]: 'newest' });
    //     } else if (e.currentTarget === 'Funded') {
    //         this.setState({ [field]: 'funded' });
    //     } else if (e.currentTarget === 'Random') {
    //         this.setState({ [field]: 'random' });
    //     }
    // }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
            this.searchFilter(this.props.projects);
        };
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
                    <div>
                        {this.state.filtprojects.map(project => <SearchIndexItem project={project} />)}
                    </div>
                )
            } else if (this.state.filtprojects.length === 0) {
                return (
                    <div>
                        No projects matched your search.
                    </div>
                )
            }
        }
    }

    render() {
        
        return(
            <div>
                <p>Show Me</p>
                <div>
                    <form>
                        <select defaultValue="" onChange={this.update("category_id")} >
                            <option value="">All Categories</option>
                            <option value="1" >Arts</option>
                            <option value="2" >Comics & Illustration</option>
                            <option value="3">Design & Tech</option>
                            <option value="4">Film</option>
                            <option value="5">Food & Craft</option>
                            <option value="6">Games</option>
                            <option value="7">Music</option>
                            <option value="8">Publishing</option>
                        </select>
                    </form>                    
                </div>
                <p>projects on</p>
                <div>
                    <form>
                        <select defaultValue="" onChange={this.update("location")} >
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
                <p>sorted by</p>
                <div>
                    <form>
                        <select defaultValue="" onChange={this.update("filter")} >
                            <option value="">Magic</option>
                            <option value="loved">Projects We Love</option>
                            <option value="funded">Most Funded</option>
                            <option value="newest">Newest</option>
                            <option value="random">Random</option>
                        </select>
                    </form>
                </div>
                   {this.checkProj()}
            </div>
        )
    }
}

export default SearchIndex;