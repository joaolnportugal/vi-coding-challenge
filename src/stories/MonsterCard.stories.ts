import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MonsterCard from "../components/MonsterCard/MonsterCard";

const meta: Meta<typeof MonsterCard> = {
  title: "Components/MonsterCard",
  component: MonsterCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MonsterCard>;

export const Card: Story = {
  args: {
    name: "Pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    type: ["Electric"],
    id: "25",
  },
};
