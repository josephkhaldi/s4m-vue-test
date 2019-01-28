import Vue from 'vue';
import Vuex from 'vuex';

import users from './users';
import options from './options';
import selectedUsers from './selectedUsers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    options,
    selectedUsers
  },
});
