import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MonsterFilter from "../components/MonsterFilter/MonsterFilter";

const meta: Meta<typeof MonsterFilter> = {
  title: "Components/MonsterFilter",
  component: MonsterFilter,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MonsterFilter>;

export const Filter: Story = {
  args: {
    types: ["Fire", "Water", "Grass", "Electric"],
    selectedType: "",
    onChange: (type: string) => console.log(`Selected Type: ${type}`),
  },
};
