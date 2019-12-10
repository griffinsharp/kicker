import React from "react";

class newProjectForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            sub_title: '',
            total_pledged: 0,
            goal_amount: 0,
            num_backers: 0,
            days_left: 30,
            loved: false,
            location: '',
            campaign: '',
            about: '',
            category_id: 1,
            user_id: this.props.user.id
        }
        // check user_id later for correctness
        // category_id default to one but should change as well, will need conditional logic to convert
    }


    render () {

        return (
            <div>
                
            </div>
        );

    }

}

export default newProjectForm;