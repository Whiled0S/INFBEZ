<template>
    <div class="py-4">
      <h1>{{ title }}</h1>

      <router-view />
    </div>
</template>

<script>
export default {
  name: 'Documents',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
