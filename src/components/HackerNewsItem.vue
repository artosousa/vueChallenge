<template>
    <div class="news-item" >
        <router-link :to="{ name: 'Article', params: { articleId: article.id }}">
            <h2>{{ article.title }}</h2>
            <small>Article by: <strong>{{ article.user }}</strong> | Posted: {{ article.time }}</small>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HackerNewsItem',
    props: ["article"]
}

</script>
<style scoped lang="scss">
    .news-item{
        padding-bottom:20px;
        border-bottom: 1px dashed #e9e9e9;
        padding-top: 20px;
        
        h2{
            padding: 0px;
            margin: 0px;
        }

        &:hover{
            cursor: pointer;
            background:lemonchiffon;
        }
    }
</style>
