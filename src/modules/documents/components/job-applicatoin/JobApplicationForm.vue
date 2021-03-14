<template>
  <div>
    <div class="job-application-form mb-5">
      <b-form-group label="Тип организации">
        <b-form-input v-model="organizationType" />
      </b-form-group>

      <b-form-group label="Наименование организации">
        <b-form-input v-model="organizationName" />
      </b-form-group>

      <b-form-group label="Имя директора">
        <b-form-input v-model="director" />
      </b-form-group>

      <b-form-group label="Имя кандидата">
        <b-form-input v-model="employee" />
      </b-form-group>

      <b-form-group label="Адрес проживания кандидата">
        <b-form-input v-model="address" />
      </b-form-group>

      <b-form-group label="Должность">
        <b-form-input v-model="position" />
      </b-form-group>

      <b-form-group label="Дата начала работы">
        <b-form-input v-model="startDate" />
      </b-form-group>

      <b-form-group label="Дата заявления">
        <b-form-input v-model="currentDate" />
      </b-form-group>

      <b-form-group label="Фамилия кандидата">
        <b-form-input v-model="signature" />
      </b-form-group>
    </div>

    <slot
      :organizationType="organizationType"
      :organizationName="organizationName"
      :director="director"
      :employee="employee"
      :address="address"
      :position="position"
      :startDate="startDate"
      :currentDate="currentDate"
      :signature="signature"
    />
  </div>
</template>

<script>
export default {
  name: "JobApplicationForm",
  data() {
    return {
      organizationType: '',
      organizationName: '',
      director: '',
      employee: '',
      address: '',
      position: '',
      startDate: '',
      currentDate: '',
      signature: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.job-application-form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
}
</style>
