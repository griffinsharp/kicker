import React from 'react';

class RewardIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          pledge_amount: this.props.reward.amount,
          user_id: this.props.user.id,
          reward_id: this.props.reward.id,
          project_id: this.props.project.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const backing = Object.assign({}, this.state);
        this.props.createBacking(backing);
        this.props.reward.num_backers = (this.props.reward.num_backers + 1);
        this.props.project.num_backers = (this.props.project.num_backers + 1); 
        this.props.project.total_pledged = (this.props.project.total_pledged + this.state.pledge_amount);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value });
    }

    render() {
        const { reward, createBacking, user } = this.props;
       
        return (
          <div>
            <p>Pledge {reward.amount} or more </p>
            <p>{reward.desc}</p>
            <p>{reward.subdesc}</p>
            <p>Estimated Delivery {reward.delivery}</p>
            <p>Ships to {reward.shipping}</p>
            <p>{reward.num_backers} backers</p>

            <form className="pledge-form" onSubmit={this.handleSubmit}>
              <div className="pledge-contents">
                {" "}
                Pledge Amount
                <input
                  className="pledge-text-input"
                  type="text"
                  onChange={this.update("pledge_amount")}
                   value={this.state.pledge_amount}
                />
                <input
                  className="pledge-submit-button"
                  type="submit"
                  value="Back this project"
                />
              </div>
            </form>
          </div>
        );
       
    }
}

export default RewardIndexItem;