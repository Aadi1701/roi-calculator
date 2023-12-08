import { type } from "@testing-library/user-event/dist/type";
import React, { useRef, useState } from "react";
import classes from "./style.module.css";

export const Dialog = () => {
  const timeFrameArray = ["1 Day", "7 Days", "30 Days", "1 Year", "5 Year"];
  const tierArray = ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"];
  const inputRef = useRef(null);
  const [timeFrame, setTimeFrame] = useState(timeFrameArray[0]);
  const [enabledAcceleratedApy, setEnabledAcceleratedApy] = useState(true);
  const [tier, setTier] = useState(tierArray[0]);
  const onChange = () => {
    {
      setInputValue(inputRef.current.value);
    }
    // console.log(inputRef.current.value)
  };
  const hideShowDetails = () => {
    setShow(!show);
  };
  const [inputValue, setInputValue] = useState("0.00");
  const [show, setShow] = useState(false);

  const calculate = () => {
    return (
      (Number(inputValue) *
        Number(timeFrame.split(" ")[0]) *
        (Number(tier.split(" ")[1]) * 10)) /
      100
    ); // Using formula for simple interest
  };

  return (
    <div className={classes.background}>
      <main className={classes.dialogBody}>
        <header className={classes.titleBar}>
          <h2>ROI Calculator</h2>
          <i className="fas fa-times"></i>
        </header>

        {/* <span className={classes.currency}>USD</span> */}
        <input
          className={classes.input}
          ref={inputRef}
          type="number"
          value={Number(inputValue)}
          onChange={onChange}
        />

        <div className={classes.buttonContainer}>
          <div>
            <button
              className={[
                classes.Button,
                inputValue === "1000" ? classes.active : null,
              ].join(" ")}
              onClick={() => {
                setInputValue("1000");
              }}
            >
              $1000
            </button>
            <button
              className={[
                classes.Button,
                inputValue === "100" ? classes.active : null,
              ].join(" ")}
              onClick={() => {
                setInputValue("100");
              }}
            >
              $100
            </button>
          </div>
          <h4>~CAKE 0.000</h4>
        </div>

        <h3>TimeFrame</h3>

        <div className={classes.timeFrameChip}>
          {timeFrameArray.map((item, index) => (
            <button
              onClick={() => setTimeFrame(item)}
              key={index}
              className={[
                classes.timeFrameButton,
                timeFrame === item ? classes.active : null,
              ].join(" ")}
            >
              {item}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Enable Accelerated APY</h3>
          <label className={classes.switch}>
            <input
              type="checkbox"
              onChange={(e) => setEnabledAcceleratedApy(e.target.checked)}
              checked={enabledAcceleratedApy}
            />
            <span className={classes.slider}></span>
          </label>
        </div>

        <div className={classes.timeFrameChip}>
          {tierArray.map((item, index) => (
            <button
              onClick={() => setTier(item)}
              className={[
                classes.timeFrameButton,
                tier === item ? classes.active : null,
              ].join(" ")}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>

        <h3 style={{ textAlign: "right", color: "grey" }}>
          ROI at Current Rates
        </h3>

        <input className={classes.input} type={"number"} value={calculate()} readOnly/>

        <h5 style={{ textAlign: "right", color: "grey", marginRight: "2%" }}>
          ~0.000CAKE+0.00000DON
        </h5>

        <button className={classes.accordion} onClick={hideShowDetails}>
          {show ? "Hide Details" : "Show Details"}
        </button>

        <div
          className={classes.panel}
          style={{ display: show ? "block" : "none" }}
        >
          <div
            style={{
              display: "flex",
              marginLeft: "5%",
              justifyContent: "space-between",
            }}
          >
            <h3>APY</h3>
            <h3 style={{ color: "gold", marginRight: "5%" }}> 9%</h3>
          </div>

          <div className={classes.details}>
            <ul className={classes.detailList}>
              <li>Calculated based on Current Rates</li>
              <li>
                All figures are estimates provided for your convenience only,
                and by no means represent guaranteed returns
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
