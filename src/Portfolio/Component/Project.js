import { useNavigate } from "react-router-dom";
import "../project.css"
function Project() {
    const navigate = useNavigate();

    const home = () => {
        navigate('/')
    }

    const contact = () => {
        navigate('/Contact')
    }
    return (
        <div className="project_c">
            <div className="p_inner">
                <div className="bg_1"></div>
                <div className="bg_2"></div>
                <div className="bg_3"></div>
                <nav>
                    <p onClick={home}>home</p>
                    <p onClick={contact}>contact</p>
                </nav>
                <h2>project,</h2>
                <div className="contents">
                    <div className="all_box">
                        <div className="box">
                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/m_project_1.png`} alt="silica gel" />
                            </figure>
                            <div className="text_box">
                                <h3>SILICA GEL</h3>
                                <div className="text">
                                    <h4>가수 실리카겔 홈페이지 창작(반응형)</h4>
                                    <div className="txt">
                                        <div className="t_i">
                                            <p>기여도</p>
                                            <span>90%</span>
                                        </div>

                                        <div className="t_i">
                                            <p>사용툴</p>
                                            <ul>
                                                <li>photoshop</li>
                                                <li>Html</li>
                                                <li>Css</li>
                                                <li>j-Query</li>
                                            </ul>
                                        </div>

                                        <div className="t_i">
                                            <p>페이지</p>
                                            <span>메인 페이지, 서브 페이지 3개</span>
                                        </div>
                                    </div>


                                </div>
                                <div className="btn">
                                    <a href="https://yuna3741.github.io/silicagel/" target="_blank">
                                    <p>VISITE WEBSITE</p>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="box">
                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/m_project_2.png`} alt="HUEY" />
                            </figure>
                            <div className="text_box">
                                <h3>HUEY</h3>
                                <div className="text">
                                    <h4>huey 브랜드 홈페이지 클론코딩(반응형)</h4>
                                    <div className="txt">
                                        <div className="t_i">
                                            <p>기여도</p>
                                            <span>80%</span>
                                        </div>

                                        <div className="t_i">
                                            <p>사용툴</p>
                                            <ul>
                                                <li>Html</li>
                                                <li>Css</li>
                                                <li>Javascript</li>
                                            </ul>
                                        </div>

                                        <div className="t_i">
                                            <p>페이지</p>
                                            <span>메인 페이지</span>
                                        </div>
                                    </div>


                                </div>
                                <div className="btn">
                                <a href="https://yuna3741.github.io/huey/" target="_blank">
                                    <p>VISITE WEBSITE</p>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="box">
                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/m_project_3.png`} alt="WEATEHR APP" />
                            </figure>
                            <div className="text_box">
                                <h3>WEATEHR APP</h3>
                                <div className="text">
                                    <h4>날씨앱 홈페이지 창작(반응형)</h4>
                                    <div className="txt">
                                        <div className="t_i">
                                            <p>기여도</p>
                                            <span>90%</span>
                                        </div>

                                        <div className="t_i">
                                            <p>사용툴</p>
                                            <ul>
                                                <li>Illustrator</li>
                                                <li>Html</li>
                                                <li>Css</li>
                                                <li>React</li>
                                            </ul>
                                        </div>

                                        <div className="t_i">
                                            <p>페이지</p>
                                            <span>라이트 모드, 다크 모드</span>
                                        </div>
                                    </div>


                                </div>
                                <div className="btn">
                                <a href="https://yuna3741.github.io/weather/" target="_blank">
                                    <p>VISITE WEBSITE</p>
                                    </a>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Project;
