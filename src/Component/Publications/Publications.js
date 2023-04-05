import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Subscribe from "../Subscribe/Subscribe";

import "./Publications.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import Articleimage from "../../images/new-images/InsightCardIMages (4).jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { newPubData } from "./PublicationsData";
import { Link } from "react-router-dom";
import { InsightQuickNavigation } from "../Gallery/App";
import NewNavBar from "../NewNavBar/NewNavBar";
import { PublicationPayModal } from "../NewEvents/Modals";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/InsightCardIMages (4).jpg";

const Publications = () => {
  const [viewpaid, setViewPaid] = useState(false);

  const viewpaidHandler = () => {
    setViewPaid(!viewpaid);
  };

  return (
    <>
      {viewpaid && <PublicationPayModal closefn={viewpaidHandler} />}
      <div>
        <ThemeProvider theme={theme}>
          <UIProvider>
            <div className="publications">
              <Subscribe />
              <NewNavBar />

              <NewImageBanner
                image={backImage}
                header={"Publications"}
                details={["Read our latest publications."]}
              />

              <div className="news_main">
                <div className="cover">
                  <div className="right">
                    <p className="view-paid" onClick={viewpaidHandler}>
                      Click to view paid publications
                    </p>
                    <div className="top">
                      <h2>Publications</h2>
                    </div>
                    <div className="top">
                      <h4>Manufacturers CEO Confidence Index (MCCI)</h4>
                    </div>
                    <div className="wrap">
                      {newPubData.map((item) => {
                        return (
                          <div className="card">
                            <Link to={"/publications"}>
                              <button
                                style={{ color: "#2b3513", cursor: "pointer" }}
                              >
                                <b>Publications</b>
                              </button>
                            </Link>
                            <div className="flex">
                              <h3>{item.name}</h3>
                              <Link to={`/publications-details/${item.id}`}>
                                <OpenInNewIcon />
                              </Link>
                            </div>
                            <p>{item.date}</p>
                          </div>
                        );
                      })}
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                      <div className="top">
                        <h4>MAN News Magazine</h4>
                      </div>
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
      </div>
    </>
  );
};

export default Publications;
