import Home from '~/components/Pages/Home'
import Following from '~/components/Pages/Following'
import Profile from '~/components/Pages/Profile'
import Search from '~/components/Pages/Search'
import Upload from '~/components/Pages/Upload'
import { HeaderOnly } from '~/components/Layout'
import configRoutes from './configRoutes'

import Payment from '~/components/Pages/Payment'
const publicRoutes = [
    { id: 1, path: configRoutes.home, component: Home },
    { id: 2, path: configRoutes.following, component: Following },
    { id: 3, path: configRoutes.profile, component: Profile },
    { id: 4, path: configRoutes.search, component: Search },
    { id: 5, path: configRoutes.upload, component: Upload, layout: HeaderOnly },
]

const privateRoutes = [{ id: 1, path: configRoutes.payment, component: Payment }]

export { publicRoutes, privateRoutes }
