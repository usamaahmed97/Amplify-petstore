/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Pet } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function AddPet(props) {
  const { pet, overrides, ...rest } = props;
  const [nameFieldValue, setNameFieldValue] = useStateMutationAction("");
  const [aboutFieldValue, setAboutFieldValue] = useStateMutationAction("");
  const [imageFieldValue, setImageFieldValue] = useStateMutationAction("");
  const [breedFieldValue, setBreedFieldValue] = useStateMutationAction("");
  const [colorFieldValue, setColorFieldValue] = useStateMutationAction("");
  const [ageFieldValue, setAgeFieldValue] = useStateMutationAction("");
  const contentOnClick = useDataStoreUpdateAction({
    fields: {
      name: nameFieldValue,
      about: aboutFieldValue,
      image: imageFieldValue,
      breed: breedFieldValue,
      color: colorFieldValue,
      age: ageFieldValue,
    },
    id: pet?.id,
    model: Pet,
    schema: schema,
  });
  const buttonThreeOneFiveSevenTwoSevenThreeTwoOnClick =
    useDataStoreCreateAction({
      fields: {
        name: nameFieldValue,
        about: aboutFieldValue,
        image: imageFieldValue,
        breed: breedFieldValue,
        color: colorFieldValue,
        age: ageFieldValue,
      },
      model: Pet,
      schema: schema,
    });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      borderRadius="35px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AddPet")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        onClick={() => {
          contentOnClick();
        }}
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile29766913")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="511px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Profile"
            {...getOverrideProps(overrides, "Edit Profile29766916")}
          ></Text>
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            src={pet?.image}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Name"
            placeholder="Enter Name..."
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={nameFieldValue}
            onChange={(event) => {
              setNameFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "NameField")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Age"
            placeholder="Enter Age..."
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={ageFieldValue}
            onChange={(event) => {
              setAgeFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "AgeField")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Breed"
            placeholder="Enter Breed..."
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={breedFieldValue}
            onChange={(event) => {
              setBreedFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "BreedField")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="About"
            placeholder="Enter About..."
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={aboutFieldValue}
            onChange={(event) => {
              setAboutFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "AboutField")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Color"
            placeholder="Enter Color..."
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={colorFieldValue}
            onChange={(event) => {
              setColorFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "ColorField")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Image"
            placeholder="Upload Image..."
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={imageFieldValue}
            onChange={(event) => {
              setImageFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "ImageField")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonThreeOneFiveSevenTwoSevenThreeTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Button31572732")}
        ></Button>
        <View
          width="71px"
          height="40px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Button
            display="flex"
            gap="0"
            position="absolute"
            top="0px"
            left="0px"
            justifyContent="center"
            alignItems="center"
            padding="8px 16px 8px 16px"
            size="default"
            isDisabled={true}
            variation="primary"
            children="Update"
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
        </View>
      </Flex>
    </Flex>
  );
}
