import Header from '~/components/Layout/general/Header'

function HeaderOnly({children}) {
    return ( 
        <div>
            <Header /> 
            <div className="Content">
                {children}
            </div>
        </div>
     );
}

export default HeaderOnly;