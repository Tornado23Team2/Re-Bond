"use client";
import { Flex } from "@/components/elements/box/Flex";
import React, { useState } from "react";

const login_input = () => {
  return (
    <>
      <Flex align="center" justify="center" className="">
        <label htmlFor="name">
          <p></p>
          <input
            type="text"
            id="mailaddress"
            defaultValue={"example@com"}
            placeholder=""
            className="p-3 rounded-sm bg-gray-200"
          />
        </label>
      </Flex>
    </>
  );
};

export default login_input;
