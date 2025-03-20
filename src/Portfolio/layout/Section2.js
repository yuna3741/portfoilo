import { useEffect, useState } from "react";


function Section2() {
    const [line, setLine] = useState([false, false, false]);

    useEffect(() => {


        const handScroll = () => {
            const projects = document.querySelectorAll(".project_1");
            const windowHeight = window.innerHeight;

            projects.forEach((project, idx) => {
                const allHeight = project.getBoundingClientRect();
                if (allHeight.top < windowHeight * 0.8 && allHeight.bottom > 0) {
                    setLine((pre) => {
                        const newState = [...pre];
                        newState[idx] = true;
                        return newState;
                    })
                } else {
                    setLine((pre) => {
                        const newState = [...pre];
                        newState[idx] = false;
                        return newState;
                    })

                }

            })

        };

        window.addEventListener("scroll", handScroll);
        handScroll();
        console.log(handScroll)

        return () => {
            window.removeEventListener("scroll", handScroll)
        }





    }, [])
    return (
        <section className="s_2">
            <div className="bg_1"></div>
            <div className="bg_2"></div>
            <div className="bg_3"></div>
            <div className="bg_4"></div>
            <div className="s_inner">

                <div className="project_1">

                    <div className="contents">
                        <div className="title">
                            <h2>SILICA GEL</h2>
                            <p>project</p>
                        </div>

                        <div className="c_inner">

                            <div className="text">
                                <h4>가수 실리카겔 홈페이지 창작(반응형)</h4>
                                <div className="t_a">
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
                                        <span>메인 페이지, 서브페이지 3개</span>
                                    </div>
                                </div>

                                <div className="t_i">
                                    <span className="last_span">
                                        실리카겔의 새 앨범 ‘POWER ANDRE 99’의 컨셉을 참고하여 기계적, 우주적 느낌이 묻어나는 페이지를 제작했습니다. 메인 페이지에서는 실리카겔 밴드의 멤버 소개와 최근 활동을 확인할 수 있도록 구성했으며, 서브 페이지에서는 더욱 다양한 활동을 살펴볼 수 있도록 했습니다.
                                    </span>
                                </div>
                            </div>

                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/m_project_1.png`} alt="silica gel" />
                            </figure>

                        </div>
                    </div>

                    <div className="line_box">

                        <p>01,</p>

                        <div className="website">
                            <div className="line">
                                <div className={`line_bottom ${line[0] ? 'line_expand' : 'line_reset'}`}></div>
                                <a href="https://yuna3741.github.io/silicagel/" target="_blank">
                                    <div className="btn">VISITE WEBSITE</div>
                                </a>
                            </div>
                        </div>

                    </div>


                </div>


                <div className="project_1">
                    <div className="contents">

                        <div className="title">
                            <h2>HUEY</h2>
                            <p>project</p>
                        </div>

                        <div className="c_inner">

                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/m_project_2.png`} alt="huey" />
                            </figure>

                            <div className="text">
                                <h4>huey 브랜드 홈페이지 클론코딩(반응형)</h4>
                                <div className="t_a">
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

                                <div className="t_i">
                                    <span className="last_span">
                                        %와 grid를 활용해 반응형 레이아웃을 구현했으며 요소를 드래그하여 배치하는 효과, 화살표가 자연스럽게 움직이는 효과 등을 JavaScript로 제작했습니다. 또한, 모바일에서 메뉴 목록의 위치와 크기를 조정하여 원본 페이지보다 더욱 편리하게 사용할 수 있도록 개선했습니다.
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="line_box">


                        <div className="website">
                            <div className="line">
                                <div className={`line_bottom ${line[1] ? 'right' : 'line_reset'}`}></div>
                                <a href="https://yuna3741.github.io/huey/" target="_blank">
                                    <div className="btn">VISITE WEBSITE</div>
                                </a>
                            </div>
                        </div>

                        <p>02,</p>



                    </div>


                </div>

                <div className="project_1">



                    <div className="contents">

                        <div className="title">
                            <h2>WEATHER APP</h2>
                            <p>project</p>
                        </div>

                        <div className="c_inner">

                            <div className="text">
                                <h4>날씨앱 홈페이지 창작(반응형)</h4>
                                <div className="t_a">
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

                                <div className="t_i">
                                    <span className="last_span">
                                        API를 활용해 날씨 앱을 제작했습니다. 초기 화면에서는 현재 위치의 날씨를 표시하며, 도시 이름을 검색하면 해당 도시의 날씨를 확인할 수 있습니다. 또한, 맑음이나 흐림 등 날씨 상태에 따라 변화하는 아이콘을 제작해 시각적 효과를 더했습니다.
                                    </span>
                                </div>


                            </div>

                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/m_project_3.png`} alt="weather app" />
                            </figure>
                        </div>
                    </div>

                    <div className="line_box">
                        <p>03,</p>
                        <div className="website">
                            <div className="line">
                                <div className={`line_bottom ${line[2] ? 'line_expand' : 'line_reset'}`}></div>
                                <a href="https://yuna3741.github.io/weather/" target="_blank">
                                    <div className="btn">VISITE WEBSITE</div>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </section>


    )
}

export default Section2;
