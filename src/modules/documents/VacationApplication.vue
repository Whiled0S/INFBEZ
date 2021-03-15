<template>
  <div>
    <h1 class="mb-5">Заявление о предоставлении отпуска</h1>
    <pdf-renderer document="/docs/vacation-application.pdf" />
  </div>
</template>

<script>
import PdfRenderer from "@/components/sahred/PdfRenderer";

export default {
  name: "VacationApplication",
  components: { PdfRenderer }
};
</script>

<style scoped>

</style>
