import Home from '~/components/Pages/Home'
import Following from '~/components/Pages/Following'
import Profile from '~/components/Pages/Profile'
import Search from '~/components/Pages/Search'
import Upload from '~/components/Pages/Upload'
import { HeaderOnly } from '~/layouts'
import config from '../config'

import Payment from '~/components/Pages/Payment'
const publicRoutes = [
    { id: 1, path: config.routes.home, component: Home },
    { id: 2, path: config.routes.following, component: Following },
    { id: 3, path: config.routes.profile, component: Profile },
    { id: 4, path: config.routes.search, component: Search },
    { id: 5, path: config.routes.upload, component: Upload, layout: HeaderOnly },
]

const privateRoutes = [{ id: 1, path: config.routes.payment, component: Payment }]

export { publicRoutes, privateRoutes }
