<template>
    <div class="Download orange lighten-2" style="height:100%">
        <v-container fill-height>

            <v-layout column justify-center align-center>
                
                <v-flex xs12 md6>
                    <v-img src="http://www.pngmart.com/files/7/DNA-PNG-Image.png" min-height="250px" min-width="250px" class="mb-4"></v-img>
                
                </v-flex>

                <v-flex xs12 md>

                    <span class="display-3 white--text">Counselling Rethought</span>

                </v-flex>

                <v-flex>
                    <v-btn color="blue lighten-3" large class="white--text">Download</v-btn>
                </v-flex>

            </v-layout>

        </v-container>
    </div>
</template>

<script>
export default {
  name: 'ToolBar',
  components: {
  },
  data () {
    return {
      toolBarItems: [
          {title:'About',icon:'info'},
          {title:'Download',icon:'arrow_downward'}
      ]
    }
  },
}
</script>
