<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">C - M - S</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/"
              >Create Campaign</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/campaigns"
              >Campaigns List</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>
