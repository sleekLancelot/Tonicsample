import React, { ReactNode } from 'react'
import { Box, HStack, Text, VStack, Img, Divider, chakra, Grid, GridItem, Button } from '@chakra-ui/react'
import Image from 'next/image'

interface NewsRoomProp {
    data: Array<{
        img: any,
        text: string
        avatar: any,
        name: string
    }>,
    children?: ReactNode
}

const NewsRoom = ({
    data,
    children,
}: NewsRoomProp) => {
  return (
    <Box width={'100%'} display={'flex'} flexDirection={'column'}>
        {
            children
        }

        <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            placeItems={{ base: 'initial', md: 'center'}}
            gap={[10,3]}
            my={10}
        >
            {
                data?.map( (news, index) => (
                    <GridItem
                        key={index}
                        my={5}
                        gap={6}
                        cursor={'pointer'}
                        width={250}
                        // height={200}
                    >
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
                        
                        <Text my={3} height={90} fontSize={18} maxWidth={'100%'}>{news.text}</Text>

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
  )
}

export {NewsRoom}