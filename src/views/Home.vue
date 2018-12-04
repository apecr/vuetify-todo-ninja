<template>
  <div class="home">
    <h1>Homepage</h1>
    
    <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed color="pink">click me</v-btn>
    <v-btn color="pink" flat>click me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>email me</span>
      <v-icon right large>email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>

  </div>
</template>

<script>
export default {};
</script>
