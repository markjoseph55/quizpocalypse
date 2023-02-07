// modules
import kathlyn from './modules/kathlyn.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        kathlyn,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
