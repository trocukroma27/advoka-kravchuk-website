<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from "#ui/types";
import type { ContactFormData } from "~/types";

const { t } = useI18n();
const toast = useToast();

const state: ContactFormData = reactive({
  name: "",
  email: "",
  message: "",
});

const validate = (state: ContactFormData): FormError[] => {
  const errors = [];
  if (!state.name.trim())
    errors.push({ path: "name", message: t("contacts_page.form_errors.name") });

  if (!isValidEmail(state.email.trim())) {
    errors.push({
      path: "email",
      message: state.email.trim().length
        ? t("contacts_page.form_errors.email_invalid")
        : t("contacts_page.form_errors.email"),
    });
  }

  if (state.message.trim().length < 10)
    errors.push({
      path: "message",
      message: t("contacts_page.form_errors.message", { number: 10 }),
    });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<ContactFormData>) {
  const response = await $fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify(event.data),
  });

  if (response.success) {
    toast.add({
      title: t("sending_form_succes"),
      color: "green",
    });
  } else {
    toast.add({
      title: t("error"),
      description: t("sending_form_error"),
      color: "red",
    });
  }
}
</script>

<template>
  <div
    class="max-w-2xl p-12 pb-8 border rounded-md border-gray-200 dark:border-gray-700"
  >
    <h3 class="text-2xl fond-bold text-gray-900 dark:text-gray-100">
      {{ $t("contacts_page.have_any_question") }}
    </h3>
    <p class="mt-4 text-gray-700 dark:text-gray-300 font-thin text-sm italic">
      {{ $t("contacts_page.contact_form_description") }}
    </p>
    <UForm
      :validate="validate"
      :state="state"
      class="mt-8 space-y-4"
      @submit="onSubmit"
    >
      <div class="flex gap-x-6 gap-y-4 flex-wrap">
        <UFormGroup
          :label="$t('contacts_page.name')"
          name="name"
          class="basis-56 grow"
        >
          <UInput v-model="state.name" />
          <template #error="{ error }">
            <p class="text-xs">{{ error }}</p>
          </template>
        </UFormGroup>

        <UFormGroup
          :label="$t('contacts_page.email')"
          name="email"
          class="basis-56 grow"
        >
          <UInput v-model="state.email" />
          <template #error="{ error }">
            <p class="text-xs">{{ error }}</p>
          </template>
        </UFormGroup>
      </div>

      <UFormGroup :label="$t('contacts_page.message')" name="message">
        <UTextarea v-model="state.message" :rows="5" />
        <template #error="{ error }">
          <p class="text-xs">{{ error }}</p>
        </template>
      </UFormGroup>

      <UButton type="submit" block class="!mt-8" size="lg">{{
        $t("contacts_page.send_message")
      }}</UButton>
    </UForm>
  </div>
</template>
