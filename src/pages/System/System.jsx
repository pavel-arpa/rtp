import Sidebar from '../../components/Sidebar/Sidebar';
import s from './System.module.sass'
import alphaBanner from '../../components/images/banners/alpha.svg'
import SortFilter from '../../components/SortFilter/SortFilter';
import ProductCard from '../../components/ProductCard/ProductCard';
import PageActions from '../../components/PageActions/PageActions';
import AppBreadcrupms from '../../components/AppBreadcrumps/AppBreadcrupms';
import { nanoid } from 'nanoid';
import ListIcon from '../../components/icons/jsx/ListIcon';
import TilesIcon from '../../components/icons/jsx/TilesIcon';
import { useState } from 'react';
import CreateCartBanner from '../../components/CreateCartBanner/CreateCartBanner';



const System = () => {
    const [acitveItemsGridType, setAcitveItemsGridType] = useState(0)

    const handleChangeGridType = (gridType) => {
        return () => {
            setAcitveItemsGridType(gridType)
        }
    }

    return (
        <div className={s.system}>
            <div style={{ marginTop: '30px' }}>
                <PageActions />
            </div>
            <div style={{ margin: '50px 0' }}>
                <AppBreadcrupms breads={['Главная', 'Результаты поиска']} />
            </div>
            <div className={s.wrapper}>
                <Sidebar />
                <div>
                    <img src={alphaBanner} alt="" style={{ marginBottom: '54px' }} />
                    <div className={s.topActions}>
                        <SortFilter items={['По популярности', 'Новинки', 'Сначала дешёвые', 'Сначала дорогие']} />
                        <div className={s.gridType}>
                            <div onClick={handleChangeGridType(0)}>
                                <TilesIcon fill={acitveItemsGridType === 0 && '#224386'} />
                            </div>
                            <div onClick={handleChangeGridType(1)}>
                                <ListIcon fill={acitveItemsGridType === 1 && '#224386'} />
                            </div>
                        </div>
                    </div>
                    <div className={s.itemsWrapper}>
                        <div className={acitveItemsGridType === 0 ? s.items : `${s.items} ${s.items_listed}`}>
                            {[...Array(8).keys()].map(_ => (
                                <ProductCard key={nanoid()} price={250} oldPrice={555} sizing={acitveItemsGridType}>
                                    Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.
                                </ProductCard>
                            ))}
                        </div>
                        <CreateCartBanner />
                        <div className={acitveItemsGridType === 0 ? s.items : `${s.items} ${s.items_listed}`}>
                            {[...Array(8).keys()].map(_ => (
                                <ProductCard key={nanoid()} price={250} oldPrice={555} sizing={acitveItemsGridType}>
                                    Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.
                                </ProductCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default System;