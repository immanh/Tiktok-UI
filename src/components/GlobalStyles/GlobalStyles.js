import PropTypes from 'prop-types'
import './GlobalStyles.scss'
const GlobalStyles = ({ children }) => {
    return children
}
/**
 * PropTypes.node: Any data type can render except for function
 */
GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
}
export default GlobalStyles
