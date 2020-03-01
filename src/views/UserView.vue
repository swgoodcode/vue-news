<template>
    <div>
        <user-profile :info="userInfo">
            <div slot="username">{{userInfo.id}}</div>
            <sapn slot="time">{{ 'Joind ' + userInfo.created}}, </sapn>
            <sapn slot="karma">{{userInfo.karma}}</sapn>
        </user-profile>
    </div>
</template>

<script>
    import UserProfile from "../components/UserProfile";

    export default {
        components: {
            UserProfile
        },
        computed: {
            userInfo() {
                return this.$store.state.user;
            }
        },
        created() {
            console.log(this.$route.params.id);
            const userName = this.$route.params.id;
            this.$store.dispatch('FETCH_USER', userName);
        }
    }
</script>

<style scoped>

</style>