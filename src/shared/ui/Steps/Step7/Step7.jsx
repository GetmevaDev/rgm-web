import React, { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

const Card = ({ name, price, description, onClick, isSelected }) => {
  const handleToggleSelect = () => {
    onClick(name);
    if (isSelected) {
      toast.info(`Addon "${name}" has been deselected.`, {
        position: "top-center",
        autoClose: 500,
        limit: 3,
      });
    } else {
      toast.info(`Addon "${name}" has been selected.`, {
        position: "top-center",
        autoClose: 500,
        limit: 3,
      });
    }
  };

  return (
    <div className={styles.addon_card}>
      <div>
        <div className={styles.name}>{name}</div>
        <p className={styles.price}>{price}</p>
        {description && (
          <div className={styles.addon_description}>{description}</div>
        )}
      </div>

      <Button
        variant={isSelected ? "outline" : "contained"}
        className={styles.button_step7}
        onClick={handleToggleSelect}
        type="button"
      >
        {isSelected ? (
          <div className={styles.select_svg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <g clipPath="url(#clip0_1823_16438)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.7071 3.79291C15.0976 4.18344 15.0976 4.81661 14.7071 5.20712L7.70709 12.2068C7.31658 12.5973 6.68345 12.5973 6.29292 12.2068L2.79292 8.70714C2.40238 8.31663 2.40235 7.68347 2.79286 7.29293C3.18337 6.90238 3.81653 6.90236 4.20708 7.29286L6.99998 10.0855L13.2929 3.79288C13.6834 3.40236 14.3166 3.40238 14.7071 3.79291Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1823_16438">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Select
          </div>
        ) : (
          "Select"
        )}
      </Button>
    </div>
  );
};
export const Step7 = ({ onBack, onNext, reviews, addons }) => {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleAddonChange = (addonName) => {
    if (selectedAddons.includes(addonName)) {
      setSelectedAddons((prevAddons) =>
        prevAddons.filter((addon) => addon !== addonName));
    } else {
      setSelectedAddons((prevAddons) => [...prevAddons, addonName]);
    }
  };

  console.log(selectedAddons, "select");
  return (
    <div>
      <div className={styles.title}>Step 7: Add-Ons</div>
      <p className={styles.step_desc}>
        Now that we're crafting the perfect plan for you, would you like to
        consider any of these additional features to supercharge your online
        presence and further enhance your business goals?
      </p>

      <div className={styles.addons_cards}>
        {addons?.map((addon) => (
          <Card
            name={addon.name}
            price={addon.price}
            key={addon.id}
            isSelected={selectedAddons.includes(addon.name)}
            description={addon.description}
            onClick={() => handleAddonChange(addon.name)}
          />
        ))}
      </div>

      <div className={styles.buttons}>
        <Button variant="outline" onClick={onBack} type="button">
          Back
        </Button>
        <Button variant="contained" onClick={onNext} type="button">
          Next
        </Button>
      </div>
      <Reviews reviews={reviews} />
    </div>
  );
};
