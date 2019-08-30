
<template>
    <div id="usuarios">
        <ul>
            <li v-for='user in users'>
                {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}
            </li>
        </ul>
        
        {{ $data }}
    </div>
</template>

<script>
    import axios from 'axios'
export default {
    name: 'usuarios',
    data() {
        return {
            users:[]
        }
    },
    mounted() {
        axios.get('https://randomuser.me/api/?results=5')
        .then(res => {
            //console.log(res.data.results);
            this.users = res.data.results
        })
        .catch(err => {
            console.error(err); 
        })
    },
}
</script>