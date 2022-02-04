import React from "react";
import { IconButton, Flex, useToast } from "@chakra-ui/react";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilEnvelopeAdd,
} from "@iconscout/react-unicons";
import { RiGlobalLine } from "react-icons/ri";

const Social = () => {
  const notification = useToast();
  const toastId = "email-toast";

  const notificationAndCopyToClipboard = () => {
    if (!notification.isActive(toastId)) {
      notification({
        id: toastId,
        title: "Correo electrónico copiado.",
        description: "Dirección de Gmail copiada a tu portapapeles.",
        status: "info",
        duration: 4000,
        position: "bottom",
        isClosable: true,
      });
    }
    navigator.clipboard.writeText("nahuelmarquez12@gmail.com");
  };

  return (
    <>
      <Flex
        as="section"
        position="fixed"
        bottom="0"
        right="0"
        mr="1rem"
        ml="1rem"
        mb="1rem"
      >
        <a
          href="https://github.com/en44no"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <IconButton
            _hover={{ color: "#888888" }}
            bg="none"
            mr="1"
            mt="-0.3"
            aria-label="RedirectToGitHubButton"
          >
            <UilGithubAlt />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/nahuelmarquez/"
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
        >
          <IconButton
            _hover={{ color: "#2561a9" }}
            bg="none"
            mr="1"
            mt="-0.5"
            aria-label="RedirectToLinkedinButton"
          >
            <UilLinkedinAlt size="1.7rem" />
          </IconButton>
        </a>
        <IconButton
          _hover={{ color: "#DA3D3D" }}
          bg="none"
          mr="0"
          title="Gmail address"
          aria-label="GetMyEmailAddressButton"
          onClick={() => notificationAndCopyToClipboard()}
        >
          <UilEnvelopeAdd size="1.7rem" />
        </IconButton>
        <a
          href="https://nahuelmarquez.com"
          target="_blank"
          rel="noreferrer"
          title="Personal website"
        >
          <IconButton
            _hover={{ color: "#48a41e" }}
            bg="none"
            aria-label="RedirectToPersonalWebsiteButton"
          >
            <RiGlobalLine size="1.6rem" />
          </IconButton>
        </a>
      </Flex>
    </>
  );
};

export default Social;
