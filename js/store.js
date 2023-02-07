// modules

// import your .js file here (e.g. import john from './modules/john.js')
// ...
import arvic from './modules/arvic.js';
import don from './modules/don.js';

const store = Vuex.createStore({
    modules: {
        don,
        arvic
        // include your module here (e.g. john)
        // ...

    }
});

export default store;
