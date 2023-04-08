import PropTypes from 'prop-types'
import Header from '~/layouts/general/Header'

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="Content">{children}</div>
        </div>
    )
}
HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
}
export default HeaderOnly
