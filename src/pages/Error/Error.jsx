import { useEffect, useRef } from "react";
import PageActions from "../../components/PageActions/PageActions";
import AppBreadcrupms from "../../components/AppBreadcrumps/AppBreadcrupms";

const Error = () => {
    const style = `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    error {
      margin: 0;
      padding: 0;
      font-family: Ubuntu;
    }

    .container {
      width: 100%;
      max-width: 1544px;
      margin: 0 auto;
      margin-top: -100px
    }

    .container_common {
      margin-top: 83px
    }

    .error__number {
      font-family: Bebas Neue;
      font-size: 496px;
      font-weight: 400;
      line-height: 496px;
      color: #224386;
      transform: translateY(112px);
    }

    .error__block {
      padding: 48px 0 62px;
      background-color: #224386;
    }

    .error__text {
      font-size: 40px;
      font-weight: 700;
      line-height: 50px;
      margin-bottom: 40px;
      color: #fff;
    }

    .btn {
      font-size: 17px;
      line-height: 20px;
      border: 1px solid #fff;
      color: #fff;
      padding: 10px 40px;
      border-radius: 5px;
      text-decoration: none;
      transition: 0.2s;
    }

    .btn:hover {
      background-color: #fff;
      color: #224386;
    }
  </style>
    `
    const ref = useRef()

    useEffect(() => {
        ref.current.insertAdjacentHTML('afterend', style)
    }, [])

    return (
        <div ref={ref}>
            <div style={{marginTop: '30px'}}>
                <PageActions />
            </div>
            <div style={{ margin: '50px 0' }}>
                <AppBreadcrupms breads={['Главная', '404']} />
            </div>
            <div class="error">
                <div class="container">
                    <div class="error__number">404</div>
                </div>
                <div class="error__block">
                    <div class="container container_common">
                        <div class="error__text">Ошибка!<br />К сожалению, запрашиваемая<br />Вами страница не найдена...</div>
                        <a href="/" class="btn">Перейти на главную</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;