import {
    createStore
} from "vuex";

import home from "./home"
import search from "./search"
import detail from "./detail";

export default createStore({
    modules: {
        home: home,
        search: search,
        detail: detail
    }
})