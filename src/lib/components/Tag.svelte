<script lang="ts">
  // Sets label to a string that should only contain the following values and sets the default value to draft
  export let label:
    | "draft"
    | "sent"
    | "current"
    | "late"
    | "paid"
    | "archived" = "draft";
</script>

<div
  class="text-md fond-bold w-20 rounded-full text-center capitalize "
  class:info={label === "draft"}
  class:success={label === "sent" || label === "current"}
  class:alert={label === "late"}
  class:archive={label === "paid" || label === "archived"}
>
  {label}
</div>

<!-- markup (zero or more items) goes here -->
<style lang="postcss">
  .info {
    @apply border-info text-info;
  }

  .success {
    @apply border-success bg-success text-success-content;
  }

  .alert {
    @apply border-error bg-error text-error-content;
  }

  .archive {
    @apply border-info bg-info text-white;
  }
</style>
