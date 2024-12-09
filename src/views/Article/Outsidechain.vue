<template>
	<div class="article-list-container">
		<div v-if="articleList.length > 0" class="article-item" v-for="article in articleList" :key="article.id">
			<div class="article-content" :style="articleCover(article.backgroundImage)">
				<!-- 使用 a 标签进行外部链接跳转 -->
				<a :href="article.link" target="_blank" class="article-title">{{ article.articleTitle }}</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// 自定义文章数据
const articleList = ref([
	{
		id: 1,
		articleTitle: "WAOJ 21届学长自研的OJ判题系统",
		backgroundImage: "https://s3.bmp.ovh/imgs/2024/12/09/b237d2503f3f8faf.png", // 背景图片链接
		link: "https://www.wrongansweroj.cn/#/" // 点击后跳转的链接
	},
	{
		id: 2,
		articleTitle: "BHUACM聊天机器人 ChatGpt",
		backgroundImage: "https://s3.bmp.ovh/imgs/2024/11/14/b129d62ba930cd40.jpg", // 背景图片链接
		link: "http://gpt.gczdy.cn/" // 点击后跳转的链接
	},
	{
		id: 3,
		articleTitle: "程序设计工作室 招新纳新网页 2024",
		backgroundImage: "https://s3.bmp.ovh/imgs/2024/12/09/16180be6d158545f.png", // 背景图片链接
		link: "http://acm.gczdy.cn/" // 点击后跳转的链接
	},
]);

// 自定义封面图样式
const articleCover = computed(() => (cover: string) => ({
	backgroundImage: `url(${cover})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	height: '250px', // 可以根据需要调整高度
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixin.scss";

.article-list-container {
	display: flex;
	flex-direction: column;
	margin: 1rem 0.5rem;
}

.article-item {
	margin-bottom: 1rem;
	border-radius: 0.75rem;
	overflow: hidden;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-item:hover {
	transform: scale(1.05); /* 鼠标悬停时放大 */
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* 加入阴影效果 */
}

.article-content {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	text-align: center;
	color: white;
	transition: background-size 0.3s ease; /* 背景图缩放过渡效果 */

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3); /* 给背景图加个黑色遮罩 */
		left: 0;
		top: 0;
		transition: background-color 0.3s ease;
	}

	&:hover::after {
		background-color: rgba(0, 0, 0, 0.5); /* 鼠标悬停时加深遮罩 */
	}
}

.article-title {
	font-size: 1.8rem;
	font-weight: bold;
	text-decoration: none;
	color: white;
	z-index: 10; /* 确保标题在最前面 */
	padding: 0.5rem;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	transition: transform 0.3s ease, background-color 0.3s ease; /* 添加过渡效果 */
}

.article-title:hover {
	transform: scale(1.1); /* 鼠标悬停时标题放大 */
	background-color: rgba(0, 0, 0, 0.7); /* 标题背景变深 */
}
</style>
