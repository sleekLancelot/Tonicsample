import React from 'react'
import NextLink from "next/link"
import {  Image, Flex, Button,  HStack, Link , chakra, Text, Box } from '@chakra-ui/react';
import BoldoLogo from '../../../assets/icons/Boldo_Logo.svg'
import { MobileNav } from './MobileNav';
import { themeContext, ThemeProp } from '../../../theme';

const data = [
    {
        label: 'Product',
        link: '/'
    },
    {
        label: 'Blog',
        link: '/blog'
    },
    {
        label: 'About',
        link: '/about'
    },
]

interface NavbarProp {
    theme?: string
}

const Navbar = ({
    theme= 'light'
}: NavbarProp) => {
  return (
    <chakra.header id="header" backgroundColor={'transparent'}>
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        <NextLink href='/' passHref>
            <Link
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                _hover={{
                  textDecoration: 'none',
                }}
            >
              <BoldoLogo />
              <Text
                  color={themeContext[theme as keyof ThemeProp]?.textColor}
                  // fontFamily={'Manrope'}
                  fontWeight={700}
                  fontSize={35}
                  marginLeft={3}
                  alignSelf={'baseline'}
              >Boldo</Text>
            </Link>
        </NextLink>
        
        <HStack as="nav" spacing="5">
          <Box display={{ base: 'none', md: 'block' }}>
          {data.map((item: any, index: number) => (
            <NextLink passHref href={item?.link} key={index}>
                <Link
                    // fontFamily={'Open Sans'}
                    fontSize={16}
                    fontWeight={600}
                >
                    <Button variant="nav"> {item.label} </Button>
                </Link>
            </NextLink>
          ))}
          </Box>
          <Button
            p={4}
            border={`2px solid ${themeContext[theme as keyof ThemeProp]?.textColor}`}
            borderRadius={56}
            backgroundColor={themeContext[theme as keyof ThemeProp]?.bg}
          >
            Login
          </Button>

          <MobileNav data={data} />
        </HStack>
        
      </Flex>
    </chakra.header>
  )
}

export {Navbar}