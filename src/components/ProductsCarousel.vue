<template>
  <div class="flex">
    <Carousel :wrap-around="true" ref="productsCarousel">
      <Slide v-for="(product, index) in productList" :key="index">
          <div
          class="flex flex-col gap-7 items-center justify-start md:max-w-[350px] min-w-[245px] max-w-[250px] h-fit md:min-h-[610px] bg-opacity-50 bg-[#FDF3F4] pt-4 pb-7 px-2"
          style="box-shadow: inset -3.5px -3.5px 4px rgba(0, 0, 0, 0.25), inset 3.5px 3.5px 4px rgba(0, 0, 0, 0.25);"
        >
          <VaAvatar
            class="mix-blend-multiply md:w-80 md:h-80 w-48 h-48 order-1 m-2"
            :src="product.imgSrc"
          />
          <p class="order-2 tracking-[0.5em] text-base w-full">{{ product.name.toUpperCase() }}</p>
          <p class="order-3 text-center text-sm leading-4 w-full max-h-14 md:max-h-full tracking-widest overflow-scroll md:overflow-auto">
            {{ product.description }}
          </p>
          <a href="" class="mx-2 order-4 flex flex-row justify-center items-center p-4 gap-3 w-full h-9 bg-[#32302F] text-white rounded-2xl">Agende seu horário -></a>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import products from "@/plugins/products";
import { VaImage, VaAvatar } from "vuestic-ui/web-components";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "CarouselComponent",
  setup() {
    const productList = ref([]);

    onMounted(() => {
      productList.value = products;
    });
    return { productList };
  },

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    products,
    VaImage,
    VaAvatar,
  },
});
</script>
