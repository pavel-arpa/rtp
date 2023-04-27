import { Button, Card, Heading, IconButton } from "@chakra-ui/react";
import AppBreadcrupms from "../../components/AppBreadcrumps/AppBreadcrupms";
import PageActions from "../../components/PageActions/PageActions";
import s from './Product.module.sass'
import rating from '../../components/icons/rating.png'
import imgPlc from '../../components/icons/img_placeholder_big.svg'
import imgPlcSmall from '../../components/icons/img_placeholder_small.png'
import list from '../../components/icons/_list_chars.svg'
import plus from '../../components/icons/plus.svg'
import minus from '../../components/icons/minus.svg'
import createCart from '../../components/icons/create_cart.svg'
import extraActions from '../../components/icons/extra_actions.svg'
import charsBlockBig from '../../components/icons/charsBlockBig.svg'
import charsBlock from '../../components/icons/charsBlock.svg'
import UnderlinedHeading from "../../components/UnderlinedHeading/UnderlinedHeading";
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";


const Product = () => {
    const diameters = ['20/1,9', '25/2,3', '32/2,9', '50/4,5', '63/5,8', '75/6,8', '90/8,2', '110/10', '125/11,4', '140/12,7', '160/14,6']
    const counts = ['100/25', '50/25']
    const [activeDiameter, setActiveDiameter] = useState(diameters[0])
    const [activeCount, setActiveCount] = useState(counts[0])

    const handleSetDiameter = (index) => {
        return () => {
            setActiveDiameter(index)
        }
    }
    const handleSetCount = (index) => {
        return () => {
            setActiveCount(index)
        }
    }
    return (
        <div className={s.productCard}>
            <div className={s.productCard__actions}>
                <PageActions />
            </div>
            <div className={s.productCard__breadcrumps}>
                <AppBreadcrupms breads={['Главная', 'Каталог', 'Трубы и фитинги из полипропилена', 'Труба из полипропилена PN SDR 11']} />
            </div>
            <div className={s.productCard__product}>
                <div className={s.infoWrapper}>
                    <div>
                        <Heading fontSize={32} fontWeight={500} color={'cBlue.normal'}>Труба из полипропилена PN SDR 11 для холодной воды, 4 метра - 20*1.9мм.</Heading>
                        <div className={s.info}>
                            <img src={rating} alt="" />
                            <span>19 отзывов</span>
                            <span>23 вопроса</span>
                            <span>Остаток на складе: <span className={s.info__alot}>Много</span></span>
                        </div>
                    </div>
                    <div className={s.extraActions}>
                        <img src={extraActions} alt="" />
                        <span>Артикул 599221204</span>
                        <span>Код УТ-00009617</span>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.images}>
                        <div className={s.images__items}>
                            {[0, 1, 2, 3, 4, 5].map(img => (
                                <img src={imgPlcSmall} alt='' />
                            ))}
                        </div>
                        <img src={imgPlc} alt="" />
                    </div>
                    <div className={s.params}>
                        <span className={s.subHeading}>Диаметр/толщина стенок, мм:</span>
                        <div className={s.diameters}>
                            {diameters.map(d => (
                                <span onClick={handleSetDiameter(d)} className={s.elem} style={(activeDiameter === d) ? { background: '#224386', color: 'white' } : {}}>{d}</span>
                            ))}
                        </div>
                        <span className={s.subHeading}>Количество в упаковке, м/шт:</span>
                        <div className={s.counts}>
                            {counts.map(c => (
                                <span onClick={handleSetCount(c)} className={s.elem} style={(activeCount === c) ? { background: '#224386', color: 'white' } : {}}>{c}</span>
                            ))}
                        </div>
                        <span className={s.subHeading}>Цвет:</span>
                        <div className={s.colors}>
                            <Card width={'120px'} height={'48px'} variant={'outline'} />
                            <Card width={'120px'} height={'48px'} variant={'outline'} bgColor={'#F2F4F7'} />
                        </div>
                        <span className={s.subHeading}>Характеристики</span>
                        <div>
                            <img src={list} alt="" />
                        </div>
                    </div>
                    <div className={s.buy}>
                        <div className={s.buy__elems}>
                            <span className={s.buy__priceTitle}>Цена за упаковку</span>
                            <span className={s.buy__price}>2 885 ₽</span>
                            <span>x4</span>
                            <hr style={{ width: '100%' }} />
                            <span className={s.buy__priceTotal}>11 540 ₽</span>
                        </div>
                        <div className={s.addRemove}>
                            <IconButton variant={'grayed'} icon={<img src={minus} alt='' />} />
                            4
                            <IconButton variant={'grayed'} icon={<img src={plus} alt='' />} />
                        </div>
                        <Button width={'100%'}>В корзину</Button>
                        <Button variant={'link'} width={'100%'} height={'42px'}>Рассчитать доставку</Button>
                        <img src={createCart} alt="" />
                    </div>
                </div>

                <UnderlinedHeading>
                    С этим часто покупают
                </UnderlinedHeading>
                <div className={s.cards}>
                    {[0, 1, 2, 3, 4].map(el => (
                        <ProductCard price={189} oldPrice={262}>
                            Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.
                        </ProductCard>
                    ))}
                </div>

                <UnderlinedHeading>
                    Описание
                </UnderlinedHeading>
                <div style={{marginBottom: '32px'}}>
                    Трубы из полипропилена для напорного водоснабжения (ХВС, ГВС) и отопления. Обладают отличными прочностными характеристиками и изготавливаются согласно требованиям ГОСТ.
                    RTP располагает самым широким ассортиментом труб и фитингов, что позволяет осуществлять монтаж любой сложности.
                    Трубы из полипропилена для напорного водоснабжения (ХВС, ГВС) и отопления. Обладают отличными прочностными характеристиками и изготавливаются согласно требованиям ГОСТ.
                    RTP располагает самым широким ассортиментом труб и фитингов, что позволяет осуществлять монтаж любой сложности. Трубы из полипропилена для напорного водоснабжения (ХВС, ГВС) и отопления.
                    Обладают отличными прочностными характеристиками и изготавливаются согласно требованиям ГОСТ. RTP располагает самым широким ассортиментом труб и фитингов, что позволяет осуществлять монтаж любой сложности.
                </div>

                <UnderlinedHeading>
                    Характеристики
                </UnderlinedHeading>
                <div style={{marginBottom: '191px'}}>
                    <img src={charsBlockBig} alt='' />
                    <br />
                    <img src={charsBlock} alt='' />
                </div>

            </div>
        </div>
    )
}

export default Product;