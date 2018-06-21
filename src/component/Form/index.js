import React from 'react'
import InputMask from 'react-input-mask';
import axios from "axios"
export default class Form extends React.Component{
    state={name:'',phone:"",text:"",error:{
        name:"",
            phone:"",
            text:""
        },
    susses:""
    };

    onchangename=(e)=>{
        this.setState({name: e.target.value});

    };
    onchangphone=(e)=>{
        this.setState({phone: e.target.value});

    };
    onchangetext=(e)=>{
        this.setState({text: e.target.value});

    };

    onSubmit= (e)=>{
        e.preventDefault();

        let name = this.state.name;
        let phone = this.state.phone.replace(/[^-0-9]/gim,'');
        let text = this.state.text;


        if (name.length === 0 || name.replace(/\s/g,)==='') {
            this.setState({error:{name:"Введите имя"}});
            return false;
        } else {
            this.setState({error:{name:""}});
        }
        if (phone.length !== 13 ) {
            this.setState({error:{phone:"Введите корректно номер телефона"}});
            return false;
        } else {
            this.setState({error:{name:""}});
        }
        if (text.length ===0 || text.replace(/\s/g,'')==='') {
            this.setState({error:{text:"Введите сообщение"}});
            return false;
        } else {
            this.setState({error:{name:""}});
        }
        axios.post('/', {
            params: {
                name:this.state.name,
                phone:this.state.phone,
                text:this.state.text
            }
        })
            .then((response) => {
                this.setState({susses:"Сообщение отправлено"})
                this.setState({name:""})
                this.setState({phone:""})
                this.setState({text:""})
                console.log(response)

            })
            .catch( (error)=> {
                alert(`Ошибка сервера ${error}`);
            });


    };
    render(){
        return(
            <section className="form-from my-5">
                <div className="container">
                    <h3>Остались вопросы?</h3>
                    <hr/>
                        <div className="row">
                            <div className="col-md-12">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Имя*</label>
                                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onchangename} placeholder="Введите Имя"/>
                                            <p className="bg-danger text-white bg p_name">{this.state.error.name}</p>
                                            <label htmlFor="phone">Телефон*</label>
                                            <InputMask type="text"  mask="+7 (999) 999-99-99" className="form-control" value={this.state.phone} id="phone"
                                                   placeholder="Введите телефон" onChange={this.onchangphone} />
                                                <p className="bg-danger bg p_phone">{this.state.error.phone}</p>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment">Сообщение*</label>
                                        <textarea className="form-control" rows="5" id="comment" value={this.state.text} onChange={this.onchangetext}></textarea>
                                        <p className="bg-danger text-white bg p_mess" >{this.state.error.text}</p>
                                    </div>
                                    <input type="submit" className="btn btn-success btn-block" value="Отправить"/>
                                    <p className="bg-success text-white bg p_ok">{this.state.susses}</p>

                                </form>
                            </div>
                        </div>

                </div>


            </section>
        )
    }
}