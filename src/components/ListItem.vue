<template>
    <div>
        <ul>
            <li v-for="item in listItems" :key="item.id" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{item.points || 0}}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p clas="news-title">
                        <template v-if="item.domain">
                            <a :href="item.url">
                                {{item.title}}
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{item.time_ago}} by
                        <router-link
                                v-if="item.user"
                                :to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
                        <a v-else :href="item.url">
                            {{item.domain}}
                        </a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        created() {
            const name = this.$route.name;
            if (name === 'news') {
                this.$store.dispatch('FETCH_NEWS');
            } else if (name === 'ask') {
                this.$store.dispatch('FETCH_ASK');
            } else if (name === 'jobs') {
                this.$store.dispatch('FETCH_JOBS');
            }

        },
        computed: {
            listItems() {
                const name = this.$route.name;
                if (name === 'news') {
                    return this.$store.getters.fetchedNews;
                } else if (name === 'ask') {
                    return this.$store.getters.fetchedAsk;
                } else if (name === 'jobs') {
                    return this.$store.getters.fetchedJobs;
                }

                return '';
            }
        }
    }
</script>

<style scoped>
    .news-list {
        margin: 0;
        padding: 0;
    }

    a {
        color: #34495e;
        text-decoration: none;
    }

    a:hover {
        color: #42b883;
        text-decoration: underline;
    }

    a.router-link-exact-active {
        text-decoration: underline;
    }

    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }

    .points {
        width: 80px;
        hegiht: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #42b883;
    }

    .news-title {
        margin: 0;
    }

    .link-text {
        color: #828282;
    }
</style>