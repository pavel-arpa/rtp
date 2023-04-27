import { Heading, IconButton } from '@chakra-ui/react';
import noImage from '../icons/no_image.svg'
import plus from '../icons/plus.svg'
import minus from '../icons/minus.svg'
import s from './BuyProductCard.module.sass'



const BuyProductCard = ({ children, price, title }) => {
    return (
        <div className={s.productCard}>
            <div className={s.image}>
                <img src={noImage} alt="" />
            </div>
            <div className={s.info}>
                <Heading size='sm'>{title}</Heading>
                <span className={s.text}>{children}</span>
            </div>
            <div className={s.rightSide}>
                <div className={s.actions}>
                    <div className={s.addRemove}>
                        <IconButton variant={'grayed'} icon={<img src={minus} alt='' />} />
                        999
                        <IconButton variant={'grayed'} icon={<img src={plus} alt='' />} />
                    </div>
                </div>
                <div className={s.price}>
                    <span className={s.price__amount}>{price} ₽</span>
                </div>
            </div>
        </div>
    )
}

export default BuyProductCard;