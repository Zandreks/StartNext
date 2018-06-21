import React from "react"
import { animateScroll as scroll} from 'react-scroll'

export default class ScrollTop extends React.Component{
    render(){
        return(
            <div id="toTop">
                <img src="/img/38.png"  alt="Создание сайтов продвижение и другие IT услуги" onClick={this.scrollToTop}/>
            </div>
        )
    }
    scrollToTop = ()=> {
        scroll.scrollToTop();
    }
}
