<template>
    <v-card class="elevation-20 skill-card">
        <v-card-text class="text-xs-center skill-img-container">
            <img :src="card.img" class="img-responsive skill-img">
            <!-- <v-progress-circular
                :size="80"
                :width="15"
                :rotate="-90"
                :value="card.value"
                color="primary"
                class="blue--text "
                >
                {{ card.value }}%
              </v-progress-circular> -->
        </v-card-text>
        <v-card-title primary-title class="layout justify-center ">
            <div class="headline text-xs-center ">{{card.title}}</div>
        </v-card-title>

        <v-card-text>
            {{card.description}}

        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: 'skill',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        props: [
            "card"
        ]
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


    .skill-img-container {
        display: flex;
        justify-content: center;
    }

    .skill-img {
        max-height: 80px;
        max-width: 80px;
    }

    .skill-card {
        height: 320px !important;
    }
</style>