<script setup>
const sections = [
  {
    title: 'Stack',
    items: [
      {
        title: 'HTML5',
        path: 'html5/html5-original.svg',
      },
      {
        title: 'CSS3',
        path: 'css3/css3-original.svg',
      },
      {
        title: 'TailwindCSS',
        path: 'tailwindcss/tailwindcss-plain.svg',
      },
      {
        title: 'Javascript',
        path: 'javascript/javascript-original.svg',
      },
      {
        title: 'Typescript',
        path: 'typescript/typescript-original.svg',
      },
      {
        title: 'NodeJs',
        path: 'nodejs/nodejs-original.svg',
      },
      {
        title: 'Express',
        path: 'express/express-original.svg',
      },
      {
        title: 'VueJs',
        path: 'vuejs/vuejs-original.svg',
      },
      {
        title: 'NuxtJs',
        path: 'nuxtjs/nuxtjs-original.svg',
      },
      {
        title: 'Sass',
        path: 'sass/sass-original.svg',
      },
      {
        title: 'GraphQL',
        path: 'graphql/graphql-plain.svg',
      },
      {
        title: 'PHP',
        path: 'php/php-original.svg',
      },
      {
        title: 'Symfony',
        path: 'symfony/symfony-original.svg',
      },
      {
        title: 'MongoDB',
        path: 'mongodb/mongodb-original.svg',
      },
      {
        title: 'Postgresql',
        path: 'postgresql/postgresql-original.svg',
      },
      {
        title: 'MySQL',
        path: 'mysql/mysql-original.svg',
      },
      {
        title: 'Jest',
        path: 'jest/jest-plain.svg',
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        title: 'Photoshop',
        path: 'photoshop/photoshop-plain.svg',
      },
      {
        title: 'Illustator',
        path: 'illustrator/illustrator-plain.svg',
      },
      {
        title: 'Figma',
        path: 'figma/figma-original.svg',
      },
      {
        title: 'Heroku',
        path: 'heroku/heroku-original.svg',
      },
      {
        title: 'Linux',
        path: 'linux/linux-original.svg',
      },
      {
        title: 'Bash',
        path: 'bash/bash-original.svg',
      },
      {
        title: 'Git',
        path: 'git/git-original.svg',
      },
      {
        title: 'npm',
        path: 'npm/npm-original-wordmark.svg',
      },
      {
        title: 'Composer',
        path: 'composer/composer-original.svg'
      },
      {
        title: 'Trello',
        path: 'trello/trello-plain.svg',
      },
      {
        title: 'Visual Studio Code',
        path: 'vscode/vscode-original.svg',
      },
      {
        title: 'Blender',
        path: 'blender/blender-original.svg',
      },
      {
        title: 'Wordpress',
        path: 'wordpress/wordpress-original.svg',
      },
      {
        title: 'Docker',
        path: 'docker/docker-original.svg',
      },
      {
        title: 'Kubernetes',
        path: 'kubernetes/kubernetes-plain.svg',
      },
    ],
  },
]

const svgs = import.meta.globEager('/assets/icons/**/*.svg')
</script>

<template>
  <div
    class="showcase-wrapper section z-[2] text-center relative flex flex-col md:flex-row items-stretch gap-8 px-8 lg:px-0"
  >
    <section
      v-for="section in sections"
      class="pb-8 flex-1 mb-8 md:mb-0 border-b-2 border-r-2 border-l-2 border-yellow-main shadow-[4px_4px_#fff9d3,6px_6px_black]"
    >
      <div class="section-title mt-[-17px] text-shadow">{{ section.title }}</div>
      <div
        class="bubbles justify-center grid gap-1 grid-cols-[repeat(auto-fit,minmax(64px,1fr))]"
      >
        <div
          v-for="item in section.items"
          :key="item.title"
          class="bubble relative w-16 h-16 p-4 m-auto box-border"
          :title="item.title"
          tabindex="0"
          :data-title="item.title"
        >
          <img
            :src="svgs[`/assets/icons/${item.path}`].default"
            :alt="item.title + ' icon'"
            class="transition-[transform] duration-300 grayscale"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.showcase-wrapper {
  .bubbles {
    .bubble {
      &:hover {
        img {
          transform: translateY(-0.5rem);
          @apply grayscale-0 filter-none;
        }
      }
      &:focus::after {
        @apply content-[''] absolute z-[2] border-5 border-transparent border-t-dark-gray bottom-[calc(100%-10px)] left-1/2 transform -translate-x-1/2;
      }
      &:focus::before {
        content: attr(data-title);
        @apply absolute z-[2] bg-dark-gray p-2 text-gray-main rounded-lg left-1/2 transform -translate-x-1/2 bottom-full;
      }
    }
  }
}
</style>
