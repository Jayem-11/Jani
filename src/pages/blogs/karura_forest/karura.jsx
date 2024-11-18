import "./karura.css";
import karura_img_1 from "../../../assets/blog_karura_1.jpg";
import karura_img_2 from "../../../assets/blog_karura_2.jpg";
import Footer from "../../../Components/Footer/Footer";
import white_arrow from "../../../assets/white-arrow-rev.png";
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
            At Jani, we’re excited to share something close to our hearts. We
            plan to plant over 500 trees in Karura Forest, one of Nairobi’s most
            beautiful and historic green spaces. This initiative is more than
            just about planting trees, it’s about connecting with nature,
            preserving our environment, and making a meaningful impact on the 
            world around us.
          </p>
        </div>
        <div className="k">
          <div className="k-left">
            <img src={karura_img_1} alt="" className="k-img" />
          </div>
          <div className="k-right">
            
            <p>
              As we’ve prepared for this project, we’ve had the privilege of
              meeting David, one of Karura’s long-time workers. Spending time
              with him has been a highlight of this journey. David knows the
              forest like the back of his hand, and his passion for conservation
              is contagious. He introduced us to some of the tree species we’ll
              be planting, explaining their importance to Karura’s ecosystem.
              For example, some species provide food and shelter for wildlife,
              while others play a crucial role in preventing soil erosion and
              purifying the air. David’s stories brought these trees to life,
              making us even more excited to get started.
            </p>
            
          </div>
        </div>
        <div className="k">
          <div className="k-right">
            
            <p>
              But what stuck with us was hearing about Karura’s history. David
              shared how the forest was once under threat from development and
              how the dedication of environmentalists like Wangari Maathai saved
              it. Today, it’s a place of peace, beauty, and resilience, a
              reminder of what we can achieve when we come together to protect
              our planet. As we look ahead to this tree-planting day, we’re
              reminded that small actions, like planting a tree, can lead to big
              changes. Each sapling we plant represents hope for the future,
              hope for a healthier environment, and a greener Kenya.
            </p>
            
          </div>
          <div className="k-left">
            <img src={karura_img_2} alt="" className="k-img" />
          </div>
        </div>

        <div className="blog_content">
          <p>
            We’d love for you to be part of this journey with us. Whether it’s
            joining us on the planting day or simply spreading the word, every
            bit of support counts. Let’s work together to make Karura even
            greener and show what’s possible when we care for our environment.
          </p>
        </div>
        <div className=" b-btn">
          <Link to="/jani/home" className="btn dark-btn">
            {" "}
            <img className="w-a" src={white_arrow} alt="" /> Back Home
          </Link>
        </div>
      </div>
      <div className="footer_blog">
        <Footer />
      </div>
    </div>
  );
};

export default Karura;
