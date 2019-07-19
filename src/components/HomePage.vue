<template>
  <div class="HomePage orange lighten-2">
    <v-parallax src="https://i.pinimg.com/originals/a5/88/d7/a588d7f9019cd9313cb7728e685b0172.png" max-height="900">
    
      <v-layout align-center column justify-center fill-height>
       
        <v-flex xs12>
          <v-img src="http://www.pngmart.com/files/7/DNA-PNG-Image.png" class="mt-4" max-height="300" contain> </v-img>
          <v-layout column justify-center align-center>
            <span class="display-3 font-weight-heavy mt-3">OSIRIS</span>
            <span class="display-1 font-weight-light mt-2 text-xs-center">A template made website for education</span>       
          </v-layout>   
        </v-flex>
        
      </v-layout>
    
    </v-parallax>

    <v-container color="#ec5c2b">

      <v-layout row wrap justify-start class="py-4">

          <v-flex xs12 md6>
            <v-img src="https://www.shareicon.net/download/2016/11/15/853387_drawing_512x512.png" height="500" contain></v-img>
          </v-flex>

          <v-flex xs12 md6>

            <v-layout column align-center>
              
              <v-flex xs12>
                <h1 class="display-2 text-xs-center mb-3 white--text">About OSIRIS</h1>
              </v-flex>

              <v-flex xs12>
                <p class="font-weight-light headline text-xs-center white--text">
                  What is OSIRIS? OSIRIS is chatbot that uses simple natural language processing that allows user to visual their grades. Information about your education is displayed to be visually appealing. This includes graphs, grade point average calculations, information about missing assignments and much much more!
                </p>
              </v-flex>

            </v-layout>

          </v-flex>

        </v-layout>

        <v-divider></v-divider>

        <v-layout row wrap justify-start class="py-4">

          <v-flex xs12 md6>

            <v-layout column align-center>
              
              <v-flex xs12>
                <h1 class="display-2 text-xs-center mb-3 white--text">Download Education</h1>
              </v-flex>

              <v-flex xs12>
                <p class="font-weight-light headline text-xs-center white--text">
                    Looking for a Social Chatbot? Look no further, as OSIRIS provides grade point averages, missing assignments and stastical information about your grades and your current courses. Visualize your education as the future is now!
                </p>
              </v-flex>

              <v-flex xs12>
                <v-btn large class="light-blue lighten-3 white--text" @click="runChange('Forums-Page')">
                  <v-icon left>arrow_downward</v-icon>
                  <span>Download</span>
                </v-btn>
              </v-flex>

            </v-layout>

          </v-flex>

          <v-flex xs12 md6>
            <v-img src="https://www.shareicon.net/download/2016/09/07/826630_light_512x512.png" height="500" contain></v-img>
          </v-flex>

        </v-layout>

    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    })
  }
</script>

<style>

</style>
