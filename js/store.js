// modules
import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
import jeremy from './modules/jeremy.js';

const store = Vuex.createStore({
    modules: {
        jeremy, arvic

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
