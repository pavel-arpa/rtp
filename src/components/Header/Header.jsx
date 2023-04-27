import s from './Header.module.sass'
import logo from '../icons/logo.png'
import { Button } from '@chakra-ui/react'

const Header = () => {
    const Text = {
        Description: `Производитель\nинженерной сантехники\nс 17 летним опытом`,
        WorkingDays: `Звонок бесплатный\nПн-Пт 9:00-18:00`
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
                        <span>Системы</span>
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