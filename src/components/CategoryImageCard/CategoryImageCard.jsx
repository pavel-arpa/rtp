import s from './CategoryImageCard.module.sass'


const CategoryImageCard = ({ text, color, bgImageSrc, badgeSrc }) => {
    return (
        <div className={s.categoryImageCard} style={{ background: color }}>
            <img src={bgImageSrc} alt="" className={s.image} />
            <img src={badgeSrc} alt="" />
            <div>
                {text}
            </div>
        </div>
    )
}

export default CategoryImageCard;