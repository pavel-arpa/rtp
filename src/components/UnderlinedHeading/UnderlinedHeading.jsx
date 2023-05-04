import { Heading } from "@chakra-ui/react";
import s from './UnderlinedHeading.module.sass'

const UnderlinedHeading = ({ extraText, children }) => {
    return (
        <div className={s.heading}>
            <Heading fontSize={32} fontWeight={500} color={'cBlue.normal'} marginBottom={30}>
                <span>{children}</span>&nbsp;
                <span style={{ color: '#6C7689', fontWeight: 400 }}>{extraText}</span>
            </Heading>
        </div>
    )
}

export default UnderlinedHeading