import React from 'react'
import Image from 'next/image'
import { Box, Container, Text, VStack, Button, Input } from '@chakra-ui/react'

import Eclipse from '../../assets/img/Ellipse.png'

const ContactCard = () => {
  return (
    <Box my={5} borderRadius={12} backgroundColor={'#0A2640'} width={'100%'} minHeight={[400,350]} position={'relative'} overflow={'hidden'}>
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
				gap={4}
				margin='auto'
				justifyContent={'center'}
				alignItems={'center'}
			>
				<Text maxW={'container.sm'} as={Container} color={'white'} fontSize={[25, 40]} fontWeight={400} textAlign={'center'} fontFamily={'manrope'}>
					An enterprise template to ramp up your company website
				</Text>
				<Box 
					width={{base:'100%', md:'85%'}}
					as={'form'}
					marginTop={10}
					display={'flex'}
					flexDirection={{base: 'column', md: 'row'}}
					justifyContent={'space-around'}
					alignItems={'center'}
				>
							<Input
									width={[200, 400]}
									placeholder="Your email address"
									bg={'gray.100'}
									border={0}
									type={'email'}
									borderRadius={50}
									color={'gray.500'}
									_placeholder={{
									color: 'gray.500',
									}}
							/>
							<Button
									p={6}
									width={150}
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
  )
}

export {ContactCard}