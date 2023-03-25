import Home from '~/components/Pages/Home';
import Following from '~/components/Pages/Following';
import Profile from '~/components/Pages/Profile';
import Search from '~/components/Pages/Search';
import Upload from '~/components/Pages/Upload';
import {HeaderOnly} from '~/components/Layout';

import Payment from '~/components/Pages/Payment';

const publicRoutes = [
    { id: 1, path: '/', component: Home, },
    { id: 2, path: '/following', component: Following, },
    { id: 3, path: '/profile', component: Profile, },
    { id: 4, path: '/search', component: Search, },
    { id: 5, path: '/upload', component: Upload, layout: HeaderOnly},
]

const privateRoutes = [
    { id: 1, path: '/payment', component: Payment, },
]

export {publicRoutes, privateRoutes}