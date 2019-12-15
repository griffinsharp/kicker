import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category_id: '',
            location: '',
            filter: '',
            next: true
        };
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    updateFilter(field) {
        
        if (e.currentTarget.value === 'Loved') {
            this.setState({ [field]: 'loved'})
        } else if (e.currentTarget === 'Newest') {
            this.setState({ [field]: 'newest' });
        } else if (e.currentTarget === 'Funded') {
            this.setState({ [field]: 'funded' });
        } else if (e.currentTarget === 'Random') {
            this.setState({ [field]: 'random' });
        }
    }

    render() {
        console.log(this.state);
        const {projects} = this.props;

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
                            <option value="Loved">Projects We Love</option>
                            <option value="Funded">Most Funded</option>
                            <option value="Newest">Newest</option>
                            <option value="Random">Random</option>
                        </select>
                    </form>
                </div>
                    <div>
                    {projects.map(project => <SearchIndexItem project={project} key={project.id}/>)}
                    </div>
                
            </div>
        )
    }
}

export default SearchIndex;