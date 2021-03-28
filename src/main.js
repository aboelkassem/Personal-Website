// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import VueScrollTo from 'vue-scrollto';
import VueTypedJs from 'vue-typed-js'

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
    Vue.use(VueTypedJs)

    Vue.use(VueScrollTo, {
        duration: 1200,
        easing: 'ease-in-out',
        offset: -200,
    });

    head.meta.push({
        name: 'keywords',
        content: 'aboelkassem,Portfolio,Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS',
    });

    head.meta.push({
        name: 'description',
        content: 'aboelkassem',
    });

    head.meta.push({
        name: 'author',
        content: 'aboelkassem',
    });

    head.meta.push({
        name: 'twitter:card',
        content: 'summary_large_image',
    });

    head.meta.push({
        name: 'twitter:creator',
        content: '@abo_elkassem',
    });

    head.meta.push({
        name: 'twitter:description',
        content: 'Join a group. Or host a group. Or just listen. Enjoy music & request songs together while building a global community.',
    });

    head.meta.push({
        name: 'twitter:site',
        content: '@abo_elkassem',
    });

    head.meta.push({
        name: 'twitter:title',
        content: 'aboelkassem',
    });

    head.meta.push({
        name: 'twitter:image',
        content: 'https://res.cloudinary.com/dvdcninhs/image/upload/v1616943424/IMG_20210325_074803_ykddh1.jpg',
    });

    head.meta.push({
        name: 'twitter:url',
        content: 'https://www.aboelkassem.com',
    });
    
    head.meta.push({
        name: 'og:image',
        content: 'https://res.cloudinary.com/dvdcninhs/image/upload/v1616943424/IMG_20210325_074803_ykddh1.jpg',
    });

    head.meta.push({
        name: 'og:title',
        content: 'aboelkassem |Software Developer',
    });

    head.meta.push({
        name: 'og:description',
        content: 'aboelkassem |Software Developer',
    });

    head.meta.push({
        name: 'og:type',
        content: 'website',
    });

    head.meta.push({
        name: 'og:url',
        content: 'https://www.aboelkassem.com/',
    });

    head.meta.push({
        name: 'og:site_name',
        content: 'Personal Website',
    });

    head.meta.push({
        name: 'og:locale',
        content: 'en_US',
    });

    head.meta.push({
        name: 'og:image:type',
        content: 'image/png',
    });

    head.meta.push({
        name: 'og:image:width',
        content: '1280',
    });

    head.meta.push({
        name: 'og:image:height',
        content: '640',
    });

    head.meta.push({
        name: 'og:image:alt',
        content: 'aboelkassem.com',
    });

    head.meta.push({
        name: 'canonical',
        content: 'https://aboelkassem.com/',
    });

    head.meta.push({
        name: 'google-site-verification',
        content: 'xg4ctI6bmMqXQoOhJwwZjL8Tq8GYcJPS2Uh0Xgw2oiQ',
    });

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700',
    });

    head.link.push({
        rel: 'icon',
        href: '/favicon-16x16.png',
    });

    head.link.push({
        rel: 'shortcut icon',
        href: '/favicon-16x16.png',
    });

    head.link.push({
        rel: 'manifest',
        href: '/src/manifest.json',
    });

    head.script.push({
        src: '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-153855958-2"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date()); gtag(\'config\', \'UA-153855958-2\');</script>',
        body: true
    })
}
