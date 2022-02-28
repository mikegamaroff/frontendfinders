import React, { FunctionComponent, useState, useContext } from "react";
import { AppContext } from "../context/StateContext";
import { DispatchContext } from "../context/StateContext";
import Image from "next/image";
import Step0 from "../components/Step0";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import Step6 from "../components/Step6";
import Step7 from "../components/Step7";
import Step8 from "../components/Step8";
import Step9 from "../components/Step9";
import Step10 from "../components/Step10";
import Step11 from "../components/Step11";
import Progress from "../components/Progress";
import { gsap } from "gsap";
import { steps } from "../data/data";
import { store } from "../data/store";
import { ItemsConfigTemplate } from "../data/data";
import SendingLoader from "../components/sendingLoader";
export interface ISelections {
  description: string;
  email: string;
  name: string;
  phone: string;
  steps: {
    create: {
      section: string;
      items: {
        create: {
          item: string;
        }[];
      };
    }[];
  };
}

type IndexProps = {
  children: any;
};
const ItemsConfigTemplateEmpty = {
  item0: false,
  item1: false,
  item2: false,
  item3: false,
  item4: false,
  item5: false,
  item6: false,
  item7: false,
  item8: false,
  item9: false,
  item10: false,
  count: 0,
};

const Index: FunctionComponent<IndexProps> = ({ children }) => {
  const [step, setStep] = useState(-1);
  const [selections, setSelection] = useState(store);
  /*   const { state, dispatch } = useContext(AppContext); */
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(DispatchContext);
  const [sending, setSending] = useState(false);
  let buttonConfig;
  let originX;
  const stepAdvance = (goto) => {
    originX = goto > step ? 500 : -500;
    setStep(goto);

    gsap.from(document.getElementById("steps"), {
      x: originX,
      ease: "power1.out",
      duration: 0.5,
    });
    dispatch({
      type: "buttonset",
      payload: {
        ...state.buttonConfig,
        disabled: true,
      },
    });
    dispatch({
      type: "itemset",
      payload: ItemsConfigTemplateEmpty,
    });

    for (const prop of Object.getOwnPropertyNames(ItemsConfigTemplate)) {
      ItemsConfigTemplate[prop] = ItemsConfigTemplateEmpty[prop];
    }
  };
  const stepSwipe = (goto) => {
    let swipeStart: object = {
      x: 0,
      opacity: 1,
    };
    let swipeEnd: object = {
      x: -500,
      duration: 0.5,
      opacity: 1,
      ease: "power1.in",
      onComplete: stepAdvance,
      onCompleteParams: [goto],
    };

    gsap.fromTo(document.getElementById("steps"), swipeStart, swipeEnd);
  };
  const gotoLoader = () => {
    setStep(7);

    let swipeStart: object = {
      opacity: 1,
    };
    let swipeEnd: object = {
      duration: 0.5,
      opacity: 0,
      delay: 3,
      ease: "power1.in",
      onComplete: gotoResult,
    };

    gsap.fromTo(document.getElementById("steps"), swipeStart, swipeEnd);
  };
  const endStep = (goto) => {
    let swipeStart: object = {
      opacity: 1,
    };
    let swipeEnd: object = {
      duration: 0.5,
      opacity: 0,
      ease: "power1.in",
      onComplete: gotoLoader,
    };

    gsap.fromTo(document.getElementById("steps"), swipeStart, swipeEnd);
    gsap.fromTo(document.getElementById("progress"), swipeStart, swipeEnd);
  };

  const gotoResult = () => {
    setStep(8);
    gsap.fromTo(
      document.getElementById("steps"),
      { scale: 0 },
      { scale: 1, opacity: 1, ease: "elastic.out", duration: 1 }
    );
  };

  const submitForm = async (state) => {
    setSending(false);
    stepSwipe(10);
    console.log(selections);
    notify();

    const req = await fetch("/api/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selections),
    });
    const result = await req;

    if (result.ok) {
      setSending(false);
    } else {
      console.log(result);
      setSending(false);
    }
  };

  const notify = async () => {
    const req = await fetch("/api/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selections),
    });
    const result = await req;

    if (result.ok) {
      console.log(result);
    } else {
      console.log(result);
    }
  };

  return (
    <div className="contentOuterContainer">
      <div className="contentInnerContainer">
        <div className="contentHeader">
          <h1 className="blueSpans">
            {`<`}Frontend<span>Finders</span>
            {`/>`}
          </h1>
          <h3>Make the web beautiful again</h3>
        </div>
        <div className="contentBlock">
          <div className="contentTopBar">
            <div className="dotsImage">
              <Image
                src="/images/navDots.svg"
                width={94}
                height={22}
                layout="responsive"
                alt="FrontendFinder"
              />
            </div>
          </div>
          <div className="contentPaper">
            <div className={"innerContentContainer"}>
              {sending ? <SendingLoader /> : null}
              {step > -1 && step < 7 ? (
                <Progress steps={steps} step={step + 1} />
              ) : null}
              {step === -1 ? (
                <Step0 action={stepSwipe} step={0} steps={steps} />
              ) : null}
              {step === 1 - 1 ? (
                <Step1
                  action={stepSwipe}
                  /*        action={submitForm} */
                  step={1}
                  steps={steps}
                  selections={selections}
                  buttonConfig={buttonConfig}
                />
              ) : null}
              {step === 2 - 1 ? (
                <Step2
                  action={stepSwipe}
                  step={2}
                  steps={steps}
                  selections={selections}
                />
              ) : null}
              {step === 3 - 1 ? (
                <Step3
                  action={stepSwipe}
                  step={3}
                  steps={steps}
                  selections={selections}
                />
              ) : null}
              {step === 4 - 1 ? (
                <Step4
                  action={stepSwipe}
                  step={4}
                  steps={steps}
                  selections={selections}
                />
              ) : null}
              {step === 5 - 1 ? (
                <Step5
                  action={stepSwipe}
                  step={5}
                  steps={steps}
                  selections={selections}
                />
              ) : null}
              {step === 6 - 1 ? (
                <Step6
                  action={stepSwipe}
                  step={6}
                  steps={steps}
                  selections={selections}
                />
              ) : null}
              {step === 7 - 1 ? (
                <Step7
                  action={endStep}
                  step={7}
                  steps={steps}
                  selections={selections}
                />
              ) : null}
              {step === 8 - 1 ? (
                <Step8
                  action={endStep}
                  step={8}
                  steps={steps}
                  selections={selections}
                />
              ) : null}{" "}
              {step === 9 - 1 ? (
                <Step9
                  action={stepSwipe}
                  step={9}
                  steps={steps}
                  selections={selections}
                />
              ) : null}
              {step === 10 - 1 ? (
                <Step10
                  action={submitForm}
                  step={10}
                  steps={steps}
                  selections={selections}
                />
              ) : null}
              {step === 11 - 1 ? <Step11 /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
