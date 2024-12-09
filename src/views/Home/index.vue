<template>
  <!--背景轮播-->
  <Images></Images>
  <!-- BHU-ACM -->
  <Brand></Brand>
  <div class="bg">
    <div class="main-container mt">
      <div class="left-container" :class="app.sideFlag ? 'test' : ''">
        <!-- 说说 -->
        <TalkSwiper></TalkSwiper>
        <!-- 推荐文章 -->
        <Recommend></Recommend>
        <!-- 文章列表 -->
<!--        <ArticleItem></ArticleItem>-->

<!--				文字-->
				<div class="centered-text">
					可以在下面可访问实验室现有资源
				</div>

				<!--				整成外链接-->
				<Outsidechain></Outsidechain>

      </div>
      <SideBar class="right-container" :class="app.sideFlag ? 'temp' : ''"></SideBar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getBlogInfo, report } from "@/api/blogInfo";
import { useAppStore, useBlogStore } from "@/store";
import ArticleItem from "@/views/Article/ArticleItem.vue";
import Brand from "./Brand/index.vue";
import Images from "./Swiper/Images.vue";
import Recommend from "./Swiper/Recommend.vue";
import TalkSwiper from "./Swiper/TalkSwiper.vue";
import Outsidechain from "@/views/Article/Outsidechain.vue";
const app = useAppStore();
const blog = useBlogStore();
onMounted(async ()=>{
	const res =  await getBlogInfo();
	blog.setBlogInfo(res.data.data);
	report();
})
</script>

<style lang="scss" scoped>
.mt {
  margin-top: 1rem;
  padding-bottom: 1.75rem;
}

.centered-text {
	font-family: 'Arial', sans-serif;
	font-size: 30px;
	font-weight: bold;
	color: #333;
	background-color: #ffffff;
	padding: 20px;
	border-radius: 10px;
	transition: all 0.3s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 10vh; /* 让 div 充满屏幕高度 */
}

/* 鼠标悬停效果 */
.centered-text:hover {
	color: #81e1cc;
	background-color: #e3fafa;
	transform: rotate(720deg); /* 旋转效果 */
}
</style>
