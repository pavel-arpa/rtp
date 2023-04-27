import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'

const SearchInput = () => {
    return (
        <InputGroup>
            <Input
                placeholder='Поиск'
                borderRadius={50}
                border='2px solid'
                borderColor='cBlue.normal'
                focusBorderColor='cBlue.hover'
            />
            <InputRightElement children={<SearchIcon color='cBlue.normal' />} />
        </InputGroup>
    )
}

export default SearchInput;