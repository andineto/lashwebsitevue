<template>
    <div class="w-full h-fit bg-red-700 ">
        <ul class="grid grid-cols-6 gap-x-5 gap-y-96">
            <li class="min-w-40 max-h-full" v-for="   (product, index) in products" :key="index">
                <div class="rounded-full">
                    <VaAvatar
                class=""
                :src="product.imgSrc"
                size="200px"
              /> 
                </div>
                           <p class="productName">{{ product.name }}</p>
                <p class="productPrice">R${{ product.price }}</p>
            </li> 
        </ul>
    </div>

</template>

<script>
import { defineComponent, onMounted, ref} from "vue";
import api from '@/plugins/axios'

export default defineComponent ({
    setup() {

        const products = ref([]);

        const fetchProducts = () => api.get('/products').then((response) => (products.value = response.data));

        onMounted(fetchProducts)

        return { products }
    }

});
</script>