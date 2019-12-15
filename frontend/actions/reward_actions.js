import * as APIUtil from '../util/reward_api_util';
export const RECEIVE_REWARDS = "RECEIVE_REWARDS";
export const RECEIVE_REWARD = "RECEIVE_REWARD";

export const receiveRewards = (rewards) => ({
    type: RECEIVE_REWARDS,
    rewards
});

export const receiveReward = payload => ({
    type: RECEIVE_REWARD,
    payload
});

export const fetchRewards = () => (dispatch) => {
    return APIUtil.fetchRewards()
    .then((rewards) => dispatch(receiveRewards(rewards)));
}

export const createReward = (reward) => (dispatch) => {
    return APIUtil.createReward(reward)
        .then((reward) => dispatch(receiveReward(reward)));
}