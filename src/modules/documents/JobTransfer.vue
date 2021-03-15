<template>
  <div>
    <h1 class="mb-5">Заявление о переводе на другую работу</h1>

    <pdf-renderer document="/docs/job-transfer.pdf" />
  </div>
</template>

<script>
import PdfRenderer from "@/components/sahred/PdfRenderer";

export default {
  name: "JobTransfer",
  components: { PdfRenderer }
};
</script>

<style scoped>

</style>
