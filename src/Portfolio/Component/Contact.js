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
          <div className="download">
            <figure>
              <img src={`${process.env.PUBLIC_URL}/img/contact01.svg`} alt="contact_photo"/>
            </figure>

            <div className="btn">
              <div className=" b b1">
                <p>이력서</p>
                <a href="#" download>
                  <button type="button">download</button>
                </a>
              </div>

              <div className=" b b2">
                <p>자기소개서</p>
                <a href="#" download>
                  <button type="button">download</button>
                </a>
              </div>
            </div>
          </div>

          <div className="contact">

            <div className="top">
              <div className="phone">
                <p>phone</p>
                <span>010 3033 3741</span>
              </div>

              <div className="email">
                <p>E-mail</p>
                <span>yuna3741@naver.com</span>
              </div>
            </div>

            <h2>contact,</h2>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
