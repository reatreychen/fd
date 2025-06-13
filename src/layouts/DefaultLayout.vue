
<template>
    <section class="">
        <Navbar/>
        <main class=" grid grid-cols-[1fr,4fr] bg-[#f5f6f7]">
            <!-- sidebar menu -->
                <SideBarMenu/>
                <div class=" -mt-20 pr-10 ">
                    <RouterView/>
                    <Footer/>
                </div>
        </main>
    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import SideBarMenu from '../components/SideBarMenu.vue';
import Footer from '../components/Footer.vue';
    export default {
        components: {
            Navbar,
            SideBarMenu,
            Footer,
        }
    }
</script>