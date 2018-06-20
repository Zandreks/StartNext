import React from 'react'

export default class Form extends React.Component{
    render(){
        return(
            <section className="form-from my-5">
                <div className="container">
                    <h3>Остались вопросы?</h3>
                    <hr/>
                        <div className="row">
                            <div className="col-md-12">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Имя*</label>
                                        <input type="text" className="form-control" id="name" placeholder="Введите Имя"/>
                                            <p className="bg-danger text-white bg p_name"></p>
                                            <label htmlFor="phone">Телефон*</label>
                                            <input type="text" className="form-control" id="phone"
                                                   placeholder="Введите телефон"/>
                                                <p className="bg-danger bg p_phone"></p>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment">Сообщение*</label>
                                        <textarea className="form-control" rows="5" id="comment"></textarea>
                                        <p className="bg-danger text-white bg p_mess"></p>
                                    </div>
                                    <button type="button" className="btn btn-success btn-block">Отправить</button>
                                    <p className="bg-success text-white bg p_ok"></p>

                                </form>
                            </div>
                        </div>

                </div>


            </section>
        )
    }
}