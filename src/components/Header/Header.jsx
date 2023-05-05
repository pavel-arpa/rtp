import s from './Header.module.sass'
import logo from '../icons/logo.png'
import chevronOn from '../icons/chevron-on.svg'
import chevronOff from '../icons/chevron-off.svg'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { categories } from '../../constants'
import { useState } from 'react'



const getMenuItems = () => {
    const systems = [
        categories.alpha, categories.sigma, categories.omega, categories.betaOrange,
        categories.delta, categories.beta, categories.betaElite, categories.gamma
    ]
    const getName = (name) => {
        const nameParts = name.split(' - ')
        return <>
            <b>{nameParts[0]}</b>&nbsp;
            <span>{nameParts[1]}</span>
        </>
    }

    return systems.map(el => (
        <MenuItem className={s.menu__item}>
            <div className={s.menu__imageOn}>
                <img src={el.icon.on} alt="" />
            </div>
            <img className={s.menu__imageOff} src={el.icon.off} alt="" />
            <span>{getName(el.name)}</span>
        </MenuItem>
    ))
}


const Header = () => {
    const Text = {
        Description: `Производитель\nинженерной сантехники\nс 17 летним опытом`,
        WorkingDays: `Звонок бесплатный\nПн-Пт 9:00-18:00`
    }
    const [showChevron, setShowChevron] = useState(false)

    const handleToggleShowChevron = () => {
        setShowChevron(prev => !prev)
    }

    return (
        <div className={s.header}>
            <div className={s.header__inner}>
                <div className={s.logoBox}>
                    <div className={s.logoBox__wrapper}>
                        <img src={logo} alt="Логотип RTP" />
                        <div className={s.logoBox__line}></div>
                        <pre>{Text.Description}</pre>
                    </div>
                </div>

                <div className={s.links}>
                    <div className={s.anchors}>
                        <Menu
                            className={s.menu}
                            onOpen={handleToggleShowChevron}
                            onClose={handleToggleShowChevron}
                        >
                            <MenuButton className={s.menu__anchor} as={'span'}>
                                Системы&nbsp;{
                                    showChevron
                                        ? <img src={chevronOn} alt="" />
                                        : <img src={chevronOff} alt="" />
                                }
                            </MenuButton>
                            <MenuList className={s.menu__list}>
                                {getMenuItems()}
                            </MenuList>
                        </Menu>
                        <span>Услуги</span>
                        <span>Доставка и сервис</span>
                        <span>Оплата</span>
                        <span>О компании</span>
                        <span>Контакты</span>
                    </div>
                    <div className={s.phone}>
                        <span className={s.phone__number}>8 (495) 540-52-62</span>
                        <div className={s.phone__line}></div>
                        <pre className={s.phone__text}>{Text.WorkingDays}</pre>
                    </div>
                </div>

                <div className={s.actions}>
                    <Button className={s.actions__button} variant={'outline'}>Заказать обратный звонок</Button>
                    <span className={s.actions__email}>sales@rtp.ru</span>
                </div>
            </div>
        </div>
    )
}

export default Header;