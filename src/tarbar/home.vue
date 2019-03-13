<template>
    <div>
        <h1>
            这是首页组件
        </h1>
        <!-- 焦点图 -->
        <mt-swipe :auto="4000" :showIndicators="false">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <!-- 菜单列表 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <a href="#cs">
		                    <img src="..\image\menu1.png" alt="">
		                    <div class="mui-media-body">超市</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <a href="#">
		                    <img src="..\image\menu2.png" alt="">
		                    <div class="mui-media-body">海外购</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <a href="#">
		                    <img src="..\image\menu3.png" alt="">
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <a href="#">
		                    <img src="..\image\menu4.png" alt="">
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <a href="#">
		                    <img src="..\image\menu5.png" alt="">
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <a href="#">
		                    <img src="..\image\menu6.png" alt="">
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
		</div>
        <div id="cs" style="display:;">
            <p>超市</p>
        </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style>
    .mint-swipe{
        height: 300px;
    }
    .mint-swipe-item:nth-child(1){
        background-color: red;
    }
     .mint-swipe-item:nth-child(2){
        background-color: blue;
    }
     .mint-swipe-item:nth-child(3){
        background-color: yellow;
    }
    img{
        width: 40px;height: 40px;
    }
</style>

