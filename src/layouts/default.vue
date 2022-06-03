<template>
  <header>
    <div class="wrapper">
      <Navbar :title="$site.title" :description="$site.description" />
    </div>
  </header>

  <slot />
</template>

<style>
@import '~/assets/base.css';


header {
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
