<script lang="ts">
  // Sets label to a string that should only contain the following values and sets the default value to draft
  export let label:
    | "draft"
    | "sent"
    | "current"
    | "late"
    | "paid"
    | "archived" = "draft";
  export let className = "";
</script>

<div
  class={`text-md fond-bold w-20 rounded-full text-center capitalize ${className}`}
  class:info={label === "draft"}
  class:success={label === "sent" || label === "current"}
  class:alert={label === "late"}
  class:archive={label === "paid" || label === 'archived'}
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
    @apply justify-center border-error bg-error p-0 text-center text-error-content;
  }

  .archive {
    @apply border-info bg-info text-white;
  }
</style>
