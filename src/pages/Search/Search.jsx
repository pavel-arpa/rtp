import { Heading } from '@chakra-ui/react';
import s from './Search.module.sass'
import ProductCard from '../../components/ProductCard/ProductCard';
import PageActions from '../../components/PageActions/PageActions';
import AppBreadcrupms from '../../components/AppBreadcrumps/AppBreadcrupms';

const Search = () => {
    return (
        <div className={s.search}>
            <div style={{ marginTop: '30px' }}>
                <PageActions />
            </div>
            <div style={{ margin: '50px 0' }}>
                <AppBreadcrupms breads={['Главная', 'Результаты поиска']} />
            </div>
            <Heading size='2xl' mb='34px'>Результаты поиска</Heading>
            <div style={{ marginBottom: '90px' }}>
                <ProductCard price={250} oldPrice={555}>
                    Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.
                </ProductCard>
            </div>
            <Heading mb='34px'>Вам это понравится</Heading>
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

export default Search;