import { SlCard } from "@shoelace-style/shoelace/dist/react";
import { SlInput } from "@shoelace-style/shoelace/dist/react";
import "./bmi.css";
import { useState } from "react";

export const BMICount = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const result = Math.round((weight * 10000) / (height * height));

  return (
    <div className="card">
      <p>BMI Calculator</p>
      <SlCard className="card-basic">
        <SlInput
          label="height"
          type="number"
          onSlInput={(e: any) => setHeight(e.target.value)}
        />
        <SlInput
          label="weight"
          type="number"
          onSlInput={(e: any) => setWeight(e.target.value)}
        />
      </SlCard>
      <p>Height:{height}</p>
      <p>Weight:{weight}</p>

      <p>{result < 18 && `Your BMI is ${result}.You are in underweight.`}</p>
      <p>
        {result >= 18 &&
          result <= 25 &&
          `Your BMI is ${result}.You are in Normal.`}
      </p>
      <p>{result > 25 && `Your BMI is ${result}.You are in overweight.`}</p>
    </div>
  );
};
