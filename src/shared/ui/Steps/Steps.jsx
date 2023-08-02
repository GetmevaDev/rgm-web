import React, { useEffect, useState } from "react";

import { getUniqueReviews, shuffleReviews } from "@/shared/utils";

import { Step0 } from "./Step0/Step0";
import { Step1 } from "./Step1/Step1";
import { Step2 } from "./Step2/Step2";
import { Step3 } from "./Step3/Step3";
import { Step4 } from "./Step4/Step4";
import { Step5 } from "./Step5/Step5";
import { Step6 } from "./Step6/Step6";
import { Step7 } from "./Step7/Step7";
import { Step8 } from "./Step8/Step8";
import { Step9 } from "./Step9/Step9";

export const Steps = ({
  reviews,
  addons,
  items,
  list,
  packageItems,
  packageList,
}) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    shuffleReviews(reviews);
  }, [reviews]);

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  switch (step) {
    case 0:
      return (
        <Step0 onNext={handleNext} reviews={getUniqueReviews(reviews, step)} />
      );
    case 1:
      return (
        <Step1
          onNext={handleNext}
          onBack={handleBack}
          reviews={getUniqueReviews(reviews, step)}
        />
      );
    case 2:
      return (
        <Step2
          onNext={handleNext}
          onBack={handleBack}
          reviews={getUniqueReviews(reviews, step)}
        />
      );
    case 3:
      return (
        <Step3
          onNext={handleNext}
          onBack={handleBack}
          reviews={getUniqueReviews(reviews, step)}
        />
      );

    case 4:
      return (
        <Step4
          onNext={handleNext}
          onBack={handleBack}
          reviews={getUniqueReviews(reviews, step)}
        />
      );
    case 5:
      return (
        <Step5
          onNext={handleNext}
          onBack={handleBack}
          items={items}
          list={list}
          packageItems={packageItems}
          packageList={packageList}
          reviews={getUniqueReviews(reviews, step)}
        />
      );
    case 6:
      return (
        <Step6
          onNext={handleNext}
          onBack={handleBack}
          items={items}
          list={list}
          reviews={getUniqueReviews(reviews, step)}
        />
      );
    case 7:
      return (
        <Step7
          onNext={handleNext}
          onBack={handleBack}
          addons={addons}
          reviews={getUniqueReviews(reviews, step)}
        />
      );
    case 8:
      return (
        <Step8
          onNext={handleNext}
          onBack={handleBack}
          addons={addons}
          items={items}
          list={list}
          reviews={getUniqueReviews(reviews, step)}
        />
      );

    case 9:
      return (
        <Step9
          onNext={handleNext}
          onBack={handleBack}
          addons={addons}
          items={items}
          list={list}
          reviews={getUniqueReviews(reviews, step)}
        />
      );
    default:
      return <div>Form completed!</div>;
  }
};
