import React from 'react'
export default class Footer extends React.Component{z
    render(){
        return(
            <section className="my-5">
                <div className="footer-wtap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="logo-footer">
                                    <img src="/img/logo.png"  alt="Создание сайтов продвижение и другие IT услуги" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="content-info">
                                    <div className="footer-contact-block">
                                        <i className="fa fa-envelope"></i>
                                        <span>
                                    <a href="mailto:zandreks@gmail.com?subject=Вопрос по сайту">zandreks@gmail.com</a>
                                </span>
                                    </div>
                                    <div className="footer-contact-block">
                                        <i className="fa fa-phone"></i>
                                        <span className="">
                                    <a href="tel:+77021867028">+77021867028</a>
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="coopy">
                        &copy; Все права защищены StartNext
                    </div>
                </div>
            </section>

    )
    }
}