<template>
  <div class="card has-background-dark p-4 mb-5">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          :placeholder="props.placeholder"
          ref="textareaRef"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          maxlength="100"
          v-autofocus
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

// * defining props
// * props from v-model
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

// * handling emits
const emit = defineEmits(["update:modelValue"]);

// * focus textarea
const textareaRef = ref(null);

const focusTextarea = () => {
  textareaRef.value.focus();
};

// * you need to expose a function of a child component to be able the parent component
// * to have an access.
defineExpose({
  focusTextarea,
});

//* Directive
</script>
