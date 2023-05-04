import { Button } from "@chakra-ui/react"
import menuIcon from '../icons/menu.svg'
import s from './PageAction.module.sass'
import SearchInput from "../SearchInput/SearchInput"
import cart from '../icons/cart.svg'
import { NavLink } from "react-router-dom"

const PageActions = () => {
    return (
        <div className={s.pageActions}>
            <div className={s.pageActions__catalog}>
                <Button leftIcon={<img src={menuIcon} alt='' />}>
                    Каталог товаров
                </Button>
            </div>
            <SearchInput />
            <div className={s.pageActions__cartButton}>
                <NavLink to='/cart' className={s.cart}>
                    <img src={cart} alt="" />
                    <span>Корзина</span>
                </NavLink>
            </div>
        </div>
    )
}

export default PageActions