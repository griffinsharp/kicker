import React from 'react';

class RewardIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          backing_amount: this.props.reward.amount,
          user_id: this.props.user.id,
          reward_id: this.props.reward.id,
          project_id: this.props.project.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
        e.preventDefault();
        const backing = Object.assign({}, this.state);
        this.props.createBacking(backing).then(() => this.handleErrors());
  }

  handleErrors() {
    if (this.props.errors.length === 0) {
      this.props.reward.num_backers = (this.props.reward.num_backers + 1);
      this.props.project.num_backers = (this.props.project.num_backers + 1);
      this.props.project.total_pledged = (this.props.project.total_pledged + this.state.pledge_amount);
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-number-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

    render() {
        const { reward, createBacking, user, errors } = this.props;
       
        return (
          <div className="reward-index-item">
            <p className="pledge-reward-amount">Pledge US$ {reward.amount} or more </p>
            <p>{reward.desc}</p>
            <p>{reward.subdesc}</p>
            <p>Estimated Delivery {reward.delivery}</p>
            <p>Ships to {reward.shipping}</p>
            <p>{reward.newRewardBackers} backers</p>

            <form className="pledge-form" onSubmit={this.handleSubmit}>
              {this.renderErrors()}
              <div className="pledge-contents">
                {" "}
                Pledge Amount
                <input
                  className="pledge-text-input"
                  type="text"
                  onChange={this.update("backing_amount")}
                   value={this.state.backing_amount}
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