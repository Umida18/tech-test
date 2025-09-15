<template>
    <v-app>
        <AppHeader />
        <v-main>
            <AppNav />
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppNav
    }
}
</script>
