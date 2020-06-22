<template>
  <div id="app">
    <site-header />

    <main class="container p-4 mx-auto md:max-w-2xl my-2 sm:my-3 md:my-4 lg:my-6">

      <!-- Who am I -->
      <div class="border-b-2 border-green-500 pt-5">
        <div class="flex inline-flex items-center">
          <img class="w-24 h-24 rounded-full shadow-2xl border-green-500" src="https://avatars1.githubusercontent.com/u/1227351?s=400&u=7c3d0ffa49f8efbfcfcecd03c3efd59cc47219a2&v=4" />
          <h1 class="text-3xl ml-5">Antonis Flangofas</h1>
        </div>
      </div>
      <div class="mb-5">
        <p class="mb-3">Hi, I am a <a href="" class="text-green-600 hover:text-green-900 underline">software consultant</a> and founder of null. I have been working for 10 years with PHP and JavaScript as fullstack developer, lead dev, CTO, while maintaining several open source projects.</p>
        <p class="mb-3">We can work together on serverless infrastructure, project architecture or as CTO on-demand to get a project started in the right direction.</p>
      </div>

      <!-- Blog -->
      <div class="w-100">
        <h2 class="text-3xl border-b-2">Blog</h2>
        <article class="my-5" v-for="article in articles">
          <header>
            <h2 class="text-2xl mt-3 leading-tight"><a :href="article.link">{{ article.title }}</a></h2>
            <p class="text-gray-600 text-sm mt-0 mb-2">{{ article.date }} - {{ article.author }} - {{ article.readingTime }}</p>
          </header>
          <div class="excerpt">{{ article.excerpt }}</div>
          <footer class="my-2">
            <p class="text-right"><a :href="article.link" class="text-blue-400 hover:text-blue-800">Read more</a></p>
          </footer>
        </article>

        <!-- Pagination -->
        <div class="flex justify-between">
          <p class="text-green-600 hover:text-green-900 underline"><a href="">Previous Page</a></p>
          <p class="text-green-600 hover:text-green-900 underline"><a href="">Next Page</a></p>
        </div>
      </div>
    </main>
    <site-footer />
    <router-view></router-view>
  </div>
</template>
<script>
import SiteFooter from "./components/SiteFooter"
import SiteHeader from "./components/SiteHeader"
import SiteMainContent from "./components/SiteMainContent"

export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter,
    SiteMainContent
  },
  data() {
    return {
      articles: [
        {
          author: 'Antonis Flangofas',
          date: 'Apr 20th 2020',
          excerpt: 'together with my colleague brent, i\'m working on designing the architecture of a massive laravel application. in that application, we\'ll have traditional parts and event sourced parts. in this blog post, i\'d like to give a practical example of how we think to achieve this.',
          link: '/',
          readingTime: '9 minutes read',
          title: 'Mixing event sourcing in a traditional Laravel app -- Mixing event sourcing in a traditional Laravel app',

        },
        {
          author: 'Antonis Flangofas',
          date: 'Apr 20th 2020',
          excerpt: 'together with my colleague brent, i\'m working on designing the architecture of a massive laravel application. in that application, we\'ll have traditional parts and event sourced parts. in this blog post, i\'d like to give a practical example of how we think to achieve this.',
          link: '/',
          readingTime: '9 minutes read',
          title: 'Mixing event sourcing in a traditional Laravel app',

        },
        {
          author: 'Antonis Flangofas',
          date: 'Apr 20th 2020',
          excerpt: 'together with my colleague brent, i\'m working on designing the architecture of a massive laravel application. in that application, we\'ll have traditional parts and event sourced parts. in this blog post, i\'d like to give a practical example of how we think to achieve this.',
          link: '/',
          readingTime: '9 minutes read',
          title: 'Mixing event sourcing in a traditional Laravel app',

        }
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Open Sans,-apple-system,BlinkMacSystemFont,sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
</style>
