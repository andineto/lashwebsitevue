<template>
    <div class="w-full flex flex-col gap-5 h-fit">
        <section id="Inicio" ref="InicioSection" class="customBg-1 h-fit flex flex-col lg:flex-row-reverse justify-center items-center">
            <div id="inicioLeft" class="order-2 lg:flex-[50%]">
                <img src="../assets/images/imgInicioLeft.png" class="w-[450px]  lg:w-full" style="mask-image: linear-gradient(178deg, rgba(217, 217, 217, 0.05) 2%, #D9D9D9 45.09%, rgba(217, 217, 217, 0.05) 98.32%);"/>
            </div>
            <div id="inicioRight" class="order-1 lg:flex-[50%]">
                <div id="Text" class="max-w-full p-3">
                    <h1 class="font-normal font-cursvie font text-7xl text-center">Beatriz Ribeiro</h1>
                    <h1 class="text-base text-center tracking-[0.5em]">LASH DESIGNER</h1>
                    <p class="tracking-wide lg:tracking-widest lg:leading-10 text-center mt-8 overflow-auto text-sm lg:text-base lg:w-[60%] lg:ml-[20%]">Bem-vinda ao nosso mundo de cílios incríveis! Como lash designer, estou aqui para realçar sua beleza natural e dar destaque aos seus olhos.
                        Com anos de experiência e paixão pelo que faço, ofereço serviços personalizados e resultados deslumbrantes</p>
                </div>
            </div>
        </section>
        <section id="Serviços" ref="ServiçosSection" class="customBg-2 h-fit flex flex-col lg:flex-row justify-center items-center w-full"> 

            <div id="ServicosLeft" class="order-1 lg:flex-[50%] mt-6 lg:mt-0" >
                <div id="Text" class="max-w-full">
                    <h1 class="tracking-[0.5em] text-center text-lg grow-0 mb-3 underline decoration-solid font-bold">Nossos Serviços</h1>
                    <p class="tracking-wide lg:tracking-widest lg:leading-10 text-center mt-8 overflow-auto text-sm lg:text-base lg:w-[60%] lg:ml-[20%]">Aqui garantimos a qualidade da aplicação e o realce de sua beleza natural. Além das aplicações também oferecemos manutenção para que seus olhos estejam sempre em destaque!</p>    
                </div>
            </div>
            
            <div id="ServicosRight" class="order-2 w-full gap-2 justify-center items-center lg:flex-[50%] mt-6 lg:mt-0">
                <CarrouselComponent class="w-full" />
            </div>
        </section>
        <section id="Agendamento" ref="AgendamentoSection" class="customBg-1 h-fit flex flex-col justify-center items-center w-full" >
            <div class="order-1 ">
                <p class="tracking-[0.5em] text-center text-lg grow-0 mb-3 underline decoration-solid w-full font-bold">QUER AGENDAR UM HORÁRIO?</p>
                <p class="tracking-[0.5em] text-center text-lg grow-0 mb-3 underline decoration-solid w-full mt-6">Contato</p>
                <div class="flex flex-row justify-center flex-grow-0 gap-1 mt-6 ">
                    <img src="../assets/icons/whatsapp.png" class="w-6 max-w-6" />
                    <p class="grow-0">(19)99372-1054</p>
                </div>
                <div class="flex flex-row justify-center gap-6 mt-5">
                    <a class="w-6 max-w-6" href="https://www.instagram.com/bia_rib17/"><img src="../assets/icons/instagram.png" /></a>
                    <a class="w-6 max-w-6" href="https://www.facebook.com/profile.php?id=100009467240516&locale=pt_BR"><img src="../assets/icons/facebook.png"/></a>
                </div>
                <p class="text-center tracking-wide lg:tracking-widest lg:leading-10 mt-5 overflow-auto text-sm lg:text-base lg:w-[60%] lg:ml-[20%]">Agende seu horario pela internet!</p>
                <div class="flex w-full justify-center">
                    <a class=" flex flex-row justify-center items-center p-4 gap-3 w-fit max-w-fit h-9 bg-[#32302F] text-white rounded-2xl justify-self-center self-center" href="http://maapp.com.br/biaribeirolash"><img src="../assets/icons/phone-call.png" class="w-6 max-w-6 brightness-0 invert"/>Agendar horário</a>
                </div>
                <p class="text-center tracking-wide lg:tracking-widest lg:leading-10 mt-5 overflow-auto text-base lg:text-base lg:w-[60%] lg:ml-[20%]">Visite-nos em: R. José Alves Guedes, 354 - 6 - Centro, Jaguariúna - SP, 13910-021, Brasil</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6128670111975!2d-46.98680092288715!3d-22.705451130710113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8e80692c07c0d%3A0x9f7c7032f7613ac1!2sR.%20Jos%C3%A9%20Alves%20Guedes%2C%20354%20-%20Centro%2C%20Jaguari%C3%BAna%20-%20SP%2C%2013910-021!5e0!3m2!1spt-BR!2sbr!4v1729716447551!5m2!1spt-BR!2sbr" class="w-full p-7" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        <section id="Clientes" ref="ClientesSection" class="customBg-2 h-fit flex flex-col lg:flex-row justify-center items-center w-full">
            <div class="order-1 lg:flex-[50%] mt-6 lg:mt-0" id="ClientesLeft">
                <div id="Text" class="max-w-full">
                    <h1 class="tracking-[0.5em] text-center text-lg grow-0 mb-3 underline decoration-solid font-bold">Antes e Depois</h1>
                    <p class="tracking-wide lg:tracking-widest lg:leading-10 text-center mt-8 overflow-auto text-sm lg:text-base lg:w-[60%] lg:ml-[20%]">Veja ao lado exemplos da mudança que um bom lash design pode fazer em sua vida. Confira os “Antes e Depois” de nossas clientes!</p>
                </div>
            </div>
            <div class="order-2 w-full gap-2 justify-center items-center lg:flex-[50%] mt-6 lg:mt-0" id="ClientesRight">
                <BAAComponent class="w-full" />
            </div>
        </section>
    </div>

</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import CarrouselComponent from "./ProductsCarousel.vue";
import BAAComponent from "./BfAndAfter.vue";

export default defineComponent({
    name: "Content",

    setup() {
    },
    components:{
        CarrouselComponent,
        BAAComponent,
    }
})
</script>


