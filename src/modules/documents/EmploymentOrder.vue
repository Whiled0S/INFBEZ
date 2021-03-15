<template>
  <div>
    <h1 class="mb-5">Приказ о приеме на работу</h1>

    <pdf-renderer document="/docs/employment-order.pdf"/>
  </div>
</template>

<script>
import PdfRenderer from "@/components/sahred/PdfRenderer";

export default {
  name: "EmploymentOrder",
  components: { PdfRenderer }
};
</script>

<style scoped>

</style>
