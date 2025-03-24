import "../Main.css";
import Section2 from "../layout/Section2";
import { Link } from "react-router-dom";





function Main() {

    const gohome = () =>{
        window.scrollTo({top:0, behavior:"smooth"})
    }



    return (
        <div className="wrap">
            <main>
                <div className="m_bg1"></div>
                <div className="m_bg2"></div>
                <nav>
                    <p><Link to='/Project'>project</Link></p>
                    <p><Link to='/Contact'>contact</Link></p>

                </nav>

                <div className="title">
                    <h1>Pf,</h1>
                    <p>port<br />folio</p>
                </div>
            </main>

            <section className="s_1">
                <div className="s_inner">
                    <div className="bg"></div>

                    <div className="info">
                        <figure>
                            <div className="img">
                                <picture>
                                    <source srcSet={`${process.env.PUBLIC_URL}/img/photo03.svg`} media="(max-width:500px)" ></source>
                                    <source srcSet={`${process.env.PUBLIC_URL}/img/photo02.svg`} media="(max-width:1200px)" ></source>
                                    <img src={`${process.env.PUBLIC_URL}/img/photo01.svg`} alt="main_info_photo"/>
                                </picture>
                            </div>
                        </figure>

                        <div className="text">
                            <div className="text_1">
                                <h3>Lee-yuna</h3>
                                <p>
                                    성장하는 웹 퍼블리셔 이유나입니다.
                                    저의 가장 큰 장점은 책임감과 강한 끈기라고 생각합니다.
                                    책임감 있게 맡은 일을 완수하고, 문제 상황을 끈기 있게
                                    해결할 수 있도록 노력하겠습니다. 감사합니다.
                                </p>
                                <div className="btn">
                                    <div className=" b b1">
                                        <p>이력서</p>
                                        <a href="https://yuna3741.github.io/portfoilo/pdf/Resume_leeyuna.pdf" download="Resume_leeyuna.pdf">
                                            <button type="button">download</button>
                                        </a>
                                    </div>

                                    <div className=" b b2">
                                        <p>자기소개서</p>
                                        <a href="https://yuna3741.github.io/portfoilo/pdf/CoverLetter_leeyuna.pdf" download="CoverLetter_leeyuna.pdf">
                                            <button type="button">download</button>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className="text_2">
                                <h3>skill</h3>
                                <div className="s_contents">
                                    <p>Ps</p>
                                    <p>Ai</p>
                                    <p>Id</p>
                                    <p>Html</p>
                                    <p>Css</p>
                                    <p>Figma</p>
                                    <p>j-Query</p>
                                    <p>Javascript</p>
                                    <p>React</p>
                                    <p>React-Query</p>
                                    <p>React-Router-dom</p>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

            </section>

            <Section2 />

            <footer>
                <div className="bg_1"></div>
                <div className="bg_2"></div>

                <div className="f_inner">
                    <div className="box">
                        <p>Thank you!</p>
                        <div className="info">
                            <div className="phone">
                                <p>phone</p>
                                <span>010 3033 3741</span>
                            </div>

                            <div className="email">
                                <p>E-mail</p>
                                <span>yuna3741@naver.com</span>
                            </div>
                        </div>

                        <h4 onClick={gohome}>
                            go top
                        </h4>
                    </div>
                </div>
            </footer>



        </div>
    )
}

export default Main 
