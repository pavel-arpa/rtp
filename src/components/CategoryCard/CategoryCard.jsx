import { NavLink } from 'react-router-dom';
import arrowIcon from '../icons/arrow.svg'
import s from './CategoryCard.module.sass'

const CategoryCard = ({ title, items }) => {
    return (
        <div className={s.categoryCard}>
            <NavLink to='/system' className={s.categoryCard__title}>
                <b>{title}</b>
                <img src={arrowIcon} alt="" />
            </NavLink>
            <div className={s.categoryCard__items}>
                {items.map(category => (
                    <div className={s.categoryCard__item}>
                        <span className={s.categoryCard__name}>{category.name}</span>
                        <span className={s.categoryCard__count}>{category.count}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryCard;