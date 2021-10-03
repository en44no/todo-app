import React from 'react';
import { createStandaloneToast } from '@chakra-ui/react';
import theme from '../theme';

const Notification = (title, description, status) => {
  const toast = createStandaloneToast({ theme: theme });

  toast({
    title: title,
    description: description,
    status: status,
    duration: 3000,
    position: 'bottom-right',
    isClosable: true,
  });

  return <></>;
};

export default Notification;
