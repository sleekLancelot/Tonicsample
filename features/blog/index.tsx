import { Box, HStack, Text, VStack, Img, Divider, chakra, Grid, GridItem, Button } from '@chakra-ui/react'
import React from 'react'
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
import Image from 'next/image'
import { ContactCard, NewsRoom } from '../../components'

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
                marginTop={0}
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

                <NewsRoom data={newsList}>
                    <chakra.h3 textAlign={['center', 'left']} fontWeight={400} fontSize={40}>Latest news</chakra.h3>
                </NewsRoom>
            
            <ContactCard />
            
        </Box>
  )
}

export {BlogScreen}