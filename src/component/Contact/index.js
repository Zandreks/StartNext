import React from 'react'

export default class Contact extends React.Component{
    render(){
        return(
            <section className="razrab ny-5" data-wow-duration="1.5s" data-wow-delay="0.7s" data-wow-offset="100">
                <div className="container">
                    <h3 className="text-center">Разработчик</h3>
                    <hr/>
                        <div className="row">
                            <div className="col-md-4 offset-md-4">

                                <img src="/img/IMG_3076.JPG"  alt="Создание сайтов продвижение и другие IT услуги" className="img-fluid rounded-circle"/>
                                    <h3 className="text-center">Северьянов Максим </h3>
                                    <p className="text-center">Web-разработчик, It-специалист </p>

                                    <div className="raz_icon text-center">
                                        <a href="https://t.me/zandreks" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-telegram" aria-hidden="true"></i>
                                        </a>
                                        <a href="tel:+77021867028" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                        </a>
                                        <a href="mailto:zandreks@gmail.com?subject=Вопрос по сайту">
                                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                        </a>

                                    </div>
                            </div>
                        </div>
                </div>

            </section>
        )
    }
}