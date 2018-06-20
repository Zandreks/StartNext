import React from 'react';
import logo from "./img/logo.png"
import { Link } from 'react-scroll'

export default class header extends React.Component{
    state = {classelemetn: true, buttonopacty:1};

    render(){
        return(
            <div>
            <div className="header">
                <div className={this.state.classelemetn ? 'container-fluid site-header':'container-fluid site-header scrol_headwr'} >
                    <div className="container">
                        <div className="site-branding col-md-4 col-sm-6 col-xs-12">
                            <a href="/" className="custom-logo-link">
                                <img width="200" height="69" src={logo} className="custom-logo"
                                     alt="Разработка и продвижение сайтов в Астане"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="header-image bounce">
                    <div className="container">
                        <div className="header-info" style={{opacity: this.state.buttonopacty}}>
                   
                            <h1 className="header-subtext">Создание, продвижение сайтов и другие IT Услуги</h1>
                            <h3 className="header-text">Добро пожаловать</h3>
                            <Link activeClass="active" to="serve" spy={true} smooth={true} offset={50} duration={500} className="button header-button">Ознакомиться </Link>

                        </div>
                        

                    </div>
                </div>
            </div>

            </div>
        )
    }

    componentDidMount(){
        let flag = false;
        let scrollCoef = 0.0035;

        window.onscroll = ()=> {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;


            let opacty = ()=>{
              return 1- scrolled  * scrollCoef
            };
            this.setState({buttonopacty:opacty() });
            if(scrolled >=10 && flag === false){
                this.setState({classelemetn: false});
                flag = true;
            }
            if (scrolled <=5 && flag === true) {
                this.setState({classelemetn: true});
                flag= false;
            }
          }


    }

}

