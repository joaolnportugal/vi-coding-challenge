import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MonsterList from "../components/MonsterList";

const meta: Meta<typeof MonsterList> = {
  title: "Components/MonsterList",
  component: MonsterList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MonsterList>;

export const Default: Story = {};
