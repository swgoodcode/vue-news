import bus from "../utils/bus";
import {store} from "../store";

export default {
    beforeEnter: (to, from ,next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
            .then(() => {
                next();
            })
            .catch((error) => {
                console.log(error);
            });
    }
}