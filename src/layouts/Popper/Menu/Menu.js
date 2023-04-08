import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Menu.module.scss'
// Config classnames
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { Popper as MoreMenuPopper } from '../index.js'
import MenuItem from '~/layouts/Popper/Menu/MenuItem'
import HeaderMenu from './HeaderMenu'

const cx = classNames.bind(styles)
const defaultFn = () => {}

function Menu({ children, width, hideOnClick = false, items = [], onChange = defaultFn }) {
    const [menuItem, setMenuItem] = useState([{ data: items }])
    useEffect(() => {
        setMenuItem([{ data: items }])
    }, [items])
    const menuLength = menuItem.length
    const currentItem = menuItem[menuLength - 1]
    const renderItem = () => {
        return currentItem.data.map((item, index) => {
            /* Check menu-item có phải là item đa cấp */
            const isParent = !!item.children
            /**
             * @bool isParent {true: menu-item có cấp tiếp theo; false: menu-item chỉ có 1 cấp}
             */
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onSelect={() => {
                        if (isParent) {
                            setMenuItem((prev) => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }
    const handleBack = () => {
        setMenuItem(menuItem.slice(0, menuLength - 1))
    }
    return (
        <Tippy
            interactive
            visible
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            placement="bottom-end"
            onHide={() => setMenuItem(menuItem.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-list')} style={{ width: width }} tabIndex="-1" {...attrs}>
                    <MoreMenuPopper className={cx('menu-box')}>
                        {menuLength > 1 && <HeaderMenu title={currentItem.title} onBack={handleBack} />}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </MoreMenuPopper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.number,
    hideOnClick: PropTypes.bool,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func,
}
export default Menu
