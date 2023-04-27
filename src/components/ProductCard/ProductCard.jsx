import s from './ProductCard.module.sass'
import noImage from '../icons/no_image.svg'
import { Button, IconButton } from '@chakra-ui/react';
import plus from '../icons/plus.svg'
import minus from '../icons/minus.svg'

const ProductCard = ({ price, oldPrice, children }) => {
    return (
        <div className={s.productCard}>
            <div className={s.image}>
                <img src={noImage} alt="" />
            </div>
            <span className={s.text}>{children}</span>
            <div className={s.price}>
                <span className={s.price__amount}>{price} ₽</span>
                <span className={s.price__none}>{oldPrice} ₽</span>
            </div>
            <div className={s.actions}>
                <div className={s.addRemove}>
                    <IconButton variant={'grayed'} icon={<img src={minus} alt='' />} />
                    999
                    <IconButton variant={'grayed'} icon={<img src={plus} alt='' />} />
                </div>
                <Button>В корзину</Button>
            </div>
        </div>
    )
}

export default ProductCard;