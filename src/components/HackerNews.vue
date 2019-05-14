<template>
    <div>
        <h1>Recent Hacker News:</h1>

        <div v-bind:key="article.id" v-for="article in articles">
            
            <HackerNewsItem v-bind:article="article"  />
        </div>
    </div>
</template>

<script>
import HackerNewsItem from './HackerNewsItem.vue';
import axios from 'axios';

const apiUrl = 'https://api.hnpwa.com/v0/news/1.json';

export default {
    name: 'HackerNews',
    components: {
        HackerNewsItem
    },
    data() {
        return {
            articles: []
        }
    },
    created() {
        axios.get(apiUrl)
        .then(res => this.articles = res.data.slice(0, 25))
        .then(res => console.log(this.articles))
        .catch(err => console.log(err));
    }
}
</script>
<style scoped>
    h1{
        padding-bottom: 25px;
    }
</style>
