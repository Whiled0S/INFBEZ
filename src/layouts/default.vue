<template>
  <div class="default-layout">
    <navbar/>

    <b-container>
      <slot />

      <sidebar />
    </b-container>
  </div>
</template>

<script>
import Sidebar from "@/components/limbs/Sidebar";
import Navbar from "@/components/limbs/Navbar";

export default {
  name: "DefaultLayout",
  components: { Navbar, Sidebar }
};
</script>

<style scoped>

</style>
