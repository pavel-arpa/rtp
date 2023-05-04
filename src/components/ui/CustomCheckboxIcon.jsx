import icon from '../icons/checkbox.svg'
import iconOff from '../icons/checkbox-off.svg'

const CustomCheckboxIcon = (props) => {
    const { isIndeterminate, isChecked, ...rest } = props

    return (
        <>
            {isChecked ? (
                <img src={icon} alt="" />
            ) : (
                <img src={iconOff} alt="" />
            )}
        </>
    )
}

export default CustomCheckboxIcon;