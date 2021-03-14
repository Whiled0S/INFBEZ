<template>
  <div class="job-application-template">
    <div class="job-application-template__header">
      <span>Директору {{ organizationType | placeholder }} «{{ organizationName | placeholder }}»</span>
      <span>{{ director | placeholder }}</span>
      <span>от {{ employee | placeholder }}</span>
      <span>проживающего по адресу:</span>
      <span>{{ address | placeholder }}</span>
    </div>

    <br>
    <br>

    <div class="job-application-template__content">
      <span>Заявление</span><br>
      <span>Прошу принять меня на работу на должность «{{ position | placeholder }}» с {{
          startDate | placeholder
        }}.</span>
    </div>

    <br>
    <br>

    <div class="job-application-template__footer">
      <span>{{ currentDate | placeholder }}</span>
      <span>{{ signature | placeholder }}</span>
    </div>
  </div>
</template>

<script>
const placeholder = '_______';

export default {
  name: "JobApplicationTemplate",
  filters: {
    placeholder(value) {
      return value.length ? value : placeholder;
    }
  },
  props: {
    organizationType: {
      type: String,
      default: placeholder
    },
    organizationName: {
      type: String,
      default: placeholder
    },
    director: {
      type: String,
      default: placeholder
    },
    employee: {
      type: String,
      default: placeholder
    },
    address: {
      type: String,
      default: placeholder
    },
    position: {
      type: String,
      default: placeholder
    },
    startDate: {
      type: String,
      default: placeholder
    },
    currentDate: {
      type: String,
      default: placeholder
    },
    signature: {
      type: String,
      default: placeholder
    }
  }
};
</script>

<style lang="scss" scoped>
.job-application-template {
  max-width: 800px;
  margin: 0 auto;
  font-family: "Times New Roman", serif;
  font-size: 20px;
  line-height: 1.5;

  &__header {
    text-align: right;

    span {
      display: block;
    }
  }

  &__content {
    text-align: center;

    span {
      display: block;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
