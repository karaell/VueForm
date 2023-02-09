import { createStore } from "vuex";
import axios from "axios";
// const url = "http://hh.autodrive-agency.ru/test-tasks/front/task-7/";
import URL from "../constants/index.js";

export default createStore({
  state: () => ({
    isFormModalShow: false,
    currentCityId: "1",
    isRequestSuccessfulModalShow: false,
    isRequestErrorModalShow: false,
  }),
  getters: {},
  mutations: {
    setIsFormModalShow(state) {
      state.isFormModalShow = !state.isFormModalShow;
    },
    setCurrentCityId(state, payload) {
      state.currentCityId = payload;
    },
    setIsRequestSuccessfulModalShow(state) {
      state.isRequestSuccessfulModalShow = !state.isRequestSuccessfulModalShow;
    },
    setIsRequestErrorModalShow(state) {
      state.isRequestErrorModalShow = !state.isRequestErrorModalShow;
    },
  },
  actions: {
    async setFormData({ commit }, data) {
      try {
        axios
          .post(URL, data)
          .then(() => {
            commit("setIsRequestSuccessfulModalShow");
            commit("setIsFormModalShow");
          })
          .catch((e) => {
            commit("setIsRequestErrorModalShow");
            console.log(e.message);
          });
      } catch (e) {
        console.log(e.message);
      }
    },
  },
});
