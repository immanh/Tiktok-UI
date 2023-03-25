import Header from '~/components/Layout/general/Header'
import Sidebar from '~/components/Layout/general/Sidebar'
// import Content from '~/components/Layout/general/Header'

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header /> 
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;