import s from './CreateCartBanner.module.sass'
import cart from '../icons/cart-big.svg'
import { Button } from '@chakra-ui/react';

const CreateCartBanner = () => {
    return (
        <div className={s.wrapper}>
            <img src={cart} alt="" />
            <div className={s.text}>
                <span>Соберите мне корзину</span>
                <span>
                    Доверти покупки профессионалам, загрузите или заполните список и наш менеджер соберет вам корзину
                </span>
            </div>
            <Button>Заказать обратный звонок</Button>
        </div>
    )
}

export default CreateCartBanner;