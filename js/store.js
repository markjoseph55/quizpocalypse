// modules
import markisrael from './modules/markisrael.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        markisrael,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
