<template>
  <div class="py-5 text-center">
    <h1>This is a home page</h1>

    <b-button
      v-b-toggle.sidebar
      variant="success"
    >Show menu
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>
