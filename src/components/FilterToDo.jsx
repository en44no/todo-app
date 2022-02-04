import React, { useContext } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import ToDoContext from "../context/ToDoContext";
import {
  MdList,
  MdOutlineAccessAlarm,
  MdDoneAll,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const FilterToDo = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#272d38" : "#e3e3e3";
  const { selectedValue, setSelectValue } = useContext(ToDoContext);

  const checkValue = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <>
      <Menu placement="bottom-end">
        <MenuButton
          onChange={(event) => checkValue(event)}
          bgColor={bgColor}
          cursor="pointer"
          _hover={[
            "88vw",
            null,
            {
              bg: bgColor,
              transition: "transform .2s",
              transform: "scale(1.02)",
            },
          ]}
          _focus={{ border: "none" }}
          border="none"
          w={["100%", "37%", "25%"]}
          mt={["0.8rem", "0.6rem"]}
          mb={["0.8rem", "0rem"]}
          borderRadius="lg"
          borderEndEndRadius="none"
          borderEndStartRadius="none"
          boxShadow="base"
          float="right"
          as={Button}
          rightIcon={<MdOutlineKeyboardArrowDown fontSize="22px" />}
          leftIcon={
            selectedValue === "all" ? (
              <MdList fontSize="20px" />
            ) : selectedValue === "completed" ? (
              <MdDoneAll fontSize="20px" />
            ) : (
              <MdOutlineAccessAlarm fontSize="20px" />
            )
          }
        >
          <Text fontWeight="normal" textAlign="left">
            {selectedValue === "all"
              ? "Todas"
              : selectedValue === "completed"
              ? "Completadas"
              : "Pendientes"}
          </Text>
        </MenuButton>
        <MenuList
          w={["88vw", null, "100%"]}
          zIndex="1000"
          bgColor={bgColor}
          mt={["-7px", "-8px", "-7px"]}
          ml={["0px", null, "0px"]}
          boxShadow="base"
          borderTopEndRadius="none"
          borderTopStartRadius={["none", null, null]}
        >
          <MenuItem
            minH="40px"
            icon={<MdList color="#3182ce" fontSize="1.4rem" />}
            onClick={() => setSelectValue("all")}
          >
            <Text fontSize="sm">Todas</Text>
          </MenuItem>
          <MenuItem
            minH="40px"
            icon={<MdDoneAll color="#38a169" fontSize="1.4rem" />}
            onClick={() => setSelectValue("completed")}
          >
            <Text fontSize="sm">Completadas</Text>
          </MenuItem>
          <MenuItem
            minH="40px"
            icon={<MdOutlineAccessAlarm color="#daae54" fontSize="1.4rem" />}
            onClick={() => setSelectValue("pending")}
          >
            <Text fontSize="sm">Pendientes</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default FilterToDo;
