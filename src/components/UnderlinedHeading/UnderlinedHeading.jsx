import { Heading } from "@chakra-ui/react";

const UnderlinedHeading = ({ children }) => {
    return (
        <Heading fontSize={32} fontWeight={500} color={'cBlue.normal'} textDecoration={'underline'} marginBottom={30}>
            {children}
        </Heading>
    )
}

export default UnderlinedHeading