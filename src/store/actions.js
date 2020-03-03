import {fetchItemInfo, fetchList, fetchUserInfo} from "../api";

export default {
    FETCH_USER({commit}, name) {
        fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ITEM({commit}, item) {
        fetchItemInfo(item)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_LIST({commit}, pageName) {
        return fetchList(pageName)
            .then((response) => {
                console.log("#3");
                commit('SET_LIST', response.data);
            }).catch(error => {
            console.log(error);
        })
    }
}