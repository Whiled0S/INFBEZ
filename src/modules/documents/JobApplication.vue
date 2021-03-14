<template>
  <div class="job-application">
    <h1 class="mb-5">Заявление о приеме на работу</h1>

    <job-application-form>
      <template #default="props">
        <job-application-template v-bind="props" />
      </template>
    </job-application-form>
  </div>
</template>

<script>
import JobApplicationTemplate from "@/modules/documents/components/job-applicatoin/JobApplicationTemplate";
import JobApplicationForm from "@/modules/documents/components/job-applicatoin/JobApplicationForm";

export default {
  name: "JobApplication",
  components: { JobApplicationForm, JobApplicationTemplate }
};
</script>

<style scoped>

</style>
