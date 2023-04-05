import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Image from "../../images/Rectangle 224.png";

import NewNavBar from "../NewNavBar/NewNavBar";
import "../NewEvents/NewEvents.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import {
  PayTrainingModal,
  RegisterTrainingModal,
  SingleTraining,
} from "../NewEvents/Modals";
import { trainingData } from "./TrainingData";
import backImage from "../../images/new-images/InsightCardIMages (5).jpg";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import Subscribe from "../Subscribe/Subscribe";

const Training = () => {
  // const [options , setOptions] = useState("free")
  const [register, setRegister] = useState(false);
  const [pay, setPay] = useState(false);
  return (
    <div className="new-events">
      {register && (
        <RegisterTrainingModal closefn={() => setRegister(!register)} />
      )}
      {pay && <PayTrainingModal closefn={() => setPay(!pay)} />}
      <UIProvider>
        <Subscribe />
        <NewNavBar />
        <NewImageBanner
          image={backImage}
          header={"Tranings"}
          details={[
            "Conferences, seminars, workshops, certified courses and more for manufacturers at all levels in every role.",
          ]}
        />

        <div className="event-options">
          <span className="span-active">Trainings</span>
          {/* <span className="span-inactive" onClick={() => setPay(!pay)}>
            Paid Trainings
          </span> */}
          {/* <span className="span-inactive" onClick={() => setPay(!pay)}>
            Special Trainings
          </span> */}
        </div>

        <div className="event-container">
          <div className="event-items">
            {trainingData.map((item, index) => (
              <SingleTraining
                image={Image}
                registerfn={() => setRegister(!register)}
                data={item}
                key={index}
              />
            ))}
          </div>
        </div>

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default Training;
