import { RECEIVE_PROJECT, RECEIVE_BACKING } from '../actions/project_actions';
import { RECEIVE_REWARD, RECEIVE_REWARDS } from '../actions/reward_actions';

const rewardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    let val;
    switch (action.type) {
        case RECEIVE_PROJECT:
            if (!action.payload.rewards) {
                return oldState;
            } else {
                return action.payload.rewards;
            };
        case RECEIVE_BACKING:
            return action.payload.rewards;
        case RECEIVE_REWARDS:
            return action.rewards;
        case RECEIVE_REWARD:
            newState[action.payload.reward.id] = action.payload.reward;
            return newState;
        default:
            return oldState;
    }
};

export default rewardsReducer;