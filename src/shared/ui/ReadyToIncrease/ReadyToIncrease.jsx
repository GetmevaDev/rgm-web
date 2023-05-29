/* eslint-disable import/order */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from "classnames";
import Image from "next/image";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { DropdownList } from "react-widgets";
import DatePicker from "react-widgets/DatePicker";
import useSWR from "swr";

import { fetcher } from "@/shared";
import emailjs from "@emailjs/browser";

import { Button, Input, Modal, Typography } from "..";

import styles from "./ReadyToIncrease.module.scss";

const colors = {
  gray: styles.gray,
  white: styles.white,
};

const values = {
  companyName: "",
  domain: "",
  name: "",
  email: "",
  phoneNumber: "",
  date: null,
  budget: "",
  dueDate: null,
  location: "",
  makers: "",
  services: [],
  technology: "",
  platform: "",
  reference: "",
  privacy: "",
  project: "",
  goal1: "",
  goal2: "",
  goal3: "",
  scope: "",
  difficulties: "",
  criteria: "",
  requirements: "",
  link: "",
  aboutUs: "",
};

export const ReadyToIncrease = ({
  title,
  image,
  color = "gray",
  width,
  height,
}) => {
  const form = useRef();
  const [isActive, setIsActive] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: values ?? {},
  });
  const { data, isError, isLoading } = useSWR(
    "https://cms-rgm.herokuapp.com/api/submit-form?populate=deep",
    // "http://localhost:1337/api/navigation?populate=deep",
    fetcher
  );

  const openPopup = () => {
    setIsActive(true);
  };

  const closePopup = () => {
    setIsActive(false);
  };

  if (isError) return <div>Error...</div>;

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_mw3qmm3",
        "template_fhgximq",
        form.current,
        "user_iw2a3XOS7O7HrGbR8S31M"
      )
      .then(
        (result) => {
          toast.success(result.text);
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <div className={classNames(styles.ready, colors[color])}>
      <div className={styles.ready_inner}>
        <div className={styles.left}>
          <Typography tag="h2" size="mini">
            {title}
          </Typography>

          <div className={styles.buttons}>
            <Button variant="outline" onClick={openPopup}>
              Submit RFP
            </Button>
            <Button variant="outline">Book a Free Review</Button>
          </div>
        </div>
        {isActive && (
          <Modal onClose={closePopup} isActive={isActive}>
            <Typography tag="h2" size="mini">
              Request for Proposal
            </Typography>

            {!isLoading ? (
              <form
                onSubmit={handleSubmit(sendEmail)}
                ref={form}
                className={styles.form}
              >
                <div className={styles.inputs}>
                  <Input
                    label="Company Name"
                    control={control}
                    name="companyName"
                  />

                  <Input label="Domain Name" name="domain" control={control} />

                  <Input
                    control={control}
                    label="Primary Contact Name"
                    name="name"
                  />

                  <Input
                    control={control}
                    label="Primary Contact Email"
                    name="email"
                  />

                  <Input
                    control={control}
                    label="Primary Contact Phone Number"
                    name="phoneNumber"
                  />

                  <span className={styles.block}>
                    Date of Proposal Submission
                    <Controller
                      name="date"
                      control={control}
                      render={({ field }) => (
                        <DatePicker placeholder="YYYY-MM-DD" {...field} />
                      )}
                    />
                  </span>

                  <Input
                    control={control}
                    label="Budget Amount"
                    name="budget"
                  />

                  <span className={styles.block}>
                    Proposal Due Date
                    <Controller
                      name="dueDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker placeholder="YYYY-MM-DD" {...field} />
                      )}
                    />
                  </span>

                  <span className={styles.block}>
                    Select Location
                    <Controller
                      name="location"
                      control={control}
                      render={({ field }) => (
                        <DropdownList
                          defaultValue="Select"
                          dataKey="id"
                          data={data?.data?.attributes?.Locations}
                          textField="text"
                          {...field}
                        />
                      )}
                    />
                  </span>

                  <span className={styles.block}>
                    Do we need to include any other decision-makers in the
                    conversation?
                    <Controller
                      name="makers"
                      control={control}
                      render={({ field }) => (
                        <DropdownList
                          defaultValue="Select"
                          {...field}
                          data={["Yes", "Other", "No"]}
                        />
                      )}
                    />
                  </span>

                  <span className={styles.block}>
                    What services are you interested in
                    <Controller
                      name="services"
                      control={control}
                      render={({ field }) => (
                        <DropdownList
                          defaultValue="Select"
                          dataKey="id"
                          data={data?.data?.attributes?.Services}
                          textField="text"
                          {...field}
                        />
                      )}
                    />
                  </span>

                  <span className={styles.block}>
                    What technology is most important for your websites success
                    <Controller
                      name="technology"
                      control={control}
                      render={({ field }) => (
                        <DropdownList
                          defaultValue="Select"
                          dataKey="id"
                          data={data?.data?.attributes?.Technologies}
                          textField="text"
                          {...field}
                        />
                      )}
                    />
                  </span>

                  <span className={styles.block}>
                    Do you have a preference in platform?
                    <Controller
                      name="platform"
                      control={control}
                      render={({ field }) => (
                        <DropdownList
                          defaultValue="Select"
                          dataKey="id"
                          data={data?.data?.attributes?.Platform}
                          textField="text"
                          {...field}
                        />
                      )}
                    />
                  </span>

                  <span className={styles.block}>
                    <Input
                      control={control}
                      label="  Do you have a website you`d like us to reference? If so,
                    please list what styles, colors, animations or functionality
                    are most important to you"
                      name="reference"
                    />
                  </span>

                  <span className={styles.block}>
                    Will you require a Privacy Policy, Terms of Service or
                    Accessibility Statement?
                    <Controller
                      name="privacy"
                      control={control}
                      render={({ field }) => (
                        <DropdownList
                          defaultValue="Select"
                          {...field}
                          data={["Yes", "Other", "No"]}
                        />
                      )}
                    />
                  </span>

                  <Input
                    control={control}
                    label="Project Overview"
                    name="project"
                  />

                  <div className={styles.block_inner}>
                    1. <Input control={control} name="goal1" />
                  </div>

                  <div className={styles.block_inner}>
                    2. <Input control={control} name="goal2" />
                  </div>

                  <div className={styles.block_inner}>
                    3.
                    <Input control={control} name="goal3" />
                  </div>

                  <Input
                    control={control}
                    label="Scope of Work (Please describe what services you would like)*"
                    name="scope"
                  />

                  <Input
                    control={control}
                    label="Current roadblocks and difficulties"
                    name="difficulties"
                  />

                  <Input
                    control={control}
                    label="Evaluation Metrics and Criteria"
                    name="criteria"
                  />

                  <Input
                    control={control}
                    label="  Submission Requirements"
                    name="requirements"
                  />
                  <span className={styles.block}>
                    <label
                      htmlFor="How did you hear about us?"
                      aria-label="How did you hear about us?"
                    >
                      How did you hear about us?
                    </label>

                    <Controller
                      name="aboutUs"
                      control={control}
                      render={({ field }) => (
                        <DropdownList
                          defaultValue="Select"
                          data={[
                            "Google Search",
                            "Yelp",
                            "Facebook",
                            "Referred by a friend",
                          ]}
                          {...field}
                        />
                      )}
                    />
                  </span>
                </div>

                <div className={styles.about}>
                  <Input
                    control={control}
                    name="link"
                    label="Link to a Pinterest board with visual inspiration for your brand (if applicable)"
                  />
                  <Button variant="outline" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            ) : (
              <div className={styles.loader}>
                <PulseLoader
                  color="#bda76a"
                  cssOverride={override}
                  size={30}
                  aria-label="Loading Spinner"
                />
              </div>
            )}
          </Modal>
        )}

        <div className={styles.card}>
          <Image
            src={image}
            width={width}
            height={height}
            alt="robert"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};
