<template>
  <div class="about">
    <form>
      <label>{{ 'Language' }}</label>
      <select v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="es">es</option>
      </select>
    </form>
    <h1>{{ $t('hello') }}</h1>
    <h4>{{ $t('about.message') }}</h4>
  </div>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
  