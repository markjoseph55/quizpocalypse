// modules
import arvic from './modules/arvic.js';
import jojilyn from './modules/jojilyn.js';

const store = Vuex.createStore({
    modules: {
        arvic,

        jojilyn,

    }
});

export default store;
