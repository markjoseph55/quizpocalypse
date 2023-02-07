// modules
import lourdes from './modules/lourdes.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        lourdes,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
