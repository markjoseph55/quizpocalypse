// modules
import vince from './modules/vince.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        vince

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
