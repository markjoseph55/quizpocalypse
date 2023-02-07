// modules
import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
import arjay from './modules/arjay.js';


const store = Vuex.createStore({
    modules: {
        arvic,arjay

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
