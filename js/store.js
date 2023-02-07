// modules
import junel from './modules/junel.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        junel,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
