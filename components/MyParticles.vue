<script setup>
import { onMounted } from 'vue';
import { loadFull } from 'tsparticles'

const options = {
  fpsLimit: 120,
  particles: {
    color: {
      value: '#ffffff',
    },
    move: {
      direction: 'top',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  delay: 0,
  detectRetina: true,
  fullScreen: { enable: false }
}

onMounted(() => {
  document.querySelector('#tsparticles').classList.add('animate-[fadeIn_5s_ease]')
})

async function particlesInit(engine) {
  await loadFull(engine)
}
</script>

<template>
  <Particles
    id="tsparticles"
    class="h-screen absolute"
    :particlesInit="particlesInit"
    :options="options"
  />
</template>