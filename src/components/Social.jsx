import React from "react";
import { IconButton, Flex, useToast } from "@chakra-ui/react";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilEnvelopeAdd,
  UilWhatsapp,
} from "@iconscout/react-unicons";

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
        position="absolute"
        bottom={["0px", null, "12px"]}
        right="12px"
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
          mr="1"
          title="Gmail address"
          aria-label="GetMyEmailAddressButton"
          onClick={() => notificationAndCopyToClipboard()}
        >
          <UilEnvelopeAdd size="1.7rem" />
        </IconButton>
        <a
          href="https://api.whatsapp.com/send/?phone=59894018406&text=%C2%A1Hola!+Te+estoy+contactando+luego+de+ver+tu+p%C3%A1gina+web."
          target="_blank"
          rel="noreferrer"
          title="Whatsapp"
        >
          <IconButton
            _hover={{ color: "#48a41e" }}
            bg="none"
            aria-label="RedirectToWhatsappButton"
          >
            <UilWhatsapp size="1.7rem" />
          </IconButton>
        </a>
      </Flex>
    </>
  );
};

export default Social;
