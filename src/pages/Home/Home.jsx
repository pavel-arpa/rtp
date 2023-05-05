import { Button, Checkbox, Input, Textarea } from '@chakra-ui/react';
import { categories } from '../../constants';
import CategoryPresentationCard from '../../components/CategoryPresentationCard/CategoryPresentationCard';
import UnderlinedHeading from '../../components/UnderlinedHeading/UnderlinedHeading';
import CustomCbIcon from '../../components/ui/CustomCbIcon';
import ReactInputMask from 'react-input-mask';
import ProductCard from '../../components/ProductCard/ProductCard';
import PageActions from '../../components/PageActions/PageActions';
import s from './Home.module.sass'

import banner from '../../components/images/banners/banner-big.svg'
import leftIcon from '../../components/images/left.svg'
import rightIcon from '../../components/images/right.svg'
import map from '../../components/images/map.svg'
import advProfi from '../../components/images/profi.svg'
import advIdeas from '../../components/images/ideas.svg'
import advResult from '../../components/images/result.svg'
import advQuality from '../../components/images/quality.svg'
import gallery from '../../components/images/gallery.svg'

import feedback from '../../components/bg/feedback.png'
import factory from '../../components/bg/factory.png'

import play from '../../components/icons/play.svg'




const Home = () => {
    const systems = [
        categories.alpha, categories.sigma, categories.omega, categories.betaOrange,
        categories.delta, categories.beta, categories.betaElite, categories.gamma
    ]
    return (
        <>
            <div className={s.home}>
                <div style={{ marginTop: '30px', marginBottom: '45px' }}>
                    <PageActions />
                </div>

                <div className={s.bannerWrapper}>
                    <img className={s.banner} src={banner} alt="" />
                    <img className={s.left} src={leftIcon} alt="" />
                    <img className={s.right} src={rightIcon} alt="" />
                    <div className={s.bannerInfo}>
                        <div>Полипропиленовые <br /> трубы и фитинги PP-R</div>
                        <Button className={s.button} variant={'outline'}>Подробнее</Button>
                    </div>
                </div>

                <div className={s.categories}>
                    {systems.map(category => (
                        <CategoryPresentationCard
                            text={category.name.split(' - ').join(' ')}
                            color={'#ededed'}
                            badgeSrc={category.badge}
                            bgImageSrc={category.bigBg}
                        />
                    ))}
                </div>

                <div className={s.feedback}>
                    <img src={feedback} alt="" />
                    <div className={s.feedback__content}>
                        <div className={s.feedback__form}>
                            <div className={s.feedback__title}>
                                <span>Не знаете, что выбрать или есть вопросы?</span>
                                <div></div>
                                <span>Мы поможем! Позвоните нам <br /> по телефону <b>+7 (495) 540 52 62</b><br />или оставьте заявку.</span>
                            </div>
                            <div className={s.feedback__inputs}>
                                <div>
                                    <span className={s.feedback__label}>Имя*</span>
                                    <Input
                                        placeholder='Введите имя'
                                        border='2px solid'
                                        borderColor='#BDBDBD'
                                        focusBorderColor='cBlue.normal'
                                        bg='white'
                                        color='#224386'
                                    />
                                </div>
                                <div>
                                    <span className={s.feedback__label}>E-mail*</span>
                                    <Input
                                        placeholder='Введите e-mail'
                                        border='2px solid'
                                        borderColor='#BDBDBD'
                                        focusBorderColor='cBlue.normal'
                                        bg='white'
                                        color='#224386'
                                        type='email'
                                    />
                                </div>
                                <div>
                                    <span className={s.feedback__label}>Телефон*</span>
                                    <ReactInputMask mask="+7 (999) 999-99-99">
                                        {(inputProps) => (
                                            <Input
                                                {...inputProps}
                                                placeholder='+7'
                                                border='2px solid'
                                                borderColor='#BDBDBD'
                                                focusBorderColor='cBlue.normal'
                                                bg='white'
                                                color='#224386'
                                                type='tel'
                                            />
                                        )}
                                    </ReactInputMask>
                                    <Checkbox
                                        icon={<CustomCbIcon />}
                                        colorScheme='cBlue.normal'
                                        className={s.checkbox}
                                        defaultChecked
                                    >
                                        Согласие с политикой конфиденциальности
                                    </Checkbox>
                                    <Button variant={'outline'} className={s.feedback__send}>
                                        Отправить
                                    </Button>
                                </div>
                                <div>
                                    <span className={s.feedback__label}>Сообщение</span>
                                    <Textarea
                                        placeholder='Введите текст'
                                        border='2px solid'
                                        borderColor='#BDBDBD'
                                        focusBorderColor='cBlue.normal'
                                        bg='white'
                                        color='#224386'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <UnderlinedHeading extraText={'предложение на'}>
                        Получите лучшее
                    </UnderlinedHeading>
                    <div className={s.products}>
                        <img className={s.products__left} src={leftIcon} alt="" />
                        {[...Array(4).keys()].map(el => (
                            <ProductCard key={el} price={780} oldPrice={1400} isShadow benefit={62} discount={25}>
                                Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.
                            </ProductCard>
                        ))}
                        <img className={s.products__right} src={rightIcon} alt="" />
                    </div>
                </div>
            </div>

                <div className={s.factory}>
                    <img className={s.factory__bg} src={factory} alt="" />
                    <div className={s.factory__video}>
                        <img src={play} alt="" />
                        <span>
                            Узнайте, как работает наш завод.
                            <br />
                            Это займет не более 10 минут.
                        </span>
                        <Button variant='outline' className={s.factory__button}>
                            Смотреть видео
                        </Button>
                    </div>
                </div>

            <div className={s.home}>
                <UnderlinedHeading>
                    Наши преимущества
                </UnderlinedHeading>
                <div className={s.advantages}>
                    <img src={advProfi} alt="" />
                    <img src={advIdeas} alt="" />
                    <img src={advResult} alt="" />
                    <img src={advQuality} alt="" />
                </div>

                <UnderlinedHeading>
                    Услуги по монтажу
                </UnderlinedHeading>
                <div className={s.gallery}>
                    <img src={gallery} alt="" />
                    <Button variant={'outline'} className={s.gallery__button}>Показать еще</Button>
                </div>

                <UnderlinedHeading>
                    География развития
                </UnderlinedHeading>
                <img className={s.map} src={map} alt="" />
            </div>
        </>
    )
}

export default Home;