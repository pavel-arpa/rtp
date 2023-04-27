import { useEffect, useRef } from "react";
import PageActions from "../../components/PageActions/PageActions";

const Error = () => {
    const style = `
    <style>
    * {
      margin: 0;
      padding: 0;
      font-family: Ubuntu;
    }

    body {
      font-family: 'Bebas Neue', cursive;
      font-family: 'Ubuntu', sans-serif;
    }

    .container {
      width: 100%;
      max-width: 1540px;
      padding: 0 30px;
      margin: 0 auto;
    }

    .error__number {
      font-family: Bebas Neue;
      font-size: 496px;
      font-weight: 700;
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
      border-radius: 23px;
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
            <div class="error">
                <div class="container">
                    <div class="error__number">404</div>
                </div>
                <div class="error__block">
                    <div class="container">
                        <div class="error__text">Ошибка!<br />К сожалению, запрашиваемая<br />Вами страница не найдена...</div>
                        <a href="/" class="btn">Перейти на главную</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;