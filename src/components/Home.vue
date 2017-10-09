<template>
  <div class="home">
    <!-- parallax template -->
    <section class="cover-view">
      
      <v-container justify-space-between class="cover-page-container">
        
        <v-layout row>
          <v-flex xs12 class="white--text site-header">
            <img class="img-circle img-responsive profile-image" src="//res.cloudinary.com/dvh7zccln/image/upload/v1500728010/DSC_5330-Cropped_c8nvge.jpg"
              alt="">
            <h1 class=" text-xs-center white--text mb-2 display-3">Spencer Henze</h1>
            <vue-typer class="headline mb-3 text-xs-center" style="margin-top:15px" text="> Full-Stack Developer" repeat='0' pre-type-delay="1000"
              type-delay="70">
            </vue-typer>
            <!-- <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
                Get Started
              </v-btn> -->
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12 class="site-header">
            <v-icon large>mdi-chevron-down</v-icon>
          </v-flex>
        </v-layout>

      </v-container>
    </section>


    <section>
      <v-parallax class="parallax-image" src="//res.cloudinary.com/dvh7zccln/image/upload/v1506560973/SHP_0282_e5rzfg.jpg" height="800">
        <v-layout row text-center>
          <v-flex xs12>
            <h3 class="white--text mb-3 mt-5">Recent Projects</h3>
            <em>See what i've been up to</em>
          </v-flex>
        </v-layout>


        <v-layout row wrap text-center>

          <v-flex xs12 sm3 offset-sm1>
            <v-card class="elevation-24 grey project-card">
              <v-card-media src="http://res.cloudinary.com/dvh7zccln/image/upload/v1506626855/Kanban_iyyooc.png" height="250px"></v-card-media>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">Kanban</div>
              </v-card-title>
              <v-card-text>
                <img src="../assets/icons/vuejs.png">
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
          See More
        </v-btn>

        <!-- <v-layout row></v-layout> -->
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Recent Projects</h2>
            <span class="subheading">
                See what I've been up to 
              </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Material Design</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum
                    tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Fast development</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum
                    tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum
                    tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>


    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum
                tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>208-871-5839</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
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

  export default {
    name: 'home',
    data() {
      return {
      }
    },
    components: {
      Resume
    },
    mounted() {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .cover-page-container {
    height: 100%;
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

  .project-card {
    width: 100%
  }

  .cover-view {
    height: 100vh;
  }
  /* @media screen and (min-width: 1024px) {
    .cover-view {
      height: 70vh;
    }
  } */
</style>