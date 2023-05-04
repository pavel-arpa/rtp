import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';
import s from './Sidebar.module.sass'
import CustomCheckboxIcon from '../ui/CustomCheckboxIcon';
import { useState } from 'react';
import { nanoid } from 'nanoid';


const Sidebar = () => {
    const checkboxGroups = [
        {
            title: 'Вид фитинга',
            items: [
                'Муфта (21)',
                'Отводы и угольники (60)',
                'Тройники и крестовины (1)',
                'Запорная арматура (1)',
                'Другое (1)',
            ]
        },
        {
            title: 'Тип фитинга',
            items: [
                'Переходной (21)'
            ]
        },
        {
            title: 'Тип соединения изделий',
            items: [
                'Разъемный  (1)',
                'Пайка (1)',
            ]
        },
        {
            title: 'Вид резьбы',
            items: [
                'Внутренняя (21)',
                'Наружная (60)',
                'Без резьбы (1)',
            ]
        },
        {
            title: 'Размер резьбы',
            items: [
                '1/2 (1)',
                '3/4 (1)',
                '1 (1)',
                '1,25 (1)',
                '1,5 (1)',
                '2 (1)',
                '3 (1)',
                '4 (1)',
            ]
        },
        {
            title: 'Диаметр',
            items: [
                '20 мм (60)',
                '25 мм (1)',
                '32 мм (1)',
                '40 мм (1)',
                '50 мм(1)',
                '63 мм (1)',
                '75 мм (1)',
                '90 мм (1)',
                '110 мм (1)',
                '125 мм(1)',
                '140 мм (1)',
                '160 мм(1)',
            ]
        },
        {
            title: 'Цвет',
            items: [
                'Белый (21)',
                'Серый (60)',
                'Зелёный (1)',
            ]
        },
    ]

    const subcategories = [
        'Фитинги',
        'Запорная арматура',
        'Коллекторы',
        'Труба армированная',
        'Труба не армированная',
        'Оборудование для монтажа',
        'Материалы для монтажа',
        'Другое',
    ]

    const [inputs, setInputs] = useState([30, 1000])

    const handleChangeInput = (inputIndex) => {
        return (e) => {
            const _inputs = [...inputs]
            _inputs[inputIndex] = e.target.value
            setInputs(_inputs)
        }
    }

    const handleChangeRange = (value) => {
        if (value[0] !== inputs[0] || value[1] !== inputs[1])
            setInputs(value)
    }

    return (
        <div className={s.sidebar}>
            <div className={s.title}>
                <span>
                    Фильтр
                </span>
                <span>
                    очистить
                </span>
            </div>

            <div className={s.range}>
                <div className={s.range__inputs}>
                    <Input
                        value={inputs[0]}
                        onChange={handleChangeInput(0)}
                        type='number'
                        placeholder='от'
                        bg='#A6ACB32B'
                        borderRadius='4px'
                        border='1px solid #A6ACB32B'
                    />
                    <div className={s.range__line}></div>
                    <Input
                        value={inputs[1]}
                        onChange={handleChangeInput(1)}
                        type='number'
                        placeholder='до'
                        bg='#A6ACB32B'
                        borderRadius='4px'
                        border='1px solid #A6ACB32B'
                    />
                </div>
                <RangeSlider value={inputs} min={0} max={3000} step={50} onChange={handleChangeRange}>
                    <RangeSliderTrack bg='#E9EDF5'>
                        <RangeSliderFilledTrack bg='cBlue.normal' />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={4} index={0} bg='cBlue.normal'>
                    </RangeSliderThumb>
                    <RangeSliderThumb boxSize={4} index={1} bg='cBlue.normal'>
                    </RangeSliderThumb>
                </RangeSlider>
            </div>

            <div className={s.subcategories}>
                {subcategories.map(sc => (
                    <span key={nanoid()}>{sc.toUpperCase()}</span>
                ))}
            </div>
            <div>
                <Accordion defaultIndex={[...Array(checkboxGroups.length).keys()]} allowMultiple className={s.accordion}>
                    {checkboxGroups.map(checkboxGroup => (
                        <AccordionItem key={nanoid()}>
                            <AccordionButton px='0px'>
                                <Box as="span" flex='1' textAlign='left'>
                                    <span className={s.accordion__title}>
                                        {checkboxGroup.title}
                                    </span>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel px='0px' paddingBottom='30px'>
                                <div className={s.accordion__panel}>
                                    {checkboxGroup.items.map(checkbox => (
                                        <Checkbox
                                            key={nanoid()}
                                            icon={<CustomCheckboxIcon />}
                                            colorScheme='cBlue.normal'
                                            className={s.checkbox}
                                            defaultChecked
                                        >
                                            {checkbox}
                                        </Checkbox>
                                    ))}
                                    {checkboxGroup.items.length > 4 && (
                                        <span className={s.accordion__hide}>Скрыть часть</span>
                                    )}
                                </div>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <Button mt='20px'>Применить</Button>
        </div>
    )
}

export default Sidebar;