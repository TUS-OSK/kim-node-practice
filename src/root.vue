<template>
    <div>
        <div>
            <Input/><button @click="reload">reload</button>
        </div>
        <div v-for="item in post_data" :key="item.date">
            <Display :date="item.date" :text="item.text"/>
        </div>
    </div>    
</template>

<script>
import Display from "./display"
import Input from "./input"
export default {
    components: {
        Display,
        Input
    },
    data: function() {
        return {
            post_data: []
        }
    },
    methods: {
        reload: function(){
            fetch("http://localhost:3000/reload")
                .then(res => res.json())
                .then(data => {
                    this.post_data = data
                })
        }
    }
}
</script>

<style scoped>

</style>
