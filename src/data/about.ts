export interface Tool {
    name: string;
    url: string;
    img: string;
}

export const TOOLS: Tool[] = [{
    name: 'HTML',
    url: 'https://www.w3.org/html/',
    img: 'assets/images/logos/html5.png'
}, {
    name: 'Github',
    url: 'https://github.com/',
    img: 'assets/images/logos/femalecodertocat.png'
}, {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    img: 'assets/images/logos/js-white.png'
}, {
    name: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    img: 'assets/images/logos/logo-css3.png'
}];


export interface Venue {
    name: string;
    img: string;
    url: string;
    address: string;
    lat: number;
    lng: number;
}

export const VENUE: Venue = {
    name: 'AutoAlert',
    img: 'assets/images/logos/autoalert.png',
    url: 'https://www.autoalert.com/',
    address: '114 W 11th St, Kansas City, MO 64105',
    lat: 39.1011,
    lng: -94.5852
};

// If we keep encountering multiple venues, this can be streamlined a bit more
// For now taking the no effort route.
// export const VENUE: Venue = {
//   name: 'The Nerdery',
//   img: 'assets/images/logos/nerdery.png',
//   url: 'http://nerdery.com',
//   address: '100 E 7 St #401, Kansas City, MO 64106',
//   lat: 39.105692,
//   lng: -94.581287
// };
