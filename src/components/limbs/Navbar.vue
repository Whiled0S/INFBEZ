<template>
  <b-navbar>
    <b-container>
      <button
        v-b-toggle.sidebar
        v-b-tooltip.hover.right="'Открыть меню'"
        class="navbar__menu-button"
      >
        <b-icon icon="list" font-scale="2" />
      </button>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.navbar {

  &__menu-button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }
}
</style>
