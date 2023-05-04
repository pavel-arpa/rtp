import logo from '../icons/logo.png'
import phone from '../icons/phone.svg'
import mail from '../icons/mail.svg'
import vk from '../icons/vk.svg'
import ok from '../icons/ok.svg'
import tg from '../icons/tg.svg'
import mir from '../icons/mir.png'
import visa from '../icons/visa.png'
import master from '../icons/master.png'
import unionpay from '../icons/unionpay.png'
import s from './Footer.module.sass'



const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="w-10/12 mx-auto py-10 grid lg:grid-cols-9 md:grid-cols-9 grid-cols-1 gap-10">
                <div className="contact col-span-3">
                    <img src={logo} alt="" />

                    <div className="my-10">
                        <span>Оставайтесь на связи</span>
                        <div className="flex mt-5 space-x-5">
                            <div className="flex items-center space-x-3">
                                <img src={phone} alt="" />
                                <a href="#">8 (495) 540-52-62</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img src={mail} alt="" />
                                <a href="#">info@rosturplast.ru</a>
                            </div>
                        </div>
                        <span className="block mt-3">Следите за новинками и акциями</span>
                    </div>

                    <div className="flex items-center space-x-5">
                        <a href="#">
                            <img src={vk} alt="" />
                        </a>
                        <a href="#">
                            <img src={ok} alt="" />
                        </a>
                        <a href="#">
                            <img src={tg} alt="" />
                        </a>
                    </div>

                    <span className="cop-text block mt-20">©2000 - 2023  |   Все права защищены</span>
                </div>
                <div className="menu col-span-4 flex flex-col justify-between">
                    <div>
                        <h5 className="title">Компания</h5>
                        <div className="flex justify-between mt-5">
                            <div>
                                <ul>
                                    <li>
                                        <a href="#">О компании</a>
                                    </li>
                                    <li>
                                        <a href="#">Каталог</a>
                                    </li>
                                    <li>
                                        <a href="#">О компании</a>
                                    </li>
                                    <li>
                                        <a href="#">Услуги</a>
                                    </li>
                                    <li>
                                        <a href="#">Оплата</a>
                                    </li>
                                    <li>
                                        <a href="#">Корзина</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <a href="#">Сервис и доставка</a>
                                    </li>
                                    <li>
                                        <a href="#">Оформление заказа</a>
                                    </li>
                                    <li>
                                        <a href="#">Контакты</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-10">
                        <img src={mir} alt="" />
                        <img src={master} alt="" />
                        <img src={visa} alt="" />
                        <img src={unionpay} alt="" />
                    </div>
                </div>
                <div className="third col-span-2 flex items-end">
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </div>
            {/* <div className="cookie py-5 border-t border-gray-100 flex flex-wrap justify-center items-center space-x-3 px-5">
                <span className="text-sm font-bold text-white text-center">Мы используем файлы cookie для вашего удобства пользования сайтом и повышения качества рекомендаций.</span>
                <a href="#" className="text-blue-500 text-sm font-bold">Подробнее</a>
                <button type="button" className="border border-gray-400 text-gray-400 text-sm font-bold py-2 px-4 rounded">Я согласен</button>
            </div> */}
        </footer>
    )
}
export default Footer