import React from 'react'

export default class Index extends React.Component{
    render(){
        return(
            <section className="me-works my-5">
                <div className="container">
                    <h3 className="text-center">Мои работы </h3>
                    <hr/>
                        <div className="row works-content">
                            <div className="col-md-3 works-cont" data-wow-duration="1.5s" data-wow-delay="0.7s"
                                 data-wow-offset="100">
                                <img src="/img/works_greental.jpg" className="img-fluid"
                                     alt="Создание сайтов продвижение и другие IT услуги"/>

                                    <div className="black-fon" >
                                        <h3 className="project-title">
                                            <a href="http://greental.kz/" target="_blank">GreenTal</a>
                                        </h3>
                                    </div>
                            </div>

                            <div className="col-md-3 works-cont" data-wow-duration="1.5s" data-wow-delay="0.8s"
                                 data-wow-offset="100">
                                <img src="/img/works_cargo.jpg" className="img-fluid"
                                     alt="Создание сайтов продвижение и другие IT услуги"/>

                                    <div className="black-fon" >
                                        <h3 className="project-title">
                                            <a href="https://cargo-trans.kz/" target="_blank">cargo-trans.kz</a>
                                        </h3>
                                    </div>
                            </div>
                            <div className="col-md-3 works-cont " data-wow-duration="1.5s" data-wow-delay="0.9s"
                                 data-wow-offset="100">
                                <img src="/img/work-mesion.jpg" className="img-fluid"
                                     alt="Создание сайтов продвижение и другие IT услуги"/>

                                    <div className="black-fon" >
                                        <h3 className="project-title">
                                            <a href="http://maisondestalents.kz/"
                                               target="_blank">maisondestalents.kz</a>
                                        </h3>
                                    </div>
                            </div>
                            <div className="col-md-3 works-cont " data-wow-duration="1.5s" data-wow-delay="0.9s"
                                 data-wow-offset="100">
                                <img src="/img/wors_boltap.jpg" className="img-fluid"
                                     alt="Создание сайтов продвижение и другие IT услуги"/>

                                    <div className="black-fon" >
                                        <h3 className="project-title">
                                            <a href="https://boltap.com/" target="_blank">boltap.com</a>
                                        </h3>
                                    </div>
                            </div>
                            <div className="col-md-3 works-cont " data-wow-duration="1.5s" data-wow-delay="0.7s"
                                 data-wow-offset="100">
                                <img src="/img/works_eurocode.jpg" className="img-fluid"
                                     alt="Создание сайтов продвижение и другие IT услуги"/>

                                    <div className="black-fon" >
                                        <h3 className="project-title">
                                            <a href="http://eurocode.kz/" target="_blank">eurocode.kz</a>
                                        </h3>
                                    </div>
                            </div>

                        </div>
                </div>
            </section>
        )
    }
}