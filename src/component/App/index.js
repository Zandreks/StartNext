import React from 'react';
import "./img/logo.png"
export default class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {classelemetn: true};
        this.scrollMetod = this.scrollMetod.bind(this)
    }

    render(){
        return(
            <div onScroll={this.scrollMetod}>
            <div className="header">
                <div className={this.state.classelemetn ? 'container-fluid site-header':'container-fluid site-header scrol_headwr'} >
                    <div className="container">
                        <div className="site-branding col-md-4 col-sm-6 col-xs-12">
                            <a href="/" className="custom-logo-link">
                                <img width="200" height="69" src="img/logo.png" className="custom-logo"
                                     alt="Разработка и продвижение сайтов в Астане"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header-image">
                    <div className="container">
                        <div className="header-info" style={{opacity: 1}}>
                            <h1 className="header-subtext">Создание, продвижение сайтов и другие IT Услуги</h1>
                            <h3 className="header-text">Добро пожаловать</h3>
                            <a className="button header-button" href="#servis">Ознакомиться</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    componentDidMount(){

    }
    scrollMetod(){
        console.log(1)
        this.setState({classelemetn: !this.state.classelemetn});

    }
}

