
import { useState } from 'react'
import styles from './Menu.module.scss';
// Config classnames
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'
import { Popper as MoreMenuPopper } from '../index.js';
import MenuItem from '~/components/Layout/Popper/Menu/MenuItem'
import HeaderMenu from './HeaderMenu'

const cx = classNames.bind(styles)
const defaultFn = () => { }

function Menu({ children, width, items = [], onChange = defaultFn }) {
    const [menuItem, setMenuItem] = useState([{ data: items }])
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
                        }
                        else {
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
            visible
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} style={{ 'width': width }} tabIndex="-1" {...attrs}>
                    <MoreMenuPopper className={cx('menu-box')}>
                        {(menuLength > 1) && <HeaderMenu title='Languages' onBack={handleBack} />}
                        {renderItem()}

                    </MoreMenuPopper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;