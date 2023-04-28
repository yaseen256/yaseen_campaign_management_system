import { createStore } from "vuex";

const store = createStore({
  state: {
    campaignData: [],
  },
  mutations: {
    SET_CAMPAIGN_DATA(state, data) {
      state.campaignData = data;
    },
  },
  actions: {
    setCampaignData({ commit }, data) {
      commit("SET_CAMPAIGN_DATA", data);
    },
  },
});

export default store;
