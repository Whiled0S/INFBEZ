<template>
  <div>
    <h1 class="mb-5">Заявление о приеме на работу</h1>

    <pdf-renderer document="/docs/job-application.pdf" />
  </div>
</template>

<script>
import PdfRenderer from "@/components/sahred/PdfRenderer";

export default {
  name: "JobApplication",
  components: { PdfRenderer }
};
</script>

<style scoped>

</style>
