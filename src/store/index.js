import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'
import axios from 'axios'
import router from '../router'


// var production = !window.location.host.includes('localhost')
// var baseUrl = production ? '//awesome-keepr.herokuapp.com/' : '//localhost:3000/';
// selects env

vue.use(vuex)

// let api = axios.create({
//     baseURL: baseUrl + 'api/',
//     timeout: 50000,
//     withCredentials: true
// })

// let auth = axios.create({
//     baseURL: baseUrl,
//     timeout: 40000,
//     withCredentials: true
// })


var store = new vuex.Store({
    state: {
        user: {},
        loggedIn: false,
        projects: [
            {
                image: '',
                title: '',
                description: '',
                icons: [
                    
                ],
                skills: [

                ]
            }

        ],
        loginWindow: false,
        registerForm: false,
        loginError: false,
        error: {},
        mainDialog: false
    },
    mutations: {

    },
    actions: {

    }
}) 

export default store;