import React from 'react'
import NextLink from "next/link"
import {  Image, Flex, Button,  HStack, Link , chakra, Text, Box } from '@chakra-ui/react';
import BoldoLogo from '../../assets/icons/Boldo_Logo.svg'

const data = [
    // {
    //     label: 'Product',
    //     link: '/'
    // },
    // {
    //     label: 'Blog',
    //     link: '/blog'
    // },
    {
        label: 'About',
        link: '/about'
    },
]

interface ThemeProp {
    light: {
        textColor: string,
        bg: string,
    },
    dark: {
        textColor: string,
        bg: string,
    },
}

const themeContext: ThemeProp = {
    light: {
        textColor: '#0A2640',
        bg: '#FFFFFF',
    },
    dark: {
        textColor: '#0A2640',
        bg: '#FFFFFF',
    },
}

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
                // width={90}
            >
                {/* <Box width={'100%'}> */}
                    <BoldoLogo />
                {/* </Box> */}
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
          <Button
            p={4}
            border={`2px solid ${themeContext[theme as keyof ThemeProp]?.textColor}`}
            borderRadius={56}
            backgroundColor={themeContext[theme as keyof ThemeProp]?.bg}
          >
            Login
          </Button>
        </HStack>
        
      </Flex>
    </chakra.header>
  )
}

export {Navbar}