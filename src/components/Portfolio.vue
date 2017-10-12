<template>
    <div class="portfolio">

        <v-layout column wrap align-center>
            <v-flex xs12>
                <div class="text-xs-center">
                    <h2 class="section-title">Portfolio</h2>
                </div>
            </v-flex>
        </v-layout>
        <v-container fluid grid-list-md class="transparent">

            <v-layout row wrap text-center>

                <v-flex xs12 sm4 v-for="card in projects ">
                    <Project :card="card "></Project>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import Project from './PortfolioSample'

    export default {
        name: 'portfolio',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {
            projects() {
                return this.$store.state.projects;
            }
        },
        components: {
            Project
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .centered-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>