import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle((props) => {
    const { colors } = props.theme
    return {
        border: '2px solid',
        borderColor: 'white',
        borderRadius: 41,
        color: 'white',

        _hover: {
            borderColor: colors.cBlue.normal,
            color: colors.cBlue.normal,
            bgColor: 'white'
        }
    }
})

const solid = defineStyle((props) => {
    const { colors } = props.theme
    return {
        borderRadius: 3,
        color: 'white',
        bgColor: colors.cBlue.normal,
        transition: 'all 0.2s',

        _hover: {
            filter: 'drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.25))',
            bgColor: colors.cBlue.hover,
        }
    }
})

const grayed = defineStyle((props) => {
    const { colors } = props.theme
    return {
        borderRadius: 3,
        color: 'black',
        bgColor: '#EDEDED',
        transition: 'all 0.2s',

        _hover: {
            filter: 'drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.25))',
            bgColor: 'rgba(185, 185, 185, 1)',
        }
    }
})

const link = defineStyle((props) => {
    const { colors } = props.theme
    return {
        textDecoration: 'underline',
        fontWeight: 400,
        color: colors.cBlue.normal,

        _hover: {
            color: colors.cBlue.hover,
        }
    }
})

export const buttonTheme = defineStyleConfig({
    variants: {
        outline,
        solid,
        grayed,
        link
    },
})