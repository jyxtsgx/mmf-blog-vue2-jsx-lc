import {
    DELETE_ARTICLE,
    RECEIVE_ADMIN_TOPICS,
    RECOVER_ARTICLE,
    UPDATE_ADMIN_ARTICLE,
    RECEIVE_ADMIN_ARTICLE,
    DELETE_ADMIN_TOPICS_PATH
} from '../mutation-types'

const state = {
    topic: {
        list: [],
        path: '',
        hasNext: 0,
        hasPrev: 0
    },
    article: {}
}

const mutations = {
    [RECEIVE_ADMIN_TOPICS](state, {list, path, hasNext, hasPrev}) {
        state.topic.list = list
        state.topic.path = path
        state.topic.hasNext = hasNext
        state.topic.hasPrev = hasPrev
    },
    [DELETE_ADMIN_TOPICS_PATH](state) {
        state.topic.path = ''
    },
    [RECEIVE_ADMIN_ARTICLE](state, { data }) {
        state.article = data
    },
    [UPDATE_ADMIN_ARTICLE](state, data) {
        const obj = state.topic.list.find(ii => ii._id === data.id)
        for (const jj in obj) {
            if (obj.hasOwnProperty(jj) && data[jj]) {
                obj[jj] = data[jj]
            }
        }
    },
    [DELETE_ARTICLE](state, id) {
        const obj = state.topic.list.find(ii => ii._id === id)
        obj.is_delete = 1
    },
    [RECOVER_ARTICLE](state, id) {
        const obj = state.topic.list.find(ii => ii._id === id)
        obj.is_delete = 0
    }
}

export default {
    state,
    mutations
}
