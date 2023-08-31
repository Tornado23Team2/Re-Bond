import { Flex } from "@/components/elements/box/Flex";
import React, { useState } from "react";

const login_button = () => {
  const [activate, setActivate] = useState(false);

  const ActivateMission = () => {
    if (!activate) {
      setActivate(true);
      console.log("MissionActivated");
    } else {
      setActivate(false);
      console.log("MissionPaused");
    }
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      direction="row"
      className="bg-gray-200 px-5 py-3 w-full mt-3"
    >
      <h2>お題ほげほげほげ</h2>

      <button
        onClick={ActivateMission}
        className="bg-baseBlue w-[70px] py-2 text-white rounded-md"
      >
        開始
      </button>
    </Flex>
  );
};

export default login_button;
