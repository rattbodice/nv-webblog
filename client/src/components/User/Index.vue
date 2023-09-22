<template>
    <div>
        <h1>Get All Users</h1>
    </div>
</template>


<script>
import UsersService from '@/services/UsersService'
// import UserService from '../../../../server/src/services/UserService';

export default {
    async created () {
        let result = (await UsersService.index()).data
        console.log(result);
    }
}
</script>


<style scoped>

</style>