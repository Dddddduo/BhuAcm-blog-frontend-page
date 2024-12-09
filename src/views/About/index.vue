<template>
	<div class="page-header">
		<h1 class="page-title">关于</h1>
		<img class="page-cover" src="https://s3.bmp.ovh/imgs/2024/12/09/9d7ee01e56e9184d.jpg" alt="" />
		<Waves></Waves>
	</div>

	<div class="bg">
		<div class="page-container">
			<!-- 个人信息展示 -->
			<div class="avatar-box">
				<img class="author-avatar" :src="blog.blogInfo.siteConfig.authorAvatar" />
			</div>
			<v-md-preview class="md" :text="blog.blogInfo.siteConfig.aboutMe"></v-md-preview>

			<!-- 动态展示制作者信息 -->
			<div class="creator-section">
				<h2 style="text-align: center;">这是我们!!!</h2>
				<div class="creator-row">
					<!-- 使用v-for来动态渲染每个creator -->
					<div v-for="(creator, index) in creators" :key="index" class="creator-box">
						<div class="avatar-box">
							<img class="author-avatar" :src="creator.avatar" :alt="`Avatar of ${creator.name}`" />
						</div>
						<div class="creator-info">
							<h3>{{ creator.name }}</h3>
							<h4>{{ creator.year }}</h4>
							<v-md-preview class="md" :text="creator.aboutMe" ></v-md-preview>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useBlogStore } from "@/store";
const blog = useBlogStore();

// 制作者信息
const creators = [
	{
		name: '能和我打一辈子算法竞赛吗',
		year: '22届',
		avatar: 'https://images.nowcoder.com/images/20230503/904087163_1683117073266/D8E3E6E0C1986595F3B8B3140A1D7821?x-oss-process=image/resize,m_mfit,h_200,w_200',
		aboutMe: '捜して欲しいんだ。――私を。本当の、ね'
	},
	{
		name: '岁岁长宁',
		year: '23届',
		avatar: 'https://ooo.0x0.ooo/2024/12/09/OLVO1K.jpg',
		aboutMe: '诸事顺，利'
	},
	{
		name: '南桥枝kim',
		year: '23届',
		avatar: 'https://ooo.0x0.ooo/2024/12/09/OLVaHa.jpg',
		aboutMe: '命运就是生命向时间呼号的回声'
	},
	{
		name: '素衣',
		year: '23届',
		avatar: 'https://ooo.0x0.ooo/2024/12/09/OLVo8S.jpg',
		aboutMe: '个性签名我没弄过'
	},
	{
		name: 'Dduo',
		year: '23届',
		avatar: 'https://s3.bmp.ovh/imgs/2024/12/02/4233141cee337312.jpg',
		aboutMe: '你好像在等十九世纪的青洄 可我是北纬六十七度以北的雪'
	},
	{
		name: '沥淋·泠',
		year: '24届',
		avatar: 'https://ooo.0x0.ooo/2024/12/09/OLV5xN.jpg',
		aboutMe: '爱死你啦多多[表情]'
	},
	{
		name: '王小凡',
		year: '24届',
		avatar: 'https://ooo.0x0.ooo/2024/12/09/OLVBpC.jpg',
		aboutMe: '总有人间一两风 填我十万八千梦'
	},
	{
		name: '木木三',
		year: '24届',
		avatar: 'https://ooo.0x0.ooo/2024/12/09/OLVTfL.jpg',
		aboutMe: '我害怕你心碎没人帮你擦眼泪'
	},
	{
		name: 'cf能治好我的网瘾吗',
		year: '24届',
		avatar: 'https://ooo.0x0.ooo/2024/12/09/OLVWBi.jpg',
		aboutMe: '于无声处听惊雷，于无色处见繁花。'
	},
	{
		name: '怡桉',
		year: '24届',
		avatar: 'https://ooo.0x0.ooo/2024/12/09/OLVbKX.jpg',
		aboutMe: '你从来不是一个人 你有我 我一直在'
	},
	{
		name: '山海清',
		year: '24届',
		avatar: 'https://ooo.0x0.ooo/2024/12/09/OLVk0t.jpg',
		aboutMe: '千万花开'
	},
	{
		name: '离缘',
		year: '24届',
		avatar: 'https://ooo.0x0.ooo/2024/12/09/OLVzMx.jpg',
		aboutMe: '低头半生去，回望彼岸花。'
	},

	// 更多制作者...
];
</script>

<style scoped>
.author-avatar {
	width: 110px;
	height: 110px;
	border-radius: 50%;
	transition: all 0.5s;
}

.author-avatar:hover {
	transform: rotate(360deg);
}

.creator-section {
	margin-top: 30px;
	display: flex;             /* 使用 Flexbox */
	flex-direction: column;    /* 按列排列，保持纵向结构 */
	align-items: center;      /* 垂直居中 */
	justify-content: center;  /* 水平居中 */
	text-align: center;       /* 文字居中对齐 */
}


.creator-row {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;  /* 水平居中排列卡片 */
	align-items: center;      /* 垂直居中排列 */
	gap: 20px;                /* 卡片之间的间距 */
	width: 100%;              /* 容器宽度 */
}

.creator-box {
	flex: 1;
	max-width: calc(33.33% - 20px); /* 每个制作者卡片占一行的三分之一 */
	min-width: 280px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	border: 1px solid #e1e1e1;
	padding: 15px;
	background-color: #f9f9f9;
	border-radius: 8px;
	transition: all 0.3s ease;
}

.creator-box:hover {
	transform: scale(1.05); /* 鼠标悬停时放大效果 */
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


.creator-info {
	text-align: center;
}

.md {
	width: 100%;
	font-family: Arial, sans-serif;
}

.centered {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh; /* 使容器的高度为视口高度 */
	text-align: center;
}
</style>
