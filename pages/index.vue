<script setup>
// import { onMounted } from 'vue';
const longScrollElement = ref(null)

function scrollToFirstSection() {
  const firstSection = document.querySelector('.section')
  firstSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

let scrollTop = ref(0), longScroll = ref(0)

const handleScrollChange = (value) => {
  const longScrollStartingPosition = longScrollElement.value.offsetTop
  scrollTop.value = value

  if(value > longScrollStartingPosition && value < longScrollElement.value.offsetHeight) {
    console.log('yay im scrolling');
    longScroll.value = value - longScrollStartingPosition || 0
  }
}

// onMounted(() => {
//   document.addEventListener('scroll', () => {
//     const scrollY = window.scrollY
//     const titleElement = document.querySelector('.web-title h1')
    
//     if(scrollY !== 0 && scrollY < 80) {
//       let textShadow = ''
//       for(let i = 0; i < scrollY; i++) {
//         textShadow += `${i}px ${i}px black`

//         if(i < scrollY - 1) {
//           textShadow += ', '
//         }
//       }
//       titleElement.style.textShadow = textShadow
//     } else if(scrollY == 0) {
//       titleElement.style.textShadow = ''
//     }
// })
// })
</script>

<template>
  <div class="wrap">
    <Header @scrollChanged="handleScrollChange" />
    <main class="Main bg-yellow-light animate-[fadeIn_.3s_ease]">
      <div id="particles-wrapper">
        <MyParticles />
      </div>
      <div class="Hero h-screen bg-dark-gray overflow-hidden flex items-center">
        <div
          class="web-title font-poppins text-gray-main w-full text-center lg:text-left lg:mx-32 2xl:mx-72"
        >
          <h1
            class="leading-20 text-7xl font-jost opacity-0 animate-[slideUp_1s_ease_.3s_forwards]"
          >
            Hi! I'm Adrian
          </h1>
          <div
            class="badge font-inconsolata py-1.5 px-3 text-lg my-4 inline-block text-dark-gray bg-yellow-main opacity-0 animate-[slideUp_1s_ease_.6s_forwards]"
          >
            Fullstack developer
          </div>
          <p
            class="mx-auto lg:mx-0 mb-4 text-[2rem] md:max-w-[50vw] text-[#a1a79f] opacity-0 animate-[slideUp_1s_ease_.9s_forwards]"
          >
            This is my portfolio. Check out my stack and projects. Contact me
            anytime.
          </p>
          <button
            class="contact-button text-lg font-inconsolata border-[3px] border-yellow-main py-4 px-16 transition-[box-shadow] duration-300 hover:shadow-[inset_0_-65px] hover:shadow-yellow-main hover:text-dark-gray opacity-0 animate-[slideUp_1s_ease_1.2s_forwards]"
          >
            Contact me
          </button>
        </div>
      </div>

      <div class="polygon-clip bg-yellow-light border-yellow-light"></div>
      <div
        class="w-full scroll-down transform -translate-y-10 md:-translate-y-14 absolute text-center h-[5vh] z-[3]"
      >
        <font-awesome-icon
          class="icon animate-bounce-slow z-10 text-[2rem] text-dark-gray cursor-pointer"
          icon="fa-solid fa-chevron-down"
          @click="scrollToFirstSection"
        />
      </div>

      <div ref="longScrollElement" class="min-h-[400vh]">
        <div id="about-me" class="sticky top-8">
          <section
            id="about"
            class="section about px-4 pt-16 md:pt-8 flex justify-center gap-x-12 items-center pb-40 flex-col-reverse md:flex-row bg-yellow-light"
          >
            <div class="about__content flex-1">
              <h2
                class="content__name text-6xl my-12 md:mt-0 md:mb-8 text-dark-gray text-center md:text-left font-jost text-shadow"
              >
                Adrian Jaskot
              </h2>
              <p
                class="content__desc text-xl max-w-2xl px-4 md:px-0 text-justify md:text-left font-roboto"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                tristique suscipit vestibulum. Aenean eu justo id lorem tincidunt
                fermentum. Pellentesque pretium, urna non ullamcorper hendrerit,
                turpis tortor varius dui, sit amet euismod ante enim non mauris.
                Cras tempor ipsum eget nunc sollicitudin, non feugiat justo
                consectetur.
              </p>
            </div>
            <div class="about__photo w-80 text-center">
              <img
                loading="lazy"
                class="rounded-full w-80 h-80 inline-block"
                src="https://picsum.photos/200/300"
                alt="Jaskot Adrian"
              />
            </div>
          </section>

          <div id="stack" class="showcase-sections pb-32 md:pb-60 bg-yellow-light md:sticky md:top-[150px]">
            <Showcase :longScroll="longScroll" />
          </div>
        </div>
      </div>

      <div class="polygon-clip bg-dark-gray border-dark-gray"></div>
      <section
        id="projects"
        class="projects px-4 bg-dark-gray text-gray-main pt-8 md:pt-20 pb-80 overflow-x-hidden relative"
      >
        <Projects />
      </section>
    </main>
    <div id="about" class="min-h-[300vh]"></div>
    <div id="stack"></div>
    <div id="projects"></div>
    <div id="contact"></div>
  </div>
</template>

<style>
.slideUp-1-enter-active {
  animation: slideUp 1s;
  animation-delay: 0.3s;
}

.slideUp-2-enter-active {
  animation: slideUp 1s;
  animation-delay: 0.6s;
}

.slideUp-3-enter-active {
  animation: slideUp 1s;
  animation-delay: 0.9s;
}

.slideUp-4-enter-active {
  animation: slideUp 1s;
  animation-delay: 1.2s;
}

.slide-to-appear {
  transform: translateY(100%);
  opacity: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
