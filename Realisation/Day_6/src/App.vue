<template>
  <div id="app">
    <Form @submit="onSubmit">
      <Field name="email" type="email" :rules="validateEmail" />
      <ErrorMessage name="email" />
      <Field name="password" type="password" :rules="validatePassword" />
      <ErrorMessage name="password" />

      <button>Sign up for newsletter</button>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";

const onSubmit = (values) => {
  console.log(values);
};

const validateEmail = (value) => {
  if (!value) {
    return "This field is required";
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "This field must be a valid email";
  }

  return true;
};

const validatePassword = (value) => {
  if (!value) {
    return "This field is required";
  }

  if (value.length < 8) {
    return "This field must be at least 8 characters";
  }

  return true;
};
</script>
