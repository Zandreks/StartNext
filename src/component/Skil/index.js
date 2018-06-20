import React from "react"
export default  class Skil extends  React.Component{
        state = {bar:0,bar2:0,bar3:0,bar4:0};
    render(){
        return(
            <section className="skil-bar my-5">
                <div className="container">
                    <h3 className="text-center">Преимущество</h3>
                    <hr/>
                        <div className="progress skill-bar ">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="95"
                                 aria-valuemin="0" aria-valuemax="100" style={{width:this.state.bar+"%"}}>
                    <span className="skill">Скорость работы
                        <i className="val">{this.state.bar}%</i>
                    </span>
                            </div>
                        </div>

                        <div className="progress skill-bar">
                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90"
                                 aria-valuemin="0" aria-valuemax="100" style={{width:this.state.bar2+"%"}}>
                    <span className="skill">Качество
                        <i className="val">{this.state.bar2+"%"}</i>
                    </span>
                            </div>
                        </div>

                        <div className="progress skill-bar">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="100"
                                 aria-valuemin="0" aria-valuemax="100" style={{width:this.state.bar3+"%"}}>
                    <span className="skill">Цена
                        <i className="val">{this.state.bar3+"%"}</i>
                    </span>
                            </div>
                        </div>
                        <div id="go_0skil_bar"></div>

                        <div className="progress skill-bar">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="98"
                                 aria-valuemin="0" aria-valuemax="100" style={{width:this.state.bar4+"%"}}>
                    <span className="skill">Ответственность
                        <i className="val">{this.state.bar4+"%"}</i>
                    </span>
                            </div>
                        </div>
                </div>

            </section>
        )
    }
    componentDidMount(){
        let d = document.getElementById("go_0skil_bar");
        let topPos = d.offsetTop;
        let flag= false;
        document.onscroll= ()=>{
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            let rez = topPos -scrollTop;

            if (rez <700 && flag ===false){
                let bars = new Progressbar();
                this.setState(bars.Bar(87, 'bar'));
                this.setState(bars.Bar(90, 'bar2'));
                this.setState(bars.Bar(100, 'bar3'));
                this.setState(bars.Bar(95, 'bar4'));
                flag= true
            }
        }






    }

}
class Progressbar extends  Skil{
    Bar =(argument,str)=>{
        return {[str]: argument};
    }
}
