<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-btn color="primary" to="/">一覧に戻る</v-btn>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="4">
            <v-img :src="books[0].image"></v-img>
          </v-col>
          <v-col cols="8">
            <v-card-title>
              <b>{{ books[0].title }}</b>
            </v-card-title>
            読んだ日：{{ books[0].readDate }}
            感想：{{ books[0].memo }}
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </v-col>
    </v-row> -->
    {{ books }}
  </div>
</template>

<script>
export default {
  name: 'BookDetail',
  props:{
    books:Array
  },
}
</script>

<style>

</style>
