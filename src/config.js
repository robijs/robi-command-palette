// Pages
import Home from './pages/Home'
import Docs from './pages/Docs'

const app = {
    name: 'Command Palette',
    title: 'Command Palette',
    localhost: 'http://localhost',
    localport: '3000',
    proxyport: '8081'
}

const routes = [
    {
        path: '/',
        label: 'Getting Started',
        title: 'Getting Started',
        icon: 'bi-play',
        main: (title) => <Home title={title} />
    },
    {
        path: '/Docs',
        label: 'Docs',
        title: 'Docs',
        icon: 'bi-book',
        main: (title) => <Docs title={title} />
    },
    {
        path: '/Settings',
        label: 'Settings',
        title: 'Settings',
        icon: 'bi-gear',
        nav: false
    },
];

export {
    app,
    routes
}