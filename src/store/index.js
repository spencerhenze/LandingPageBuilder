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
                image: 'http://res.cloudinary.com/dvh7zccln/image/upload/v1507599033/icons/Screen_Shot_2017-10-09_at_7.29.41_PM.png',
                title: 'Keepr',
                description: 'A Pintrest clone, set up with Vue.js, Node, Bootstrap and MongoDB. This project highlights the major topics learned during the majority of the time at Boise Codeworks.',
                icons: [
                    {
                        name: "Vue",
                        path: "http://res.cloudinary.com/dvh7zccln/image/upload/v1507588424/icons/logo.png"
                    },
                    {
                        name: "Node",
                        path: "http://res.cloudinary.com/dvh7zccln/image/upload/v1507588424/icons/nodejslogo.png"
                    },
                    {
                        name: "Mongo DB",
                        path: "http://res.cloudinary.com/dvh7zccln/image/upload/v1507599756/icons/mongodb_copy.png"
                    }


                ],
                skills: [
                    "Vue",
                    "Javascript",
                    "MongoDb",
                    "NodeJs"
                ],
                link: "https://awesome-keepr.herokuapp.com"
            },
            {
                image: 'http://res.cloudinary.com/dvh7zccln/image/upload/v1507598119/icons/Screen_Shot_2017-10-09_at_7.14.27_PM.png',
                title: 'Vue Kanban',
                description: 'Full stack application using Vue, Node, Boostrap and MongoDB to build Kanban boards to better help users with project management. (similar to trello).',
                icons: [
                    {
                        name: "Vue",
                        path: "http://res.cloudinary.com/dvh7zccln/image/upload/v1507588424/icons/logo.png"
                    },
                    {
                        name: "Node",
                        path: "http://res.cloudinary.com/dvh7zccln/image/upload/v1507588424/icons/nodejslogo.png"
                    },
                    {
                        name: "Mongo DB",
                        path: "http://res.cloudinary.com/dvh7zccln/image/upload/v1507599756/icons/mongodb_copy.png"
                    }


                ],
                skills: [
                    "Vue",
                    "Javascript",
                    "MongoDb",
                    "NodeJs"

                ],
                link: "https://zen-kanban.herokuapp.com"
            },


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