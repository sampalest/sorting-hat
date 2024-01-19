<template>
  <nav v-if="$route.name == 'chat'">
    <div class="align-middle title">
      <span class="first">SORTING</span>
      <span class="second">HAT</span>
    </div>
  </nav>
  <router-view/>
</template>
