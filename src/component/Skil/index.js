import React from "react"
import { Line, } from 'rc-progress';

export default  class Skil extends  React.Component{
    constructor() {
        super();
        this.state = {
            percent: 0,
        };
        this.increase = this.increase.bind(this);

    }

    increase() {
        const percent = this.state.percent + 1;
        if (percent >= 50) {
            clearTimeout(this.tm);
            return;
        }
        this.setState({ percent });
        this.tm = setTimeout(this.increase, 10);
    }
    render(){
        return(
            <section className="skil-bar my-5">

                <div className="container">
                    <Line strokeWidth="2" className="skillbar"  percent={this.state.percent} />
                    <div id="go_0skil_bar"></div>
                </div>

            </section>
        )
    }
    componentDidMount(){
        let d = document.getElementById("go_0skil_bar");
        let topPos = d.offsetTop;
        let flag =false;
        window.onscroll = ()=> {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            let rez = topPos -scrolled
            if (rez <700 && flag ==false){
                this.increase()
                flag = true
            }
        }

        }
}