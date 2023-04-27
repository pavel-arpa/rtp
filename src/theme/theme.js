import { extendTheme } from '@chakra-ui/react'
import { buttonTheme } from './button'

export const theme = extendTheme({
    colors: {
        cBlue: {
            normal: '#224386',
            hover: 'rgba(34, 67, 134, 0.9)'
        }
    },
    fonts: {
        heading: `'Ubuntu', sans-serif`,
        body: `'Ubuntu', sans-serif`,
      },
    components: { Button: buttonTheme },
})