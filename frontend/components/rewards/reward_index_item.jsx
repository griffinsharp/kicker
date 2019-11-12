import React from 'react';

class RewardIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { reward } = this.props;
        return (
          <div>
            <p>Pledge {reward.amount} or more </p>
            <p>{reward.desc}</p>
            <p>{reward.subdesc}</p>
            <p>Estimated Delivery {reward.delivery}</p>
            <p>Ships to {reward.shipping}</p>
            <p>{reward.num_backers} backers</p>
            
          </div>
        );
       
    }
}

export default RewardIndexItem;