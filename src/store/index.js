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
        mainskills: [
            {
                title: "JavaScript",
                img:"http://res.cloudinary.com/dvh7zccln/image/upload/v1507667954/learn-javascript_ztffct.png",
                description: "The language of the web. JavaScript is the main language I have worked with. I have over 500 hours of experience writing JavaScript.",                
                interval: {},
                value: 90
            },
            {
                title: "Vue",
                img:"http://res.cloudinary.com/dvh7zccln/image/upload/v1507588424/icons/logo.png",
                description: "With approximately 400 hours of experience building full-stack applications in Vue, I am very comfortable using this framework."                
            },
            {
                title: "Node",
                img:"https://res.cloudinary.com/dvh7zccln/image/upload/v1507677453/icons/nodejslogo.png",
                description: "Most of my backend server code is written in Node using the express JS library."                
            },
            {
                title: "C# .NET Core",
                img:"http://res.cloudinary.com/dvh7zccln/image/upload/v1507678913/c-logo-icon-28402_vps7su.png",
                description: "400 hours of experience ranging from console applications to backend server code using entity framework."                
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