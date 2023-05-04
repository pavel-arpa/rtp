import { useState } from 'react';
import s from './SortFilter.module.sass'
import { nanoid } from 'nanoid';

const SortFilter = ({ items }) => {
    const [active, setActive] = useState(items[0])

    const handleSelect = (item) => {
        return () => setActive(item)
    }

    return (
        <div className={s.sortFilter}>
            {items.map(item => (
                <div
                    key={nanoid()}
                    className={item !== active ? s.item : `${s.item} ${s.item_active}`}
                    onClick={handleSelect(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default SortFilter;