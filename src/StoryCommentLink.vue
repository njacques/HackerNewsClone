<template>
  <router-link :to="'/item/' + id">
    <template v-if="count > 0">
      {{ count }} {{ count > 1 ? 'comments' : 'comment' }}
    </template>
    <template v-else>discuss</template>
  </router-link>
</template>

<script>
export default {
  props: ["id", "count"]
};
</script>
