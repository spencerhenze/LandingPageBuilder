<template>
    <v-card class="project-card">
        <!-- picture & Title -->
        <a :href="card.link" target="_blank">
            <img :src="card.image" alt="img" class="img-responsive">
        </a>

        <!-- button row -->
        <v-card-actions class="white">
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon class="grey--text">share</v-icon>
            </v-btn>
        </v-card-actions>

        <!-- description and counter displays -->
        <v-card-text>
            <v-layout row>
                <v-flex xs12 class="card-text">
                    <span class="headline white--text" v-text="card.title"></span>
                    <span class="white--text" v-text="card.description"></span>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6 sm3 v-for="icon in card.icons" class="tech-icon-container">
                    <img :src="icon.path" alt="tech" class="tech-icon img-responsive">
                    <span v-text="icon.name"></span>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>


</template>

<script>
    function CalculateModalW() {
        var vw = Math.max(document.documentElement.clientWidth, window.innerWidth)
        if (vw <= 600) {
            return "90%"
        }
        else if (600 < vw && vw <= 768) {
            var width = (-45 / 302) * vw + (25140 / 151)
            return width.toString() + "%";
        }
        else if (768 < vw && vw <= 1264) {
            var width = (-35 / 302) * vw + (25140 / 151)
            return width.toString() + "%";
        }
        else if (vw > 1264) {
            return "25%"
        }
    }

    function CalcMinImgH() {
        var vw = Math.max(document.documentElement.clientWidth, window.innerWidth)
        return .45 * vw + 'px'
    }


    export default {
        name: 'portfoliosample',
        data() {
            return {
                viewWidth: CalculateModalW(),
                minImgHeight: CalcMinImgH(),
                // dialog: false,
                selectedVault: null
            }
        },
        components: {
        },
        props: [
            "card"
        ],
        methods: {
        },
        computed: {
            projects() {
                return this.$store.state.projects;
            },
        },
        mounted() {
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .project-card {
        min-height: 500px !important;
    }


    .modal-image {
        height: 50vh !important;
    }

    h1,
    h2 {
        font-weight: normal;
    }

    .tech-icon-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .tech-icon {
        max-height: 50px;
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

    .bottom-icons {
        margin-left: 15px;
        margin-right: 0.8rem;
        margin-bottom: 10px;
    }

    .save-button {
        width: 100%;
    }

    .chip-keep {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
        margin-right: 10px;
    }

    .chip-keep-expanded {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1.1rem;
        margin-right: 1.5rem;
        margin-left: 3rem;
    }

    .counters-expanded {
        margin-left: 1.1rem;
    }

    .card-text {
        display: flex;
        flex-direction: column;
    }

    .save-menu-header {
        display: flex;
        align-items: flex-start;
    }
</style>