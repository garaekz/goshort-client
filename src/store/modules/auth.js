import axios from "axios";
import { config } from "@/config";
import Cookies from "js-cookie";

export default {
    namespaced: true,
    state: {
      token: null,
      user: null,
    },
    mutations: {
      login(state, token) {
        state.token = token;
        Cookies.set('token', token)
      },
      logout(state) {
        state.user = null;
        state.token = null;
        Cookies.remove('token')
      }
    },
    actions: {
      async login({ commit }, payload) {
        try {
          const { data }  = await axios.post(`${config.baseURL}/login`, payload)
          await commit("login", data.token)
          return true
        } catch (error) {
          return
        }
      }
    },
}
