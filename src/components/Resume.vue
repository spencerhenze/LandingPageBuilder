<template>
    <div class="resume">
        <v-layout row>
            <v-flex xs12 class="text-xs-center">
                <h1>Resume</h1>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: 'resume',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
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
</style>