<template>
  <b-sidebar
    id="sidebar"
    title="Меню"
    backdrop
  >
    <div class="py-2">
      <b-nav vertical>
        <b-nav-item to="/">Руководство пользователя</b-nav-item>
        <b-nav-item to="/documents/job-application">Заявление о приеме на работу</b-nav-item>
      </b-nav>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>

</style>
