<template>
    <div>
        <input v-model="text" type="text"><button @click="post">send</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            text: "hello vue!"
        }
    },
    methods: {
        post: function(){
            const url = "http://localhost:3000/input"
            const data = {
                text: this.text
            }
            fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, same-origin, *omit
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                redirect: "follow", // manual, *follow, error
                referrer: "no-referrer", // no-referrer, *client
                body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
            })
            .then(response => response.json()); // レスポンスの JSON を解析
        }
    }
}
</script>
