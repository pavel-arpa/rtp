import s from './CategoryPresentationCard.module.sass'

const CategoryPresentationCard = ({ text, color, bgImageSrc, badgeSrc }) => {
    return (
        <div className={s.categoryImageCard}>
            <img src={bgImageSrc} alt="" className={s.image} />
            <img src={badgeSrc} alt="" className={s.badge} style={{height: '52px'}}/>
            <div className={s.text}>
                {text}
            </div>
            <div className={s.gradient}></div>
        </div>
    )
}

export default CategoryPresentationCard;