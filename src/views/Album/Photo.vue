<template>
  <div class="page-header">
    <h1 class="page-title">{{ photoInfo.albumName }}</h1>
    <img class="page-cover" src="https://ooo.0x0.ooo/2024/12/15/OLw6zb.jpg" alt="">
    <Waves></Waves>
  </div>
  <div class="bg">
    <div class="page-container">
      <div v-viewer v-masonry fit-width="true" transition-duration="0.3s" item-selector=".card">
        <div v-masonry-tile class="card" v-for="photo in photoInfo.photoVOList" :key="photo.id">
          <img class="img" :src="photo.photoUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPhotoList } from '@/api/album';
import { Photo, PhotoInfo } from '@/api/album/types';

const route = useRoute();
const photoInfo = ref<PhotoInfo>({
  albumName: "",
  photoVOList: [] as Photo[],
});
onMounted(() => {
  getPhotoList(Number(route.params.albumId)).then(({ data }) => {
    photoInfo.value = data.data;
  })
})
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 280px;
  margin: 0.25em;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
}

.card .img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
