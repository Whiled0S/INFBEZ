<template>
  <div>
    <h1 class="mb-5">Заявление об увольнении</h1>

    <pdf-renderer document="/docs/resignation-application.pdf" />
  </div>
</template>

<script>
import PdfRenderer from "@/components/sahred/PdfRenderer";

export default {
  name: "ResignationApplication",
  components: { PdfRenderer }
};
</script>

<style scoped>

</style>
