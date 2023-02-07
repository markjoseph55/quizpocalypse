// modules
import arvic from './modules/arvic.js';
import mariefel from './modules/mariefel.js';
// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        arvic,

        // include your module here (e.g. john)
        // ...
        mariefel,
    }
});

export default store;
