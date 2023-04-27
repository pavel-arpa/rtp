import { Button } from "@chakra-ui/react"
import menuIcon from '../icons/menu.svg'
import s from './PageAction.module.sass'
import SearchInput from "../SearchInput/SearchInput"
import cart from '../icons/cart.svg'

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
                <div className={s.cart}>
                    <img src={cart} alt="" />
                    <span>Корзина</span>
                </div>
            </div>
        </div>
    )
}

export default PageActions