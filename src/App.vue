<template>
  <v-app light>
    <v-navigation-drawer right persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher>
      <v-list>
          <v-list-tile class="sidebar-tile">
              <v-list-tile-action>
                <a href="">
                  <v-icon class="sidebar-icon">fa-home</v-icon>
                </a>
              </v-list-tile-action>
              <v-list-tile-content class="sidebar-text-parent">
                <v-list-tile-title class="sidebar-text">home</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
    
        <v-list-tile class="sidebar-tile">
          <v-list-tile-action>
            <a href="">
              <v-icon class="sidebar-icon">fa-folder</v-icon>
            </a>
          </v-list-tile-action>
          <v-list-tile-content class="sidebar-text-parent">
            <v-list-tile-title class="sidebar-text">portfolio</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="sidebar-tile">
          <v-list-tile-action>
            <a href="">
              <v-icon class="sidebar-icon">fa-file-text</v-icon>
            </a>
          </v-list-tile-action>
          <v-list-tile-content class="sidebar-text-parent">
            <v-list-tile-title class="sidebar-text">resume</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="sidebar-tile">
          <v-list-tile-action>
            <a href="">
              <v-icon class="sidebar-icon">fa-cogs</v-icon>
            </a>
          </v-list-tile-action>
          <v-list-tile-content class="sidebar-text-parent">
            <v-list-tile-title class="sidebar-text">skills</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="sidebar-tile">
          <v-list-tile-action>
            <a href="//github.com/spencerhenze" target="_blank">
              <v-icon light class="sidebar-icon">fa-github</v-icon>
            </a>
          </v-list-tile-action>
          <v-list-tile-content class="sidebar-text-parent">
            <v-list-tile-title class="sidebar-text">github</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
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
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="elevation-0 transparent">
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-btn
        icon
        light
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        light
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        light
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn
        icon
        light
        
        @click.stop="drawer = !drawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>

            <!--  Build Main Content Here: -->
            <router-view></router-view>

          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
    > 
    <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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
</style>