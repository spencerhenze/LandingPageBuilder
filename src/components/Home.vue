<template>
  <div class="home">
    <!-- parallax template -->
    <section class="cover-view">

      <v-container class="cover-page-container">

        <v-layout row>
          <v-flex xs12 class="white--text site-header">
            <img class="img-circle img-responsive profile-image" src="//res.cloudinary.com/dvh7zccln/image/upload/v1500728010/DSC_5330-Cropped_c8nvge.jpg"
              alt="">
            <h1 class=" text-xs-center white--text mb-2 display-3">Spencer Henze</h1>
            <vue-typer class="text--white typer-text" style="margin-top:15px" text="> Full-Stack Developer" repeat='0' pre-type-delay="1000"
              type-delay="70">
            </vue-typer>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12 class="site-header">
            <v-icon id="scroll-down-icon">mdi-chevron-down</v-icon>
          </v-flex>
        </v-layout>

      </v-container>
    </section>


    <section>

      <v-parallax class="parallax-image" src="//res.cloudinary.com/dvh7zccln/image/upload/v1506560973/SHP_0282_e5rzfg.jpg" :height="clientHeight">
        <v-container fluid grid-list-md class="transparent resume-highlights">

          <v-layout row text-center class="centered-container">
            <v-flex xs12 sm8 class="objective-statement">
              <v-card class="elevation-20">
                <v-card-media src="http://res.cloudinary.com/dvh7zccln/image/upload/v1507596361/icons/shutterstock_320549678.jpg" height="300">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <div class="headline white--text">Objective</div>
                      </v-flex>
                    </v-layout>
                  </v-container>

                </v-card-media>
                <v-card-actions class="white">
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon class="grey--text">share</v-icon>
                  </v-btn>
                </v-card-actions>

                <!-- description and counter displays -->
                <v-card-text>
                  To apply a solid 4-year education in business IT systems, along with 3.5 years of small business administration experience
                  to an Jr. level software developer position in a growing business that can benefit from a motivated and
                  business savvy team member who is excited to learn and continually add value to the company.
                  <v-layout row>
                    <v-flex xs12>
                      <router-link :to="{ name: 'Resume' }">
                        <v-btn primary dark style=" margin-top:20px; ">View Resume</v-btn>
                      </router-link>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap align-center>
        <v-flex xs12>
          <div class="text-xs-center">
            <h2 class="section-title">Recent Projects</h2>
          </div>
        </v-flex>
      </v-layout>
      <v-container fluid grid-list-md class="transparent">

        <v-layout row wrap text-center>

          <v-flex xs12 sm4 v-for="card in projects ">
            <PortfolioSample :card="card "></PortfolioSample>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12 class="centered-container">
            <router-link :to="{ name: 'Portfolio' }">
              <v-btn primary dark style=" margin:40px; ">View Portfolio</v-btn>
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>


    </section>

    <section>
      <v-parallax class="second-parallax-image" src="//res.cloudinary.com/dvh7zccln/image/upload/v1507676000/nathan-anderson-319341_oovuco.jpg"
        height="auto">
        <v-container grid-list-lg class="skills-preview-container">

          <v-layout column align-center>
            <v-flex xs12 class="my-3 ">
              <div class="text-xs-center ">
                <h2 class="section-title ">Primary Skills</h2>
                <span class="subheading ">
                  main tools and technologies
                </span>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-layout row wrap align-center class="skill-container">
                <v-flex xs12 sm6 md4 v-for="card in mainskills">
                  <skill :card="card"></skill>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout row class="all-skills-button">
            <v-flex xs12 class="centered-container">
              <router-link :to="{ name: 'Skills' }">
                <v-btn primary dark style=" margin:40px; ">All Skills</v-btn>
              </router-link>
            </v-flex>
          </v-layout>
        </v-container>

        </v-container>
      </v-parallax>
    </section>


    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5 ">
          <v-flex xs12 sm6 md4 lg3 class="contact-me-container">
            <v-card class="elevation-0 transparent ">
              <v-card-title primary-title class="layout justify-center ">
                <div class="section-title ">Contact me</div>
              </v-card-title>
              <v-card-text class="text-xs-center">
                I'm excited to talk more about how I can add value to your team. Contact me using any of the methods below.
              </v-card-text>
              <v-list class="transparent ">
                <a href="tel:2088715839">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2 ">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>208-871-5839</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </a>
                <a href="mailto:spencerhenze@gmail.com">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2 ">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>spencerhenze@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </a>
                <a href="https://www.linkedin.com/in/spencer-henze-45a18887">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2 ">fa-linkedin</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>linkedin</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </a>


                <a href="https://github.com/spencerhenze">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2 ">fa-github</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>github/spencerhenze</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </a>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

  </div>
</template>

<script>
  import Resume from './Resume'
  import PortfolioSample from './PortfolioSample'
  import Skill from './Skill'

  function CalcClientHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight)
  }

  export default {
    name: 'home',
    data() {
      return {
        clientHeight: CalcClientHeight()
      }
    },
    components: {
      Resume,
      PortfolioSample,
      Skill
    },
    mounted() {
    },
    computed: {
      projects() {
        return this.$store.state.projects;
      },
      mainskills() {
        return this.$store.state.mainskills;
      }
    }
  }

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style>
  a :hover {
    text-decoration: none;
  }

  .section-title {
    font-size: 2.5rem;
    margin-top: 4rem;
  }

  .typer-text {
    font-size: 1.6rem;
  }

  .cover-page-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .resume-highlights {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .objective-statement {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skills-preview-container {
    display: flex;
    flex-direction: column;
  }

  .skills-title-row {
    /* background: white; */
    height: auto;
    margin-left: -10px;
    margin-right: -10px;
  }

  .skill-container {
    /* display: flex;
    align-items: baseline; */
  }

  .all-skills-button {
    /* align-self: center; */
  }

  .section-subtitle {
    font-size: 2rem;
    /* color:dimgray; */
    box-shadow: 2em
  }

  #scroll-down-icon {
    font-size: 4rem;
    margin-bottom: 15px;
  }

  .site-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  .profile-image {
    max-height: 220px;
    max-width: auto;
    margin-top: 45px;
    margin-left: auto;
    margin-right: auto;
  }

  .vue-typer {
    font-family: monospace;
    color: white;
  }

  .vue-typer .custom.char.typed {
    color: white;
  }

  .vue-typer .custom.char {
    color: #D4D4BD;
  }


  .vue-typer .custom.caret {
    width: 10px;
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

  .parallax-image {
    margin-left: -24px !important;
    margin-right: -24px !important;
  }

  .second-parallax-image {
    margin-left: -24px !important;
    margin-right: -24px !important;
    display: cover;
  }

  .project-card {
    width: 100%
  }

  .cover-view {
    height: 100vh;
  }

  .contact-me-container {
    display: flex;
    flex-direction: column;
  }
</style>