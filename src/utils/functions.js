const getImageUrl = ((url) => {
    return new URL(`/src/${url}`, import.meta.url).href;
});

export {
    getImageUrl
}