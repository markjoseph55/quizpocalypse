// modules
import arvic from './modules/arvic.js';
import angela from './modules/angela.js';


const store = Vuex.createStore({
    modules: {
        arvic,
        angela,

    }
});

export default store;
