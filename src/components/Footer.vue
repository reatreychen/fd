<template>
    <section>
        <div class=" bg-white p-6 flex items-center justify-around mt-6">
            <div>
                <img :src="Logo" alt="logo" class=" w-40">
                <p class=" text-[#164a9f] font-normal pt-2">Booking has never been easier</p>

                <div class=" pt-6">
                    <p class=" text-[#434750]">Find us on socail media:</p>
                    <div class=" flex items-center gap-3">
                        <div class=" w-6 h-6">
                            <img :src="face" alt="facebook" class="w-full h-full object-cover">
                        </div>
                         <div class=" w-6 h-6">
                            <img :src="google" alt="google" class="w-full h-full object-cover">
                        </div>
                         <div class=" w-6 h-6">
                            <img :src="ig" alt="ig" class="w-full h-full object-cover">
                        </div>
                        <div class=" w-6 h-6">
                            <img :src="twitter" alt="twitter" class="w-full h-full object-cover">
                        </div>
                        <div class=" w-6 h-10">
                            <img :src="linkin" alt="linkin" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ul>
                    <li class=" text-xl font-normal text-[#434750]"><RouterLink>Cotafer</RouterLink></li>
                    <li class="font-normal text-[#434750] pt-4"><RouterLink>Term and condition</RouterLink></li>
                    <li class="font-normal text-[#434750] pt-2"><RouterLink>Privacy policy</RouterLink></li>
                    <li class="font-normal text-[#434750] pt-2"><RouterLink>Word for us</RouterLink></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li class=" text-xl font-normal text-[#434750]"><RouterLink>More</RouterLink></li>
                    <li class="font-normal text-[#434750] pt-4"><RouterLink>Help</RouterLink></li>
                    <li class="font-normal text-[#434750] pt-2"><RouterLink>FAQS</RouterLink></li>
                    <li class="font-normal text-[#434750] pt-2"><RouterLink>Accomodation types</RouterLink></li>
                </ul>
            </div>

            <div>
                <h1 class=" text-lg font-normal text-[#434750] pb-6">Get The App</h1>
                <div class="flex flex-col gap-4">
                    <img :src="appstore" alt="appstore" class="w-32 h-10 ">
                    <img :src="playstore" alt="playstore" class=" w-32 h-10">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { RouterLink } from "vue-router"
import Logo from "../assets/images/Logo.png"
    import face from "../assets/images/face.png"
    import google from "../assets/images/google.png"
    import ig from "../assets/images/ig.png"
    import linkin from "../assets/images/linkin.webp"
    import twitter from "../assets/images/twitter.png"
    import playstore from "../assets/images/play.webp"
    import appstore from "../assets/images/app.png"
    export default {
        data() {
            return {
                Logo,
                face,
                google,
                ig,
                linkin,
                twitter,
                playstore,
                appstore,
            }
        }
    }
</script>