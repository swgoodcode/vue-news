// mixin
import bus from "../utils/bus";

export default {
    // 재사용할 컴포넌트 옵션
    created() {
        bus.$emit('start:spinner');
        console.log("#1");
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('#4');
                bus.$emit('end:spinner');
            })
            .catch((error) => {
                console.log(error);
            });
    }
}