<template>
  <v-app dark>
    <!-- Start Navigation Drawer -->
    <v-navigation-drawer right persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher>
      <v-list>
        <router-link :to="{name:'Home'}">
          <v-list-tile class="sidebar-tile">
            <v-list-tile-action>
              <v-icon class="sidebar-icon">fa-home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="sidebar-text-parent">
              <v-list-tile-title class="sidebar-text">home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link :to="{name:'Portfolio'}">
          <v-list-tile class="sidebar-tile">
            <v-list-tile-action>
              <v-icon class="sidebar-icon">fa-folder</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="sidebar-text-parent">
              <v-list-tile-title class="sidebar-text">portfolio</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link :to="{name:'Resume'}">
          <v-list-tile class="sidebar-tile">
            <v-list-tile-action>
              <v-icon class="sidebar-icon">fa-file-text</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="sidebar-text-parent">
              <v-list-tile-title class="sidebar-text">resume</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link :to="{name:'Skills'}">
          <v-list-tile class="sidebar-tile">
            <v-list-tile-action>
              <v-icon class="sidebar-icon">fa-cogs</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="sidebar-text-parent">
              <v-list-tile-title class="sidebar-text">skills</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <a href="//github.com/spencerhenze" target="_blank">
          <v-list-tile class="sidebar-tile">
            <v-list-tile-action>
              <v-icon class="sidebar-icon">fa-github</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="sidebar-text-parent">
              <v-list-tile-title id="github-icon" class="sidebar-text">github</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </a>
        <a href="//www.linkedin.com/in/spencer-henze-45a18887/" target="_blank">
          <v-list-tile class="sidebar-tile">
            <v-list-tile-action>
              <a href="">
                <v-icon class="sidebar-icon">fa-linkedin</v-icon>
              </a>
            </v-list-tile-action>
            <v-list-tile-content class="sidebar-text-parent">
              <v-list-tile-title class="sidebar-text">linkedin</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </a>

      </v-list>
    </v-navigation-drawer>
    <!-- End Navigation Drawer -->

    <!-- Start Toolbar where the hamburger thing is -->
    <v-toolbar fixed class="elevation-0 transparent">
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- End Toolbar -->

    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>

            <!--  Build Main Content Here: -->
            <router-view></router-view>
            <!-- Build Main Content Here -->

          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </main>


    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }

</script>

<style scoped>
  a {
    text-decoration: none;
    color: default;
  }

  .sidebar-icon {
    font-size: 2.5rem;
  }

  .sidebar-text {
    font-size: 1.5rem;
  }

  .sidebar-tile {
    margin-top: 15px;
  }

  .sidebar-text-parent {
    margin-left: 15px;
  }

  #github-icon {
    color: white;
  }
</style>