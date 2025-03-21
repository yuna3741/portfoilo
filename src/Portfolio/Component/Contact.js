import { useNavigate } from "react-router-dom";
import "../contact.css";

function Contact() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <div className="contact_c">

      <div className="c_inner">
        <div className="bg_1"></div>
        <div className="bg_2"></div>
        <nav>
          <p onClick={home}>home</p>
        </nav>

        <div className="info">
          <div className="text">
            <h2>contact,</h2>
            <h3>못해낼 <span>이유나</span> 변명은 없습니다. 어떤 어려움도 성장할 발판으로 삼아 실무에 빠르게 적응하겠습니다.</h3>
          </div>


          <div className="contact">

            
              <div className="box phone">
                <p>phone</p>
                <span>010 3033 3741</span>
              </div>

              <div className="box email">
                <p>E-mail</p>
                <span>yuna3741@naver.com</span>
              </div>

              <div className="box kakao">
                <p>Kakao talk</p>
                <span>yuna3741_</span>
              </div>
           




          </div>


        </div>
      </div>
    </div>
  );
}

export default Contact;
