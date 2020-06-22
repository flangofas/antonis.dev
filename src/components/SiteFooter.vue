<template>
    <footer class="w-100 text-center bg-gray-300 text-gray-700 p-12">
        <p>Copyright &copy; {{ currentYear }} - <a href="mailto:antonis@flangofas.dev" class="text-green-600 hover:text-green-400">Antonis Flangofas</a></p>
    </footer>
</template>

<script>
    export default {
        name: "site-footer",
        computed: {
            currentYear() {
                return (new Date).getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>
