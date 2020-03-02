import {fetchAskList, fetchItemInfo, fetchJobsList, fetchList, fetchNewsList, fetchUserInfo} from "../api";

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log('fetched action');
                context.commit('SET_NEWS', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ASK({commit}) {
        fetchAskList()
            .then(response => {
                commit('SET_ASK', response.data);
            })
            .catch(error => console.log(error))
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(response => {
                commit('SET_JOBS', response.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
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
        fetchList(pageName)
            .then(({data}) => {
            commit('SET_LIST', data);
        }).catch(error => {
            console.log(error);
        })
    }
}