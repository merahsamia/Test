<template>
  <div>
    <br><br>
    <h2 class="text-gray-800 font-bold text-3xl">{{ categoryName }}</h2>
    <hr>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-3">
      <div v-for="article in articles" :key="article.id">
        <img :src="'/storage/' + article.image" alt="Article Image" class="object-cover w-full h-auto rounded-lg">
            <div class="mt-8">
                <span class="text-sky-500 uppercase tracking-wider">{{ article.category }}</span>
                <h1 class="mt-4 text-xl font-semibold text-gray-800 truncate">
                {{ article.title }}
                </h1>
                <p class="mt-2 text-gray-500">
                {{ article.excerpt }}
                </p>
                <div class="flex items-center justify-between mt-4">
                <div>
                    <a :href="'/author/' + article.author_slug" class="text-lg font-medium text-gray-700 hover:underline hover:text-gray-500">
                    {{ article.author_name }}
                    </a>
                    <p class="text-sm text-gray-500">{{ article.publish_date }}</p>
                </div>
                    <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400" @click.prevent="readMore(article)">Read More</a>
                </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        articles: [],
        categoryName: ''

    };
  },
    mounted() {
    this.categoryName = this.$route.params.category;
    this.fetchCategoryArticles();
  },
  methods: {
    fetchCategoryArticles() {
      fetch(`/api/articles-by-category/${this.categoryName}`)
        .then(response => response.json())
        .then(data => {
          this.articles = data;
        })
        .catch(error => {
          console.error('Error fetching articles:', error);
        });
      },
      readMore(article) {
      this.$router.push({ name: 'SingleArticle', params: { articleId: article.id } });
    }
  }
};
</script>

<style scoped>
/* Add any necessary styling here */
</style>
