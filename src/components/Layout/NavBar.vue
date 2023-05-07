<template>
  <nav aria-label="main navigation" class="navbar is-dark" role="navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-5 is-family-monospace">Noteballs</RouterLink>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          aria-expanded="false"
          aria-label="menu"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          data-target="navbarBasicExample"
          role="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showMobileNav }" id="navbarBasicExample">
        <div class="navbar-end">
          <RouterLink
            @click="showMobileNav = !showMobileNav"
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Notes
          </RouterLink>
          <RouterLink
            @click="showMobileNav = !showMobileNav"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

//! mobile nav
const showMobileNav = ref(false);
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
