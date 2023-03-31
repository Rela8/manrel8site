import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../Styles/theme/Theme";
import { UIProvider } from "../../Ui";
import "./News.scss";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import Subscribe from "../Subscribe/Subscribe";
import { newsdata } from "./NewsData";
import { Link } from "react-router-dom";

import Articleimage from "../../images/new-images/GalLinkImg (1).png";
import { InsightQuickNavigation } from "../Gallery/App";
import NewNavBar from "../NewNavBar/NewNavBar";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/NewsBgImg.png";

function News() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="news">
          <Subscribe />
          <NewNavBar />

          <NewImageBanner
            image={backImage}
            header={"News"}
            details={["Read our latest reports, blogs and publications."]}
          />

          <div className="news_main">
            <div className="cover">
              <div className="right">
                <div className="top">
                  <h2>News</h2>
                </div>
                <div className="wrap">
                  {newsdata.map((item) => {
                    return (
                      <div className="card">
                        <Link to={"/news"}>
                          <button
                            style={{ color: "#2b3513", cursor: "pointer" }}
                          >
                            <b>News</b>
                          </button>
                        </Link>
                        <div className="flex">
                          <h3>{item.name}</h3>
                          <Link to={`/news-details/${item.id}`}>
                            <OpenInNewIcon />
                          </Link>
                        </div>
                        <p>{item.date}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="bto">
                  {/* <Link
                      to={"/insight-more"}
                      style={{ textDecoration: "none", color: "#2b3513" }}
                    >
                      <h3>View all {">"}</h3>
                    </Link> */}
                </div>
              </div>
              <div className="left">
                <img src={Articleimage} alt="" />
                <InsightQuickNavigation />
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

export default News;
