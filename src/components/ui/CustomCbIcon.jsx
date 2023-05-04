import iconOn from '../icons/cb-on.svg'
import iconOff from '../icons/cb-off.svg'

const CustomCbIcon = (props) => {
    const { isIndeterminate, isChecked, ...rest } = props

    return (
        <>
            {isChecked ? (
                <img src={iconOn} alt="" />
            ) : (
                <img src={iconOff} alt="" />
            )}
        </>
    )
}

export default CustomCbIcon;