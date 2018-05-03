<template>
  <span>
    <template v-if="url">
      <a :href="url"><slot></slot></a>
      (<router-link :to="'/story/' + id">{{ url | domain }}</router-link>)
    </template>

    <router-link v-else :to="'/story/' + id"><slot></slot></router-link>
  </span>
</template>

<script>
import parseDomain from "parse-domain";

export default {
  props: ["id", "url"],
  filters: {
    domain(value) {
      if (!value) return value;
      const { domain, tld } = parseDomain(value);
      return `${domain}.${tld}`;
    }
  }
};
</script>

