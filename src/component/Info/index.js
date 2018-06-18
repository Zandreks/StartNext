import React from 'react'
import imgs from "./opissite_.jpg"
export default class Info extends React.Component{
    render(){
        return(
            <section className="site-info wow fadeInUp my-5" data-wow-duration="0.5s" data-wow-delay="0s"
                     data-wow-offset="120">
                <div className="container">
                    <h3 className="text-center">Создание сайтов</h3>
                    <hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="opis-text">
                                    Что такое сайт? Сайт -это инструмент и визитка вашего продукта или бизнеса при
                                    помощи которого вы продвигаете свои товары
                                    или услуги во всемирной паутине интернет. Если вы уже давно задумывались о своем
                                    блоге, визитки вашей
                                    компании и интернет магазина, я помогу вам в этом нелегком деле.
                                    <br/>В процесс создание сайта входит:
                                        <br/> 1) Подготовка технического задания для сайта
                                            <br/> 2) Подбор или разработка дизайна сайта
                                                <br/> 3) Разработка функционала согласно техническому заданию клиента
                                                    <br/> 4) Выбор доменного имени и хостинга
                                                        <br/> 5) Установка и настройка панели управления сайтом
                                                            <br/> 6) Перенос сайта на хостинг
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={imgs} className="img-fluid"
                                     alt="Создание сайтов продвижение и другие IT услуги"/>
                            </div>
                        </div>

                </div>
            </section>
        )
    }
}