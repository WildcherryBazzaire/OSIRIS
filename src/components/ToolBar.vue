<template>
  <nav>

    <v-toolbar flat app class="orange lighten-2">
        <!-- <v-toolbar-side-icon class="white--text" @click="drawer = !drawer"></v-toolbar-side-icon> -->
        
        <v-toolbar-title class="text-uppercase white--text" @click="runChange('Home-Page')" style="cursor: pointer"> <!--Title stuff for vool toolbar-->
            <span class="display-1">OSIRIS</span>
            <span class="subheading font-weight-thin">Jeraldy Cascayan</span>
        </v-toolbar-title>

        <v-spacer> </v-spacer> <!--Fills up all  availble room-->

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="item in toolBarItems" :key="item.title" flat color="white" class="px-5" @click="runChange(item.link)">
                <v-icon left>{{item.icon}}</v-icon>
                <span>{{item.title}}</span>
            </v-btn>
        </v-toolbar-items>

    
    </v-toolbar>
  
  </nav>
</template>

<script>
import {bus} from '@/main.js'
export default {
  name: 'ToolBar',
  data () {
    return {
      toolBarItems: [
        //   {title:'About',icon:'info',link:'Download-Page'},
          {title:'Download',icon:'arrow_downward',link:'Download-Page'}
      ]
    }
  },
  methods: {
      runChange(toWhat) {
          bus.$emit("categoryChange",toWhat);
      }
  }
}
</script>
