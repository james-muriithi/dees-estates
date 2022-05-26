export default {
    methods: {
        getImageUrl(name) {
            return new URL(name, import.meta.url).href
        }
    }
}