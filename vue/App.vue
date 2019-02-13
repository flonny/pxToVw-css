<template>
  <div>
    <button-counter></button-counter>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.component('button-counter',{
    name: 'buttonCounter',
    data() {
      return {
        count: 0
      }
    },
    templete: `<button @click="count++">you click me {{count}} times</button>`
  })
export default {
    components: {
        buttonCounter
    }
}
</script>