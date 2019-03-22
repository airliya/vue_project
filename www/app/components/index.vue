<template>
    <div>
        <h1>小明的Vue作品</h1>
        <div>
            <p>面试官您好，我在工作中自学Vue，下面是我的Vue练习作品</p>
            <ul>
                <li>
                    <router-link to="/coolfrom">酷表单</router-link>
                    <small>使用了XXX插件，练习了v-model与vuex中的值双向绑定</small>
                </li>
                <li>
                    <router-link to="/carlist">汽车列表</router-link>
                    <small>使用了iview的表格分页，实现和后端交互的分页、筛选、排序</small>
                </li>
                <li>
                    <router-link to="/users">用户中心</router-link>
                    <small>实现了用户模糊查询</small>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    p{
        font-size:18px;margin:20px 0;
    }
    ul li{
        font-size:22px;
        line-height: 40px;
    }
    small{
        font-size:16px;
    }
</style>