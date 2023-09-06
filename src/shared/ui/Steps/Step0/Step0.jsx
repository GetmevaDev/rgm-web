import React from "react";

import { Button, Typography } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step0 = ({ onNext, reviews }) => (
  <div className={styles.step0}>
    <div>
      <h3 className={styles.title}>A Tailored Approach to Your Digital Growth</h3>

      <p className={styles.sub_title}>
        Crafting Your Unique Digital Success Strategy Starts Here
      </p>

      <div className={styles.description}>
        We understand that each business is unique, and so are its digital needs.
        That's why we've put together this simple yet comprehensive questionnaire.
        It's designed to help us understand you, your business, and your goals
        better. By sharing your current situation, aspirations, and potential
        hurdles, we'll be able to tailor a digital solution that can truly drive
        your business growth. <br />
        All you need to do is to take a few moments to answer the questions as
        honestly and thoroughly as you can. And don't worry, there are no wrong
        answers - it's all about getting to know your business better! Together,
        we'll map out your journey towards increased revenue, enhanced online
        presence, and ultimate business success.
      </div>

      <Button variant="contained" onClick={onNext} type="button">
        Ready to start? Let's dive in!
      </Button>

      <Reviews reviews={reviews} />
  </div>
);
