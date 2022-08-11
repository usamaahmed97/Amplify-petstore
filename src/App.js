import { useState } from "react";
import "./App.css";
import { Pets, NavBar, Footer, AddPet, PetDetails } from "./ui-components";
import {withAuthenticator} from "@aws-amplify/ui-react";


function App({user, signOut}) {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const formOverride = {
    NameField: {
      placeholder: name,
    },
    AgeField: {
      placeholder: age,
    },
    BreedField: {
      placeholder: breed,
    },
    AboutField: {
      placeholder: about,
    },
    ColorField: {
      placeholder: color,
    },
    ImageField: {
      placeholder: image,
    },
    Button29766926: {
      isDisabled: !updatePet ? true : false,
    },
    Button31572732: {
      isDisabled: updatePet ? true : false,
    },
    Icon: {
      onClick: () => {
        setShowForm(!showForm);
      },
    },
  };

  const navBarOverrides = {

    Button:{
      onClick:signOut 
    },

    image: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdzi5IOCyDcpUZLM0Ho2EyUkU2f9mEyVk1Q&usqp=CAU",
    },
    "Pet Store": {
      onClick: () => {
        setShowForm(!showForm);
      },

      style: {
        cursor: "pointer",
      },
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar width="100%" overrides={navBarOverrides} />

        {showDetails && (
          <PetDetails
            pet={pet}
            style={{ textAlign: "left", margin: "1rem" }}
            overrides={{
              Icon: {
                onClick: () => {
                  setShowDetails(false);
                },
                style: {
                  cursor: "pointer",
                },
              },
            }}
          />
        )}

        {showForm && (
          <AddPet
            pet={updatePet}
            style={{ textAlign: "left", margin: "1rem" }}
            overrides={formOverride}
          />
        )}
        <Pets
          overrideItems={({ item, index }) => ({
            overrides: {
              Breed: { color: "blue" },
              Button29766907: {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item);
                },
              },
              Button31482694: {
                onClick: () => {
                  if (!showForm) {
                    setShowForm(true);
                  }
                  setUpdatePet(item);
                  setName(item.name);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setColor(item.color);
                  setImage(item.image);
                },
              },
            },
          })}
        />

        <Footer width={"100%"} />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
