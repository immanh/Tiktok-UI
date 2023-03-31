

import styles from './Menu.module.scss';
// Config classnames
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'
import { Popper as MoreMenuPopper } from '../index.js';
import MenuItem from '~/components/Layout/Popper/Menu/MenuItem'

const cx = classNames.bind(styles)

function Menu({ children, width, items = [] }) {
    const renderItem = () => {
        return items.map(item => {
            return (
                <MenuItem
                    data={item}
                    key={item.id}
                />

            )
        })
    }
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} style={{ 'width': width }} tabIndex="-1" {...attrs}>
                    <MoreMenuPopper className={cx('menu-box')}>
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