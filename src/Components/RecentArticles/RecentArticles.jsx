// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./RecentArticles.scss";
import { useState, useEffect } from "react";

const RecentArticles = ({ Translated }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:9080/api/inquiries/getrecentinquiries`)
  //     .then((response) => response.json())
  //     .then((actualData) => {
  //       setArticles(actualData);
  //     });
  // }, [])

  return (
    <div>
      <h3 className="second_filter-title">{Translated.title2}</h3>
      <div className="slider">
        {/* <Slider {...settings}>
          {articles.map((item) => (
            <div key={item.Id}>
              <h3>{item.Question}</h3>
              <p>{item.Answer}</p>
            </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
};
export default RecentArticles;
