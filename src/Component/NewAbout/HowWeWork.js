import React from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Subscribe from "../Subscribe/Subscribe";
import Wall from "../Wall/Wall";
import BullerStar from "../../images/Vector.png";
import { Link } from "react-router-dom";
import "./NewAbout.scss";

const HowWeWork = () => {
  return (
    <div className="new-about">
      <UIProvider>
        <Subscribe />
        <NewNavBar />
        <div className="topBg"></div>
        <div className="new-about-content">
          <div className="how-work">
            <h1>How we Work</h1>
            <div className="how-work-con">
              <p>
                The Manufacturers Association of Nigeria (MAN) receives its
                mandate from the National Council, fourteen Branch Councils
                across the country, and ten Sectoral Groups. In addition, five
                Standing Committees, Nine Ad-Hoc Committees and Seventy-four
                sub-sectoral Groups.
              </p>
              <p>
                This engagement process reaches over 3000 MAN members who have a
                direct say in what we do and how we do it; from renewing our
                work strategies to discussing the key business issues of the day
                and re-tooling our influence.
              </p>
              <p>
                Each of our National Council and Branch Council members are
                elected to a term of office. Our Standing Committee members are
                invited to join voluntarily based on their sector experience and
                technical expertise.
              </p>
            </div>
          </div>
          <div className="nat-council">
            <p style={{ color: "#2b3513" }}>
              The National Council, which is the Association’s Governing Board,
              is made up of a President, eight Vice Presidents, Honourary
              Treasurer, Chairmen of Branches, Chairmen of Sectoral Groups,
              elected and strategic members and life members.
            </p>
            <p style={{ color: "#2b3513" }}>
              Past Presidents of the Association are life members representing
              special interest on the Council.
            </p>
            <p style={{ color: "#2b3513" }}>
              In directing MAN’s affairs and determining its policy options, the
              National Council is served by an Executive Committee and five
              Standing Committees namely;
            </p>
            <div className="core-values-items">
              <div
                className="core-values-item"
                style={{ backgroundColor: "#2b3513" }}
              >
                <h3>1</h3>
                <div className="right">
                  <p>Economic Policy Committee</p>
                </div>
              </div>
              <div
                className="core-values-item"
                style={{ backgroundColor: "#3a481a" }}
              >
                <h3>2</h3>
                <div className="right">
                  <p>Finance & Establishment Committee</p>
                </div>
              </div>
              <div
                className="core-values-item"
                style={{ backgroundColor: "#495b20" }}
              >
                <h3>3</h3>
                <div className="right">
                  <p>Small and Medium Industries Committee</p>
                </div>
              </div>
              <div
                className="core-values-item"
                style={{ backgroundColor: "#596d27" }}
              >
                <h3>4</h3>
                <div className="right">
                  <p>Corporate Affairs and Strategic Planning Committee</p>
                </div>
              </div>
              <div
                className="core-values-item"
                style={{ backgroundColor: "#506223" }}
              >
                <h3>5</h3>
                <div className="right">
                  <p>Infrastructure Committee</p>
                </div>
              </div>
            </div>
            <p style={{ color: "#2b3513" }}>
              These committees, as well as other Ad-hoc Committees assist in
              evolving vital policy framework needed for the realization of the
              objectives of the Association in areas of transport, energy,
              communication, taxation, exports, consultancy, research, economic
              matters, education and training as well as consultation with
              various existing specialized bodies. The National Council
              statutorily meets four times a year. The secretary to the National
              Council is the Director General.
            </p>
          </div>
          <div className="ad-hoc">
            <h1>AD-HOC COMMITTEE</h1>
            <p>
              Ad-hoc Committees are constituted to deal with specific and
              usually temporary issues as circumstances may demand. For example,
              Sustainable Use of Natural Resources and Energy Finance (SUNREF)
              committee, African Continental Free Trade Area (AfCFTA) committee,
              Membership Review Committee etc. There are also Study Groups that
              deal with subjects of special interests to the Association as they
              arise, such as transport, energy, communication, fuel, taxation,
              exports, consultation with various existing specialized bodies.
            </p>
          </div>
          <div className="other-groups">
            <h1>SPECIAL PURPOSE VEHICLES OF MAN</h1>
            <p>
              As an extension of its service arm to members, MAN delivers
              specialized services through the Manufacturers Resource Centre
              (MRC) and the Manufacturers Power Development Company
              Limited (MPDCL).
            </p>
          </div>
          <div className="other-groups">
            <h1>SPECIAL PURPOSE GROUPS OF MAN</h1>
            <p>
              To promote the activities of specific needs of manufacturers, the
              following groups were created: MAN Export Group (MANEG), MAN Gas
              Users Group (MANGAS) and MAN Local Content Group (MANLOC).
            </p>
          </div>
          <div className="exec-committe">
            <h1>EXECUTIVE COMMITTEE</h1>
            <p>
              In order to make the National Council more responsive to the
              yearnings of members’ expectations and aspirations, the
              Association has an Executive Committee which comprise of the
              President, Vice Presidents, the Honourary Treasurer, Chairmen of
              Standing Committees and two other members appointed on merit to
              represent special interest. The Director General is the secretary
              to the committee.
            </p>
            <p>
              Essentially, the Executive Committee is empowered to perform the
              usual functions of the National Council, subject to the
              ratification of the National Council except the following issues
              which must be referred to Council for approval.
            </p>
            <div className="exec-committe-items">
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>
                  All matters affecting top management staff (appointment,
                  promotion, and discipline)
                </h6>
              </div>
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>
                  All financial matters including budget, borrowing, membership
                  subscription, levies, etc.
                </h6>
              </div>
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>National Economic Policies</h6>
              </div>
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>Issues relation to National Budget</h6>
              </div>
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>Creation of zones, branches, and sub sectoral groups</h6>
              </div>
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>Nomination to National Council</h6>
              </div>
            </div>
            <p>
              The Executive Committee also operates as a lobby group that
              liaises with the National Council. Members of the Committee are
              expected from time to time, to identify industrialists among
              Federal Legislators who would constitute contacts for effective
              lobbing. The Executive Committee statutorily meets four times a
              year.
            </p>
          </div>
          <div className="other-groups">
            <h1>ANNUAL GENERAL MEETING</h1>
            <p>
              Every year, MAN members are invited to attend the Annual General
              Meeting. The Annual General Meeting is used to elect the Auditors,
              elect or re-elect council members and MAN President and vote on
              wide variety of resolutions.
            </p>
          </div>
          <div className="ad-hoc">
            <h1>
              ANNUAL REPORT{" "}
              <Link
                to="/report-details/1"
                style={{ fontSize: "14px", color: "skyblue" }}
              >
                click to view
              </Link>
            </h1>
            <p>
              Every year, the Association publishes its Annual Report which
              contains empirical based information, key highlights from the
              years’ activities and details of MAN financial information.
            </p>
          </div>
          <div className="other-groups">
            <h1>CODE OF CONDUCT</h1>
            <p>
              In order to promote and develop meaningful contribution of
              manufacturers to the national economy, the National Council laid
              down the following code of conduct for members of the Association:
            </p>
          </div>
          <div className="endeavour-items">
            <div className="endeavour-item">
              <h1>1</h1>
              <p>
                Endeavour to maintain in all aspects of their operations, a high
                level of business ethics and recognized standards, thus
                refraining from all business dealings of questionable nature,
                which could bring the Association or the manufacturing sector as
                a whole into disrepute.
              </p>
            </div>
            <div className="endeavour-item">
              <h1>2</h1>
              <p>
                Demonstrate transparent commitment to Nigeria’s industrial
                objectives and policies; placing Nigeria’s best interest above
                all others and increasing the contribution of the manufacturing
                sector to the economy, and towards the improvement of the
                quality of life of Nigerians.
              </p>
            </div>
            <div className="endeavour-item">
              <h1>3</h1>
              <p>
                Promote, encourage and improve quality standards and process
                control in all their manufacturing operations.
              </p>
            </div>
            <div className="endeavour-item">
              <h1>4</h1>
              <p>
                Refer to the National Council of the Association, any
                disagreement between members of the Association for arbitration
                before either party can pursue such a matter further (if
                necessary) after Council’s intervention.
              </p>
            </div>
          </div>
        </div>

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default HowWeWork;
