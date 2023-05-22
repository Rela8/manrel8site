import React from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import "./Sectoral.scss";
import Vector from "../../images/Vector.png";
import One from "../../images/NewSectoralImage (1).jpeg";
import Two from "../../images/NewSectoralImage (2).jpeg";
import Three from "../../images/three.png";
import Four from "../../images/four.png";
import five from "../../images/five.png";
import six from "../../images/six.png";
import seven from "../../images/seven.png";
import eight from "../../images/eight.png";
import nine from "../../images/nine.png";
import ten from "../../images/NewSectoralImage.jpeg";
import NewNavBar from "../NewNavBar/NewNavBar";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/SectoralBackGroundImage.jpeg";
import { useQuery } from "react-query";
import { getSectoralApi } from "../../utils/api-calls2";
import Preloader from '../Preloader/Preloader'
import Loader from "../Loader/Loader";
function Sectoral() {
  const sectoralList = [
    {
      image: One,
      content: "Food, Beverages & Tobacco Sectoral Group",
    },
    {
      image: Two,
      content: "Chemical & Pharmaceuticals Sectoral Group",
    },
    {
      image: Three,
      content: "Domestic & Industrial Plastics, Foam & Rubber Sectoral Group",
    },
    {
      image: Four,
      content:
        "Basic Metal, Iron & Steel & Fabricated Metal Product Sectoral Group",
    },
    {
      image: five,
      content:
        "Pulp, Paper & Paper Products, Printing & Publishing Sectoral Group",
    },
    {
      image: six,
      content: "Electrical/ Electronic Sectoral Group",
    },
    {
      image: seven,
      content: "Wood, Wood Products &Furniture Sectoral Group",
    },
    {
      image: eight,
      content: "Non Metallic Minerals Sectoral Group",
    },
    {
      image: nine,
      content:
        "Textiles, Wearing Apparel, Carpet Leather & Leather Footwear Products Sectoral Group",
    },
    {
      image: ten,
      content: "Motor Vehicle & Miscellaneous Assembly Sectoral Group",
    },
  ];
  const {isLoading,data} = useQuery('getSectoralApi',getSectoralApi)
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="sectoral">
          <Subscribe />
          <NewNavBar />
        <Loader loading={isLoading}/>
          <NewImageBanner
            image={backImage}
            header={"MAN Sectoral Group"}
            details={[
              " The Groups are serviced by full-time Sectoral Executives located at the National Secretariat of the Association.",
            ]}
          />

          <div className="sect-body">
            <div className="cover">
              <div
                className="head"
                style={{ margin: "20px 0px", color: "#2b3513" }}
              >
                In order to cater for members who have near homogenous products,
                MAN has ten Sectoral Groups and seventy four Sub-Sectoral
                Groups. The Groups are serviced by full-time Sectoral Executives
                located at the National Secretariat of the Association.
              </div>
              <div className="wrap-g">
                {data?.map((item,index) => (
                  <div className="card" key={item.header}>
                    <div className="flex">
                      <img src={Vector} alt="" />
                      <h2 style={{ color: "#2b3513" }}>{item.header}</h2>
                    </div>
                    <img className="main-img" src={item.image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  );
}

export default Sectoral;
