import { Box, HStack, Text, VStack, Img, Divider, chakra, Grid, GridItem, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../../components/layout'
import Bird from '../../assets/img/blog_bird.svg'
import Bing from '../../assets/img/bing.svg'
import Rachel from '../../assets/icons/Rachel.svg'
import Monica from '../../assets/icons/Monica.svg'
import news1 from '../../assets/img/news1.png'
import news2 from '../../assets/img/news2.png'
import news3 from '../../assets/img/news3.png'
import news4 from '../../assets/img/news4.png'
import news5 from '../../assets/img/news5.png'
import news6 from '../../assets/img/news6.png'
import Eclipse from '../../assets/img/Ellipse.png'
import Image from 'next/image'

const BlogScreen = () => {
    const newsList = [
        {
            img: news1,
            text: 'Pitch termsheet backing validation focus release.',
            avatar: <Bing />,
            name: 'Chandler Bing',
        },
        {
            img: news2,
            text: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            avatar: <Rachel />,
            name: 'Rachel Green',
        },
        {
            img: news3,
            text: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            avatar: <Monica />,
            name: 'Monica Geller',
        },
        {
            img: news4,
            text: 'Pitch termsheet backing validation focus release.',
            avatar: <Bing />,
            name: 'Chandler Bing',
        },
        {
            img: news5,
            text: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            avatar: <Rachel />,
            name: 'Rachel Green',
        },
        {
            img: news6,
            text: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            avatar: <Monica />,
            name: 'Monica Geller',
        },
    ]

  return (
        <Box width={'100%'} px={{base: 10, md: 20}}>
            <Box
                width={'100%'}
                marginX={'auto'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                marginTop={10}
            >
                <Text>Blog</Text>
                <Text fontSize={60} fontWeight={400} color={'#0A2640'}>Thoughts and words</Text>

                <Box       
                    display={'flex'}
                    flexDirection={{base: 'column', md: 'row'}}
                    justifyContent={{base: 'center', md: 'space-between'}}
                    alignItems={'center'}
                >
                    <Bird />                    
                    <VStack 
                        flexBasis={['100%','40%']}       
                        alignItems={'flex-start'}
                        fontSize={16}
                        gap={5}>
                        <HStack>
                            <Text
                                color={'#0A2640'}
                                fontWeight={700}
                            >Category</Text>
                            <Text
                                color={'#777777'}
                                fontWeight={400}
                            >September 01, 2022</Text>
                        </HStack>

                        <Text fontSize={20} fontWeight={400}>
                            Pitch termsheet backing validation focus release. Pitch termsheet backing validation focus release.
                        </Text>

                        <HStack>
                            <Bing />
                            <Text>Chandler bing</Text>
                        </HStack>
                    </VStack>
                </Box>
                </Box>

                <Divider orientation={'horizontal'} borderColor={'#0A2640'} width={'100%'} borderWidth={1} marginY={10} />

                <Box width={'100%'} display={'flex'} flexDirection={'column'}>
                    <chakra.h3 textAlign={['center', 'left']} fontWeight={400} fontSize={40}>Latest news</chakra.h3>

                    <Grid
                        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
                        gap={[10,3]}
                        my={10}
                    >
                        {
                            newsList?.map( (news, index) => (
                                <GridItem key={index} my={5} gap={5} cursor={'pointer'}>
                                    <Image
                                        width={250}
                                        height={200}
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                        src={news.img}
                                        alt={news.name}
                                    />

                                    <HStack gap={3}>
                                        <Text
                                            color={'#0A2640'}
                                            fontWeight={700}
                                        >Category</Text>
                                        <Text
                                            color={'#777777'}
                                            fontWeight={400}
                                        >September 01, 2022</Text>
                                    </HStack>
                                    
                                    <Text my={3} height={90} fontSize={18}>{news.text}</Text>

                                    <HStack>
                                        {news.avatar}
                                        <Text fontSize={16} textTransform={'capitalize'}>{news.name}</Text>
                                    </HStack>
                                </GridItem>
                            ))
                        }
                    </Grid>
                    <Button
                        margin={'10px auto'}
                        p={4}
                        border={`2px solid #0A2640`}
                        borderRadius={56}
                        backgroundColor={'#fff'}
                    >
                        Load More
                    </Button>
            </Box>

            <Box my={5} borderRadius={12} backgroundColor={'#0A2640'} width={'100%'} minHeight={[400,350]} position={'relative'}>
                <Box 
                    width={[300,600]}
                    height={'50%'}
                    position={'absolute'}
                    top={0}
                    right={0}
                >
                    <Image
                        src={Eclipse}
                        alt={'eclipse'}
                    />
                </Box>
                <VStack
                    width={['100%', '70%']}
                    position={'relative'}
                    top={20}
                    gap={3}
                    margin='auto'
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text color={'white'} fontSize={[25, 35]} fontWeight={400} textAlign={'center'}>
                        An enterprise template to ramp up your company website
                    </Text>
                    <Box 
                        width={'100%'}
                        as={'form'}
                        marginTop={10}
                        display={'flex'}
                        flexDirection={{base: 'column', md: 'row'}}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Input
                            width={[200, 400]}
                            placeholder="Your email address"
                            bg={'gray.100'}
                            border={0}
                            
                            borderRadius={50}
                            color={'gray.500'}
                            _placeholder={{
                            color: 'gray.500',
                            }}
                        />
                        <Button
                            p={6}
                            marginTop={{base: 10, md: 0}}
                            border={`2px solid #65E4A3`}
                            borderRadius={56}
                            backgroundColor={'#65E4A3'}
                        >
                            start now
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </Box>
  )
}

export {BlogScreen}