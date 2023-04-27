import { Button, Heading } from "@chakra-ui/react";
import AppBreadcrupms from "../../components/AppBreadcrumps/AppBreadcrupms";
import PageActions from "../../components/PageActions/PageActions";
import ProductCard from "../../components/ProductCard/ProductCard";
import s from './Cart.module.sass'
import UnderlinedHeading from "../../components/UnderlinedHeading/UnderlinedHeading";
import BuyProductCard from "../../components/BuyProductCard/BuyProductCard";

const Cart = () => {
    return (
        <div className={s.cart}>
            <div style={{ marginTop: '30px' }}>
                <PageActions />
            </div>
            <div style={{ margin: '50px 0' }}>
                <AppBreadcrupms breads={['Главная', 'Корзина']} />
            </div>

            <div className={s.cartWrapper}>
                <div className={s.items}>
                    {[0, 1, 2, 3, 4].map(el => (
                        <BuyProductCard price={780} oldPrice={1400} title={'Труба из полипропилена PN SDR 11'}>
                            Труба из полипропилена . PN 16 SDR 7.4 ХВС, ГВС, отопление до 60 0С., проекта сантехники для дома ALPHA диаметр 25мм., толщена стенки 3,5мм., 25 шт*4м., цвет белый
                        </BuyProductCard>
                    ))}
                </div>
                <div className={s.buy}>
                    <Button>Перейти к оформлению</Button>
                    <span>Доступные способы и время доставки можно выбрать при оформлении заказа</span>
                    <hr />
                    <b>Ваша корзина</b>
                    <hr />
                    <div className={s.toPay}>
                        <b>Всего к оплате</b>
                        <b>17 000 ₽</b>
                    </div>
                </div>
            </div>

            <UnderlinedHeading>С этим часто покупают</UnderlinedHeading>
            <div className={s.mayLike}>
                {[0, 1, 2, 3, 4].map(el => (
                    <ProductCard price={780} oldPrice={1400}>
                        Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.
                    </ProductCard>
                ))}
            </div>
        </div>
    )
}

export default Cart;