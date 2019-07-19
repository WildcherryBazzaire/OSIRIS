<template>
  <v-app class="grey lighten-4">
    <v-content >
      <Tool-Bar />
      <component :is="currentComponent"> </component>
    </v-content>
  </v-app>
</template>

<script>
import {bus} from '@/main.js';
import HomePage from './components/HomePage';
import ToolBar from './components/ToolBar';
import Download from './components/Download';
export default {
  name: 'App',
  components: {
    'Home-Page': HomePage,
    'Tool-Bar': ToolBar,
    'Download-Page': Download
  },
  data () {
    return {
      currentComponent: 'Home-Page'
    }
  },
  created () {
    bus.$on("categoryChange", data => {
      this.currentComponent = data;
    });
  }
}
</script>
