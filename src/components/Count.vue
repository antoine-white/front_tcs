<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <b-button id="tooltip-target-1" @click="increment">increment</b-button>
    <b-tooltip  target="tooltip-target-1" triggers="hover">
      Click here to increment the counter
    </b-tooltip>
  </div>
</template>

<script>
  export default {
    name:"Count",
    data: () => ({
      count: 0,
    }),

    methods: {
      increment() {
        this.count++
      },
    },
  }
</script>