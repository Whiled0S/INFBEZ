<template>
  <embed :src="document" />
</template>

<script>
export default {
  name: "PdfRenderer",
  props: {
    document: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
embed {
  width: 100%;
  height: 1000px;
}
</style>
