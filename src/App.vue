<template>
  <div id="app">
    <b-container fluid id='blue' >
      <b-row>
        <b-col>
          <img src="./assets/westminster_shorter.svg" height=auto width=800>
        </b-col>
      </b-row>
    </b-container >
    <b-container fluid style="padding-top:200px; padding-bottom:200px">
      <b-row>
        <b-col cols='4' offset='1'>
          <h4><b>Q. 1. What is the chief end of man?</b></h4>
        </b-col>
        <b-col cols='4' offset='2'>
          <h4>
          A. Man’s chief end is to glorify God, 
          <a v-b-popover.click="'Ps. 86:9; Isa. 60:21; Rom. 11:36; 1 Cor. 6:20; 10:31; Rev. 4:11'">
            [a]
          </a> 
          and to enjoy him for ever. 
          <a v-b-popover.click="'Ps. 16:5-11; 144:15; Isa. 12:2; Luke 2:10; Phil. 4:4; Rev. 21:3-4'" >
          [b]
          </a>
          </h4>
        </b-col>
      </b-row>
      
    </b-container>
    
    <b-container fluid id='blue' style="padding-top:200px; padding-bottom:200px">
      <b-row>
        <b-col cols='4' offset='1'>
          <h4><b>Q. 2. What rule hath God given to direct us how we may glorify and enjoy him?</b></h4>
        </b-col>
        <b-col cols='4' offset='2'>
          <h4>
          A. The Word of God, which is contained in the Scriptures of the Old and New Testaments,  
          <a v-b-popover.click="' Matt. 19:4-5 with Gen. 2:24; Luke 24:27, 44; 1 Cor. 2:13; 14:37; 2 Pet.1:20-21; 3:2, 15-16'">
            [a]
          </a> 
          is the only rule to direct us how we may glorify and enjoy him.
          <a v-b-popover.click="'Deut. 4:2; Ps. 19:7-11; Isa. 8:20; John 15:11; 20:30-31; Acts 17:11; 2 Tim. 3:15-17; 1 John 1:4'" >
          [b]
          </a>
          </h4>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid style="padding-top:200px; padding-bottom:200px">
      <b-row>
        <b-col cols='4' offset='1'>
          <h4><b>Q. 3. What do the Scriptures principally teach?</b></h4>
        </b-col>
        <b-col cols='4' offset='2'>
          <h4>
          A. The Scriptures principally teach what man is to believe concerning God,  
          <a v-b-popover.hover="'Gen. 1:1; John 5:39; 20:31; Rom. 10:17; 2 Tim. 3:15'">
            [a]
          </a> 
          and what duty God requires of man
          <a v-b-popover.hover="'Deut. 10:12-13; Josh. 1:8; Ps. 119:105; Mic. 6:8; 2 Tim. 3:16-17'" >
          [b]
          </a>
          </h4>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

#blue {
  background: #172937;
  color: white;
}

h1, h2 {
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
  color: #858170 !important;
}
</style>
