import Navbar from "../../../Components/Navbar/Navbar";
import "./karura.css";
import karura_img_1 from "../../../assets/blog_karura_1.jpg";
import karura_img_2 from "../../../assets/blog_karura_2.jpg";
import Footer from "../../../Components/Footer/Footer";
import white_arrow from '../../../assets/white-arrow-rev.png';
import { Link } from "react-router-dom";

const Karura = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="b1">
      
        <h1>Karura Forest 🌳</h1>
        <h2>
          This project marked the launch of jani. We planted our first tree in
          Karura forest, located in Nairobi, Kenya
        </h2>

        <div className="blog_content">
          <p>
            Our mission is to to take action by planting trees. We believe that
            every seed planted can lead to a greener, cleaner earth. Jani is a
            dynamic community initiative focused on promoting environmental
            responsibility and sustainable practices. Our goal is to make a
            positive impact by planting trees.
          </p>
        </div>
        <div className="k">
          <div className="k-left">
            <img src={karura_img_1} alt="" className="k-img" />
          </div>
          <div className="k-right">
            <p>
              Jani is a vibrant community initiative dedicated to fostering
              environmental stewardship and sustainable living.{" "}
            </p>
            <p>
              Our mission is to to take action by planting trees. We believe
              that every seed planted can lead to a greener, cleaner earth. Jani
              is a dynamic community initiative focused on promoting
              environmental responsibility and sustainable practices. Our goal
              is to make a positive impact by planting trees. We are convinced
              that each tree planted contributes to a healthier, greener planet.
              Through our initiatives, we strive to motivate and enable
              communities to participate in creating a sustainable
              future.Through our activities, we seek to inspire and empower
              communities to make a real difference for the future of our
              planet.
            </p>
            <p>
              Join Jani, where every hand makes the earth stand a little taller
              and a lot cleaner.
            </p>
          </div>
        </div>
        <div className="k">
          <div className="k-right">
            <p>
              Jani is a vibrant community initiative dedicated to fostering
              environmental stewardship and sustainable living.{" "}
            </p>
            <p>
              Our mission is to to take action by planting trees. We believe
              that every seed planted can lead to a greener, cleaner earth. Jani
              is a dynamic community initiative focused on promoting
              environmental responsibility and sustainable practices. Our goal
              is to make a positive impact by planting trees. We are convinced
              that each tree planted contributes to a healthier, greener planet.
              Through our initiatives, we strive to motivate and enable
              communities to participate in creating a sustainable
              future.Through our activities, we seek to inspire and empower
              communities to make a real difference for the future of our
              planet.
            </p>
            <p>
              Join Jani, where every hand makes the earth stand a little taller
              and a lot cleaner.
            </p>
          </div>
          <div className="k-left">
            <img src={karura_img_2} alt="" className="k-img" />
          </div>
        </div>
        
        <div className="blog_content">
          <p>
            Our mission is to to take action by planting trees. We believe that
            every seed planted can lead to a greener, cleaner earth. Jani is a
            dynamic community initiative focused on promoting environmental
            responsibility and sustainable practices. Our goal is to make a
            positive impact by planting trees. 
          </p>
        </div>
        <div className=" b-btn">
          <Link to='/jani/home'  className='btn dark-btn'> <img className="w-a" src={white_arrow} alt="" /> Back Home</Link>
        </div>
      </div>
      <div className="footer_blog">
        <Footer />
      </div>
    </div>
  );
};

export default Karura;
