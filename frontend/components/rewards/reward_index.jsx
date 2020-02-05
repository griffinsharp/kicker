import React from "react";
import RewardIndexItem from "./reward_index_item";
import NoReward from "./no_reward";

class RewardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.rewardDisplay = this.rewardDisplay.bind(this);

    // this.noRewardDisplay = this.noRewardDisplay.bind(this);
  }


  rewardDisplay(reward) {
    if (reward.id % 4 === 1 % 4) {
      return (
        <NoReward
          currentUser={this.props.currentUser}
          errors={this.props.errors}
          reward={reward}
          createBacking={this.props.createBacking}
          user={this.props.user}
          key={reward.id}
          project={this.props.project}
        />
      );
    } else {
      return (
        <RewardIndexItem
          currentUser={this.props.currentUser}
          errors={this.props.errors}
          reward={reward}
          createBacking={this.props.createBacking}
          user={this.props.user}
          key={reward.id}
          project={this.props.project}
        />
      );
    }
  }

  // noRewardDisplay(reward) {
  //   if (reward.id === 1) {
  //     return (
  //       <NoReward
  //         errors={this.props.errors}
  //         reward={reward}
  //         createBacking={this.props.createBacking}
  //         user={this.props.user}
  //         key={reward.id}
  //         project={this.props.project} />
  //     );
  //   }
  // }

  render() {
    const { rewards, createBacking, user, project, errors } = this.props;

    return (
      <div>
        {/* <div>
                {rewards.map(reward => this.noRewardDisplay(reward))}
            </div> */}
        <div>{rewards.map(reward => this.rewardDisplay(reward))}</div>
      </div>
    );
  }
}

export default RewardIndex;
