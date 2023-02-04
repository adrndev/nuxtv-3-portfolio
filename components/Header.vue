<script setup>
import { ref, onMounted, watch } from 'vue'
const emit = defineEmits(['scrollChanged'])

let scrollTop = ref(0), scrolled = ref(false)
const menuItems = [
  {
    title: 'About',
    anchor: '#about',
  },
  {
    title: 'Stack',
    anchor: '#stack',
  },
  {
    title: 'My projects',
    anchor: '#projects',
  },
  {
    title: 'Contact me',
    anchor: '#contact',
  },
]

let overScroll = ref(0)

function handleScroll() {
  scrollTop.value = document.documentElement.scrollTop

  const itemElements = document.querySelectorAll('.Header .menu .menu-item a')
  const activeSection = Array.from(itemElements).reverse().find((item) => {
    const section = document.querySelector(item.getAttribute('href'))

    return scrollTop.value + window.innerHeight / 2 > section.offsetTop &&
    scrollTop.value + window.innerHeight / 2 <
    section.offsetTop + section.offsetHeight
  })

  itemElements.forEach(el => el.parentElement.classList.remove('active'))

  activeSection?.parentElement.classList.add('active')

  emit('scrollChanged', scrollTop.value)

  if(scrollTop.value > 300) {
    overScroll.value++
    document.body.scrollTo({ y: 300 })
  }



  // document.querySelectorAll('.Header .menu .menu-item a').forEach((item) => {
  //   const section = document.querySelector(item.getAttribute('href'))



  //   if (
  //     scrollTop.value + window.innerHeight / 2 > section.offsetTop &&
  //     scrollTop.value + window.innerHeight / 2 <
  //       section.offsetTop + section.offsetHeight
  //   ) {
  //     item.parentElement.classList.add('active')
  //     activeFound = true
  //   } else {
  //     item.parentElement.classList.remove('active')
  //   }
  // })
}

function scrollTo(ev) {
  ev.preventDefault()

  const hash = ev.target.hash
  const element = document.querySelector(hash)

  if (element.offsetHeight > window.innerHeight - 150) {
    window.scroll({ top: element.offsetTop - 150, behavior: 'smooth' })
  } else {
    window.scroll({
      top:
        element.offsetTop - window.innerHeight / 2 + element.offsetHeight / 2,
      behavior: 'smooth',
    })
  }
}

watch(scrollTop, (value) => {
    scrolled.value = value > 120
})

onMounted(() => {
  handleScroll()
  document.addEventListener('scroll', () => {
    handleScroll()
  })
})
</script>

<template>
  <header
    class="Header sticky text-gray-main transition-colors duration-300 bg-[transparent] top-0 z-[100] mt-[-80px] md:mt-[-100px] box-border h-[80px] md:h-[100px] text-[1.5rem] max-h-[120px]"
    :class="{ scrolled }"
  >
    <div
      class="header-wrapper px-8 md:px-24 font-inconsolata flex justify-between h-full items-center transition-[margin-top] duration-300"
    >
      <div class="logo-wrapper">
        <Logo :class="{ dark: scrolled }"/>
        <!-- <img src="@/assets/images/logo.svg" class="w-full h-auto" alt="Logo of Adrian Jaskot's portfolio"> -->
      </div>
      <nav class="menu hidden md:block">
        <ul class="menu-list flex">
          <li
            v-for="item in menuItems"
            :key="item.title"
            class="menu-item ml-4 relative"
          >
            <a :href="item.anchor" @click="scrollTo">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.Header {
  &.scrolled {
    @apply text-dark-gray;

    &::before {
      @apply content-[''] bg-yellow-main absolute left-0 top-0 h-full w-full z-[-1] animate-[slideDown_.3s];
    }
  }

  .menu .menu-list .menu-item.active::before {
    @apply content-[''] absolute left-0 top-1/2 h-[2px] bg-black animate-[slideRight_.3s_forwards] pointer-events-none;
  }
}
</style>
