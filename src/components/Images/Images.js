import { useState } from 'react'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import images from '~/assets/img'
import styles from './Images.module.scss'
/**
 * @Aim Images Handle <img> tag when error images loading
 * @Param {
 *      @string src: url of success images
 *      @string fallback (errorImg another attribute avoid namesake): default image once failed load
 *
 * }
 */
const Images = forwardRef(({ src, alt, className, fallback: errorImg = images.defaultImg, ...props }, ref) => {
    const [fallback, setFallback] = useState('')
    const classes = classNames(styles.wrapper, className)
    const handleErrorImage = () => {
        setFallback(errorImg)
    }
    return <img ref={ref} className={classes} {...props} alt={alt} src={fallback || src} onError={handleErrorImage} />
})
Images.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}
export { Images }
