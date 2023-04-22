module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/updates',
                permanent: true,
            },
        ]
    },
}