import CategoryCard from '../../components/CategoryCard/CategoryCard';
import PageActions from "../../components/PageActions/PageActions";
import { categories } from '../../constants';
import s from './Catalog.module.sass'

const Catalog = () => {
    return (
        <div className={s.catalog}>
            <div style={{marginTop: '30px'}}>
                <PageActions />
            </div>
            <div className={s.grid}>
                <div className={s.grid__top}>
                    <CategoryCard title={categories.alpha.name} items={categories.alpha.items}/>
                    <div className={s.grid__topRight}>
                        <CategoryCard title={categories.sigma.name} items={categories.sigma.items}/>
                        <CategoryCard title={categories.delta.name} items={categories.delta.items}/>
                        <CategoryCard title={categories.omega.name} items={categories.omega.items}/>
                    </div>
                </div>
                <div className={s.grid__bottom}>
                    <CategoryCard title={categories.betaElite.name} items={categories.betaElite.items}/>
                    <CategoryCard title={categories.betaOrange.name} items={categories.betaOrange.items}/>
                    <CategoryCard title={categories.beta.name} items={categories.beta.items}/>
                    <CategoryCard title={categories.gamma.name} items={categories.gamma.items}/>
                </div>
            </div>

        </div>
    )
}

export default Catalog;