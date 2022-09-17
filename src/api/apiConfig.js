const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'be7fbb3fc5b26db17f12c5598842fcf3',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;