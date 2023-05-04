import s from './ProductCard.module.sass'
import noImage from '../icons/no_image.svg'
import { Button, IconButton } from '@chakra-ui/react';
import plus from '../icons/plus.svg'
import minus from '../icons/minus.svg'
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

const ProductCard = ({ 
    price, oldPrice, children, sizing = 0, isShadow = false, discount, benefit
}) => {
    if (sizing === 1) return (
        <div className={[s.productCard, s.productCard_big].join(' ')}>
            <div className={s.leftSection}>
                <div className={[s.image, s.image_big].join(' ')}>
                    <img src={noImage} alt="" />
                </div>
                <div className={s.dots}>
                    <div className={s.dots__wrapper}>
                        <div className={`${s.dots__dot} ${s.dots__dot_active}`}></div>
                        {[0, 1, 2, 3].map(_ => (
                            <div key={nanoid()} className={s.dots__dot}></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={s.rightSection}>
                <div className={s.title}>
                    <NavLink to='/product' className={[s.text, s.text_bold].join(' ')}>
                        Труба из полипропилена PN SDR 11 - 20*1.9мм
                    </NavLink>
                    <span>{children}</span>
                </div>

                <div className={s.bottomSection}>
                    <div className={s.params}>
                        <div>
                            <span>DN номинальный диаметр, мм:</span>
                            <span>20</span>
                        </div>
                        <div>
                            <span>Толщина стенок, мм:</span>
                            <span>1,9</span>
                        </div>
                        <div>
                            <span>Кол-во в упаковке м/шт:</span>
                            <span>100/25</span>
                        </div>
                        <div>
                            <span>Материал:</span>
                            <span>Полипропилен</span>
                        </div>
                        <div>
                            <span>Цвет:</span>
                            <span>Белый</span>
                        </div>
                    </div>

                    <div className={s.actionsWrapper}>
                        <span className={s.price__amount}>{price} ₽</span>
                        <div className={[s.actions, s.actions_vertical].join(' ')}>
                            <div className={[s.addRemove, s.addRemove_wide].join(' ')}>
                                <IconButton variant={'grayed'} icon={<img src={minus} alt='' />} />
                                999
                                <IconButton variant={'grayed'} icon={<img src={plus} alt='' />} />
                            </div>
                            <Button>В корзину</Button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
    return (
        <div className={isShadow ? [s.productCard, s.productCard_shadow].join(' ') : s.productCard}>
            <div className={s.image}>
                <img src={noImage} alt="" />
                {discount && (
                    <div>-{discount}%</div>
                )}
            </div>
            <div className={s.dots} style={{ margin: '12px' }}>
                <div className={s.dots__wrapper}>
                    <div className={`${s.dots__dot} ${s.dots__dot_active}`}></div>
                    {[0, 1, 2, 3].map(_ => (
                        <div key={nanoid()} className={s.dots__dot}></div>
                    ))}
                </div>
            </div>
            <NavLink to='/product' className={s.text}>{children}</NavLink>
            <div className={benefit ? [s.price, s.price_narrow].join(' ') : s.price}>
                <span className={s.price__amount}>{price} ₽</span>
                <span className={s.price__none}>{oldPrice} ₽</span>
            </div>
            {benefit && (
                <div className={s.benefit}>
                    <hr />
                    <span>Выгода {benefit} ₽</span>
                    <hr />
                </div>
            )}
            <div className={s.actions}>
                <div className={s.addRemove}>
                    <IconButton variant={'grayed'} icon={<img src={minus} alt='' />} />
                    999
                    <IconButton variant={'grayed'} icon={<img src={plus} alt='' />} />
                </div>
                <Button className={s.button}>В корзину</Button>
            </div>
        </div>
    )
}

export default ProductCard;