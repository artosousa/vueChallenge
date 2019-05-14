<template>
    <div class="article" v-if="post">
        <div class="article-details">
            <div class="article-details-title">
                <h1>{{ this.post.title }}</h1>
            </div>
            <div class="article-details-meta">
                by: <strong>{{ this.post.user }}</strong> | {{ this.post.time_ago}} | Type of post: {{ this.post.type }} | Article Score: {{ this.post.points }} | Source: {{ this.post.domain }}
            </div>
        
        </div>
        <div class="article-content">
            {{ this.post.content }}
            <p>
                Click here to read full article 
                <a v-bind:href="this.post.url" target="_blank" v-bind:title="this.post.title">
                    {{ this.post.url }}<br />
                </a>
            </p>

            <div class="article-content-comments">
                <div class="article-content-comments-count">
                     {{ this.post.comments_count}} Comments
                </div>
                <div class="article-content-comments-items" v-for="comment in this.post.comments">
                    <p class="article-content-comments-item-details"><strong>{{ comment.user}}</strong> <br/> <em>{{ comment.time_ago}}</em>:</p>
                    <div class="comment-content" v-html="comment.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'Article',
        props: ["articleId"],
        data () {
            return {
                post: null
            }
        },
        methods: {
            loadPost() {
                const articleUrl = 'https://api.hnpwa.com/v0/item/' + this.$route.params.articleId + '.json';
                
                return axios.get(articleUrl)
            }
        },
        created () {
            this.loadPost().then(({data}) => {
                this.post = data
                console.log(this.post.comments)
            })
        }
    }
</script>
<style scroped lang="scss">
    .article{
        max-width: 650px;
        position: relative;
        margin: 0px auto;
        .article-details{
            border-bottom: 1px solid #ececec;
            padding-bottom: 25px;
            margin-bottom: 25px;
            .article-details-meta{
                font-size: 12px;
                margin-top: 10px;
                color: #999;
            }
        }
        .article-content-comments{
            border-top: 1px solid #ececec;
            padding-top:25px;
            margin-top: 25px;

            .article-content-comments-count{
                margin-bottom: 15px;
                font-weight: bold;
            }
            .article-content-comments-items{
                background: #fbf9f9;
                padding:20px;
                margin-bottom: 25px;

                .article-content-comments-item-details{
                    margin-bottom:10px;
                    text-align: left;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #e9e9e9;
                    em{
                        font-size: 12px;
                    }
                }
                .comment-content{
                    justify-content: space-between;
                    text-align: left;
                    p{
                        margin: 10px 0px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    pre {
        
        width: 90%;
        white-space: pre-wrap;
        padding: 15px 5px;
        background: #333333;
        margin: 25px 0px 25px 5%;

        code{
            color:orange;
            border-radius: 5px;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
        }
    }
    
</style>


