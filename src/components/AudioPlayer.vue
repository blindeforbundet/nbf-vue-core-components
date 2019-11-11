<template>
<div>
    <progress></progress>
    <progress max="100" value="80"></progress>

    </div>
</template>

<style scoped>
progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
   appearance: none;

  width: 250px;
  height: 20px;
}

progress[value]::-webkit-progress-value::before {
  content: '80%';
  position: absolute;
  right: 0;
  top: -125%;
}
</style>