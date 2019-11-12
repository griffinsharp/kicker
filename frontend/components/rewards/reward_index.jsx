import React from 'react';
import RewardIndexItem from './reward_index_item';

class RewardIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {rewards} = this.props;
        return (
          <div>
            <div className="no-reward-pledge">
              <div>Make a pledge without a reward</div>
              <input type="numbers" value="Pledge any amount" />
              <input type="submit" value="Continue" />
            </div>
            {rewards.map(reward => (
              <RewardIndexItem reward={reward} />
            ))}
          </div>
        );
    }

}

export default RewardIndex;