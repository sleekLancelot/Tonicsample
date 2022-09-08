import { ReactNode } from 'react';
import NextLink from "next/link";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { themeContext, ThemeProp } from '../../theme';
import BoldoLogo from '../../assets/icons/Boldo_Logo.svg'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'700'} fontSize={'lg'} mb={2} color={'#000'}>
      {children}
    </Text>
  );
};

interface FooterProp {
    theme?: string
}

const Footer = ({
    theme= 'light'
}: FooterProp) => {
  return (
    <Box
      bg={useColorModeValue('#fff', 'gray.900')}
      color={useColorModeValue('#777777', 'gray.200')} mt={30}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
          placeItems={{ sm: 'initial', md: 'center'}}
        >
          <Stack spacing={6} align={'flex-start'}>
            <Box>
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
            </Box>
            <Text as={Container} fontSize={'sm'} maxWidth={{sm: 200, md: 300}} position={'relative'} left={-5}>
                Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
            </Text>
            <Text fontSize={'sm'}>
                All rights reserved.
            </Text>
          </Stack>

          <Stack align={'flex-start'} gap={3}>
            <ListHeader>Landing</ListHeader>
            <NextLink href='/' passHref>
                <Link>Home</Link>
            </NextLink>
            <Link href={'#'}>Products</Link>
            <Link href={'#'}>Services</Link>
          </Stack>
          <Stack align={'flex-start'} gap={3}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>Home</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Careers</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('#65E4A3', 'green.800')}
                ml={2}
                borderRadius={100}
                fontWeight={700}
                color={'#0A2640'}>
                Hiring!
              </Tag>
            </Stack>
            <Link href={'#'}>Services</Link>
          </Stack>
          <Stack align={'flex-start'} gap={3}>
            <ListHeader>Resources</ListHeader>
            <NextLink href='/blog' passHref>
                <Link>Blog</Link>
            </NextLink>
            <Link href={'#'}>Product</Link>
            <Link href={'#'}>Services</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export {Footer}