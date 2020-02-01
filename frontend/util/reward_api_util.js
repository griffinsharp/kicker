export const fetchRewards = rewards =>
  $.ajax({
    url: `api/rewards`,
    method: `GET`,
    rewards
  });

export const createReward = reward =>
  $.ajax({
    url: `api/rewards`,
    method: `POST`,
    data: { reward }
  });
