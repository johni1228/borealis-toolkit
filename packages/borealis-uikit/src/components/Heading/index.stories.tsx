import React from "react";
import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {},
};

export const Sizes: React.FC = () => {
  return (
    <div>
      <Heading>Default</Heading>
      <Heading scale="md">Size md</Heading>
      <Heading scale="lg">Size lg</Heading>
      <Heading scale="xl">Size xl</Heading>
    </div>
  );
};

export const tags: React.FC = () => {
  return (
    <div>
      <Heading>Default</Heading>
      <Heading tag="h1">Display</Heading>
      <Heading tag="h2">Title</Heading>
      <Heading tag="h3">Headline</Heading>
      <Heading tag="h4">Header</Heading>
      <Heading tag="h5">subheader</Heading>
      <Heading tag="h6">Body</Heading>
      <Heading tag="h7">Caption</Heading>
      <Heading tag="h8">Small</Heading>
    </div>
  );
};
