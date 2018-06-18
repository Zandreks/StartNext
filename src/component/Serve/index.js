import React from 'react'
import {Element } from 'react-scroll'
import {WOW} from 'wowjs/dist/wow'

const posts =[{
    id:1,
    img:'html.png',
    title:'Разработка сайтов',
    text:'Предоставляю свои услуги по разработки Web-сайтов и дальнейшая их поддержка.'
},
    {
        id:2,
        img:'marketing.png',
        title:'Продвижение в поиске',
        text:'Продвижение ваших сайтов в поисковых системах'
    },
    {
        id:3,
        img:'512x512bb.png',
        title:'Переустановка ОС',
        text:'Установка и переустановка операционных систем семейств Windows и Linux\\r\\n'
    },
    {
        id:4,
        img:'software_installer_filled1600.png',
        title:'Установка ПО',
        text:'Помощь в установке и выбора программного обеспечения для ваших целей'
    },
    {
        id:5,
        img:'w512h5121390849247android512-восстановлено.png',
        title:'Прошивка гаджетов',
        text:'Прошивка смартфонов и планшетов на базе Android'
    },
    {
        id:6,
        img:'grey_new_seo-05-512.png',
        title:'Восстановление',
        text:'Восстановление работы смартфонов, планшетов и персональных компьютеров'
    }
];
const postslist = posts.map(post=>{
    return(
        <div key={post.id} className="col-md-4 wow bounceIn" data-wow-duration="1.5s" data-wow-delay="0.5s"
             data-wow-offset="100">
            <div className="servis-img">
                <img className="rounded mx-auto d-block" src={"/img/"+post.img}
                     alt="Создание сайтов продвижение и другие IT услуги"/>
            </div>
            <h3 className="text-center">
                {post.title}
            </h3>
            <p className="text-center">
                {post.text}
                </p>
        </div>
    )
})
export default class  Serve extends React.Component{
    componentDidMount() {
        new WOW().init();

    }
        constructor(props) {
        super(props);
        this.state = {flag: true};
    }
    render(){
        return(
            <div>
            <Element name="serve" ></Element>

                <section className="services my-5">
                    <div className="container servis">
                        <h2 className="text-center">Услуги </h2>
                        <hr/>
                            <div className="row" id="servis">
                                {postslist}


                            </div>

                    </div>


                </section>

            </div>
        )

    }

}