<template>
    <header class="header">
        <router-link to="/">
            <Logo />
        </router-link>
        <div id="nav">
            <router-link to="/hacker-news">Hacker News</router-link> |
            <router-link to="/random-cat">Random Kitty</router-link>
        </div>
    </header>
    
</template>
<script>
    import Logo from './Logo'
    export default {
        name: "Header",
        components: {
            Logo
        }
    }
</script>

<style scoped lang="scss">
    .header{
        color: green;
        text-align: center;
        padding-bottom: 25px;
        margin-bottom: 25px;
        border-bottom: 1px solid #ececec;
    }
    a{
        display: inline;
    }  
</style>
