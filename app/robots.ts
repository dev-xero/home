export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://home-xero.netlify.app/sitemap.xml',
    };
}
