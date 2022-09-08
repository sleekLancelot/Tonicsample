import React from "react";
import { useDisclosure, Flex, Box, Button,  VStack, Icon, HStack, Link } from "@chakra-ui/react";
import DrawerComponent from './DrawerNav';
import {  IoMdMenu } from 'react-icons/io';
// import { Link } from 'react-scroll';
import NextLink from "next/link"

interface MobileNavProps {
    data: Array<{
        label: string,
        link: string,
    }>
}
const MobileNav = ({data}: MobileNavProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<any>();

  return (
    <Flex>
      <Button
        ref={btnRef}
        onClick={onOpen}
        display={{ base: 'block', md: 'none' }}
        >
        <IoMdMenu size="26px" />
      </Button>
      
      <DrawerComponent
        isOpen={isOpen}
        onClose={onClose}
        ref={btnRef}
      >
        <VStack alignItems="left">
          {data?.map((item, i) => (
            <NextLink href={item?.link} passHref key={i}>
                <Link>
                <Button variant='text'>{item?.label}</Button>
                </Link>
            </NextLink>
          ))}
        </VStack>
      </DrawerComponent>
    </Flex>
  )
}

export {MobileNav}