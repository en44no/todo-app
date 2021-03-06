import { useColorMode } from "@chakra-ui/color-mode";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Container, Heading, Button, Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import ToDoContext from "../context/ToDoContext";
import FilterToDo from "./FilterToDo";
import ToDoCounter from "./ToDoCounter";

const Header = () => {
  const { selectedValue } = useContext(ToDoContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#272d38" : "#e3e3e3";
  return (
    <>
      <Container maxW={"container.md"}>
        <Box d={"block"}>
          <Heading as="h2" size="xl">
            Mis tareas
            {colorMode === "light" ? (
              <Button
                boxShadow="base"
                aria-label="lightModeButton"
                bg="ligth"
                ml="1rem"
                w={"5%"}
                _hover={{
                  bg: bgColor,
                  transition: "transform .2s",
                  transform: "scale(1.02)",
                  boxShadow: "base",
                }}
                _focus={{ boxShadow: "base" }}
                onClick={toggleColorMode}
              >
                <SunIcon color="#000" />
              </Button>
            ) : (
              <Button
                boxShadow="base"
                ml="1rem"
                w={"5%"}
                bg="dark"
                _hover={{
                  bg: bgColor,
                  transition: "transform .2s",
                  transform: "scale(1.02)",
                }}
                _focus={{ boxShadow: "base" }}
                aria-label="darkMode"
                onClick={toggleColorMode}
              >
                <MoonIcon color="#fff" />
              </Button>
            )}
            <FilterToDo />
          </Heading>
        </Box>
        {selectedValue !== "completed" && <ToDoCounter type="pendientes" />}
        {selectedValue === "completed" && <ToDoCounter type="completadas" />}
      </Container>
    </>
  );
};

export default Header;
