import React, { forwardRef } from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
  DrawerCloseButton, Flex, Text
} from "@chakra-ui/react";

interface DrawerProp {
  p?: number
  placement?: any
  width?: string | number
  isOpen?: any
  children?: any
  onClose?: any
  btnRef?: any
  title?: any
  footer?: any
}

const DrawerComponent = ({
  p = 15,
  placement = "right",
  width,
  isOpen,
  children,
  onClose,
  btnRef,
  title = "Menu",
  footer,
}: DrawerProp, ref: any) => {

  return (
    <Flex w={width}>
      <Drawer
        autoFocus={false}
        returnFocusOnClose={false}
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={ref}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx={p} my={p} />
          <DrawerHeader my={p}>
            <Text as="p"> {title} </Text>
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default forwardRef(DrawerComponent)