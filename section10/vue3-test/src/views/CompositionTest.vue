<template>
  <div>
    {{ name }}
    {{ age }}歳
    <div>
      <p>ref: {{ nameRef }}</p>
      <p>reactice: {{ book.title }}</p>
      <p>reactice: {{ book.author[0] }}</p>
    </div>
    <div>
      <p>toref: {{ title }}</p>
      <p>toref: {{ author[0] }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'

export default {
  setup() {
    let name = 'スズキ';
    const age = 30;

    // ref
    const nameRef = ref('田中');
    const book = reactive({
      title: 'タイトル',
      author: ['大谷', '伊藤']
    })

    const bookToRefs = reactive({
      title: 'タイトル2',
      author: ['大谷2', '伊藤2']
    })

    console.log('setup');
    console.log(this);
    console.log(nameRef);
    console.log(nameRef.value);
    return { name, age, nameRef, book, ...toRefs(bookToRefs) }
  },
  data() {
    return {
      number: 1,
      sports: 'サッカー'
    }
  },
  created() {
    console.log('created');
    console.log(this);
  },
  mounted() {
    console.log('mouted');
    console.log(this);
  }
}
</script>
