import axios from 'axios'
import Cookies from 'js-cookie'

const state = {
    posts: [],
    setHeader(){
        axios.defaults.headers.common['Authorization'] = 'Bearer' + Cookies.get('access_token')
    }
}

const getters = {
    allPosts: state => state.posts, 
}

const actions = {
    async getPost(context){
        context.state.setHeader()
        let url = '/auth/user/post/get'
        const response = await axios.get(url, {params: {limit: 5, page: 2}});
        console.log(response.data.data)
        context.commit('SET_POST', response.data)
    }
}

const mutations = {
    SET_POST: (state, posts) => state.posts = posts,
}

export default {
    state,
    getters,
    actions,
    mutations
}