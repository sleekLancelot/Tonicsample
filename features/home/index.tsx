import React from 'react'
import Image from 'next/image'
import { BsArrowRightShort, BsBrightnessHigh, BsEye, BsArrowRightCircleFill, BsArrowLeftCircleFill, BsArrowDownCircleFill } from 'react-icons/bs'
import { MdCheckCircle } from 'react-icons/md'
import { FaLeaf } from 'react-icons/fa'
import { Box, HStack, Text, VStack, Img, Divider, chakra, Grid, GridItem, Button, Stack, Container, Icon, SimpleGrid, List, ListItem, ListIcon, Flex } from '@chakra-ui/react'
import Eclipse from '../../assets/img/whiteEllipse.png'
import { ContactCard, Deck, Navbar, NewsRoom, Testimony } from '../../components'

import stat1 from '../../assets/img/stat1.png'
import stat2 from '../../assets/img/stat2.png'
import stat3 from '../../assets/img/stat3.png'
import news1 from '../../assets/img/news1.png'
import news2 from '../../assets/img/news2.png'
import news3 from '../../assets/img/news3.png'
import news6 from '../../assets/img/news6.png'
import Bird from '../../assets/img/Bird_blog.png'
import mid1 from '../../assets/img/mid1.png'
import mid2 from '../../assets/img/mid2.png'
import office from '../../assets/img/Rectangle_1270.png'

import Bing from '../../assets/img/bing.svg'
import Rachel from '../../assets/icons/Rachel.svg'
import Monica from '../../assets/icons/Monica.svg'
import Albus from '../../assets/icons/albus.svg'
import Snape from '../../assets/icons/snape.svg'
import Harry from '../../assets/icons/harry.svg'
import Boldo_small from '../../assets/icons/boldo_small.svg'
import Presto_small from '../../assets/icons/presto_small.svg'


const HomeScreen = () => {
	const lists = [
		{
			logo: <Boldo_small />,
			label: 'Boldo',
		},
		{
			logo: <Presto_small />,
			label: 'Presto',
		},
		{
			logo: <Boldo_small />,
			label: 'Boldo',
		},
		{
			logo: <Presto_small />,
			label: 'Presto',
		},
		{
			logo: null,
			label: 'Boldo',
		},
		{
			logo: <Presto_small />,
			label: 'Pres',
		},
	]

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
	]

	const services = [
		{
			img: news1,
			text: 'Cool feature title',
		},
		{
			img: news6,
			text: 'Even cooler feature',
		},
		{
			img: Bird,
			text: 'Cool feature title',
		},
	]

  return (
    <Box 
			position={'relative'} 				
			backgroundImage={{base: 'none', md: Eclipse.src}}
			backgroundPosition="top right"
			backgroundRepeat="no-repeat"
			backgroundSize={'auto 400px'}
		>
			<Navbar />

				<Stack
					// display={'flex'}
					direction={{base: 'column', md: 'row'}}
					justifyContent={'space-between'}
					alignItems={'center'}
					px={10}
					gap={[10,5]}
				>
					<VStack align={'flex-start'} gap={10}>
						<Text fontSize={40} maxW={'lg'} fontWeight={400}>
							Save time by building  fast with Boldo Template 
						</Text>

						<Text 
						as={Container} 
						position={'relative'} left={-5}
						fontWeight={400} fontSize={16} color={'#777777'}>
							Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
						</Text>

						<HStack>
							<Button
								width={200}
								p={4}
								border={`2px solid #0A2640`}
								borderRadius={56}
								color={'#fff'}
								backgroundColor={'#0A2640'}
								_hover={{
									backgroundColor: 'darkblue'
								}}
							>
								Buy template
							</Button>
							<Button
								width={150}
								p={4}
								borderRadius={56}
								border={`2px solid #0A2640`}
								backgroundColor={'#fff'}
							>
								Explore
							</Button>
						</HStack>
					</VStack>

					<VStack gap={5} align={{base: 'flex-start', md: 'initial'}}>
						<Image
							style={{
								objectFit: 'contain',
							}}
							src={stat1}
							alt={'statistics'}
						/>
						<Stack direction={['column', 'row']} justifyContent={'space-between'} gap={5}>
							<Image
								style={{
									objectFit: 'contain',
									// flexBasis: '40%',
								}}
								src={stat2}
								alt={'statistics'}
							/>
							<Image
								style={{
									objectFit: 'contain',
									// flexBasis: '30%',
								}}
								src={stat3}
								alt={'statistics'}
							/>
						</Stack>
					</VStack>
				</Stack>

			<Container
				as={HStack}
				justifyContent={'space-between'}
				marginTop={20}
				gap={6}
				maxWidth={'80%'}
				alignItems={'center'}
				paddingBottom={5}
				overflowX={'auto'}
				__css={{
					'&::-webkit-scrollbar': {
						w: '2',
					},
					'&::-webkit-scrollbar-track': {
						w: '6',
					},
					'&::-webkit-scrollbar-thumb': {
						borderRadius: '10',
						bg: `grey.100`,
					},
				}}
			>
				{
					lists?.map( (list, index) => (
						<HStack key={index}>
							{
								list.logo &&
								list.logo
							}
							<Text fontSize={30} fontWeight={700} color={'#0A2640'} textTransform={'capitalize'}>{list.label}</Text>
						</HStack>
					))
				}
			</Container>

			<Box backgroundColor={'#0A2640'} color={'white'} my={35}>
				<Box px={{base: 10, md: 20}} pt={20} pb={10}>
					<Text textAlign={'center'} fontSize={18} color={'#F1F1F1'}>Our Services</Text>
					<chakra.h3 maxW={'max'} as={Container} mt={[10,5]} textAlign={['start' , 'center']} fontWeight={400} fontSize={45}>Handshake infographic mass market crowdfunding iteration.</chakra.h3>

					<Grid
						templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
						gap={[10,3]}
						my={10}
					>
						{
							services?.map( (service, index) => (
								<GridItem
									key={index}
									my={5}
									gap={5}
									cursor={'pointer'}
									width={250}
								>
									<Image
										width={250}
										height={200}
										style={{
												objectFit: 'contain',
										}}
										src={service.img}
										alt={service.text}
									/>

									<VStack align={'flex-start'} mt={5} gap={3}>
										<Text color={'#F1F1F1'}>{service.text}</Text>

										<HStack pb={1} borderBottom={'1px solid white'}>
											<Text>Explore Page</Text>				
											<Icon
												w={5}
												h={5}
												_hover={{
													marginLeft: 5,
												}}
												as={BsArrowRightShort}
											/>
										</HStack>
									</VStack>
								</GridItem>
							))
						}
					</Grid>
				</Box>
			</Box>

			<Box px={{base: 10, md: 20}} my={[40,55]}>
				<SimpleGrid
					templateColumns={{ base: '1fr', md: '1fr 1fr' }}
					spacing={20}
				>
					<Image
						style={{
							objectFit: 'contain',
							maxWidth: 500,
							maxHeight: 500,
						}}
						src={mid1}
						alt={'income'}
					/>

					<VStack gap={5} justify={'center'} align={'flex-start'}>
						<Text fontSize={36} fontWeight={400}>
							We connect our customers with the best, and help them keep up-and stay open.
						</Text>
						<List spacing={3} fontWeight={400}>
							<ListItem>
								<ListIcon as={MdCheckCircle} color='#0A2640' />
								We connect our customers with the best.
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color='#0A2640' />
								Advisor success customer launch party.
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color='#0A2640' />
								Business-to-consumer long tail.
							</ListItem>
						</List>

						<Button
							width={200}
							p={4}
							border={`2px solid #0A2640`}
							borderRadius={56}
							color={'#fff'}
							backgroundColor={'#0A2640'}
							_hover={{
								backgroundColor: 'darkblue'
							}}
						>
							Start now
						</Button>
					</VStack>

					<VStack gap={5} justify={'center'} align={'flex-start'}>
						<Text fontSize={36} fontWeight={400}>
							We connect our customers with the best, and help them keep up-and stay open.
						</Text>

						<Deck
							color='white'
							bg={'#0A2640'}
							icon={FaLeaf}
							text={'We connect our customers with the best.'}
						/>
						<Deck
							color='#0A2640'
							bg={'white'}
							icon={BsEye}
							text={'Advisor success customer launch party.'}
						/>
						<Deck
							color='#0A2640'
							bg={'white'}
							icon={BsBrightnessHigh}
							text={'Business-to-consumer long tail.'}
						/>
					</VStack>

					<Image
						// width={500}
						// height={600}
						style={{
							objectFit: 'contain',
						}}
						src={mid2}
						alt={'chart'}
					/>
				</SimpleGrid>
			</Box>

			<Box
				backgroundColor={'#0A2640'}
				color={'white'}
				my={35}
				px={{base: 10, md: 20}}
				py={20}
			>
				<Flex
					flexDirection={{base: 'column', md: 'row'}}
					justifyContent={'space-between'}>
					<chakra.h3 fontSize={48} fontWeight={400}>
						An enterprise template to ramp up your company website
					</chakra.h3>

					<HStack gap={5} alignSelf={'flex-end'}>
						<Icon
							w={10}
							h={10}
							as={BsArrowLeftCircleFill}
							cursor={'pointer'}
						/>

						<Icon
							w={10}
							h={10}
							as={BsArrowRightCircleFill}
							cursor={'pointer'}
						/>
					</HStack>
				</Flex>

				<SimpleGrid
					templateColumns={{ sm: '1fr', md: '1fr 1fr 1fr' }}
					spacing={6}
					mt={10}
					placeItems={{ sm: 'initial', md: 'baseline'}}
				>
					<Testimony
						message={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
						Icon={<Albus />}
						name={'Albus Dumbledore'}
						role={'Manager @ Howarts'}
					/>
					<Testimony
						message={'“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”'}
						Icon={<Snape />}
						name={'Severus Snape'}
						role={'Manager @ Slytherin'}
						// height={{base: 'auto', md: 320}}
					/>
					<Testimony
						message={'“Release facebook responsive web design business model canvas seed money monetization.”'}
						Icon={<Harry />}
						name={'Harry Potter'}
						role={'Team Leader @ Gryffindor'}
					/>
				</SimpleGrid>

			</Box>

			<Box px={{base: 10, md: 20}} my={[40,55]}>
				<VStack gap={10}>
					<Image
						// width={500}
						// height={600}
						style={{
							objectFit: 'contain',
						}}
						src={office}
						alt={'office'}
					/>

					<SimpleGrid
						// gap={10}
						// justify={'space-between'}
						// alignItems={'center'}
						// direction={{base: 'column', md: 'row'}}
						templateColumns={{ sm: '1fr', md: '1fr 1fr' }}
						spacing={6}
						placeItems={{ sm: 'initial', md: 'flex-start flex-end'}}
					>
						<Text fontSize={36} fontWeight={400}>
							We connect our customers with the best, and help them keep up-and stay open.
						</Text>

						<List spacing={3} fontWeight={400} fontSize={20}>
							<ListItem as={Flex} justifyContent={'space-between'} alignItems={'center'} cursor={'pointer'} pb={3} borderBottom={'1px solid #C4C4C4'}>
								We connect our customers with the best?
								<ListIcon as={BsArrowDownCircleFill} color='#0A2640' marginLeft={25} />
							</ListItem>
							<ListItem as={Flex} justifyContent={'space-between'} alignItems={'center'} cursor={'pointer'} pb={3} borderBottom={'1px solid #C4C4C4'}>
								Android research & development rockstar? 
								<ListIcon as={BsArrowDownCircleFill} color='#0A2640' marginLeft={25} />
							</ListItem>
						</List>
					</SimpleGrid>
				</VStack>
			</Box>

			<Box px={{base: 10, md: 20}} my={[40,55]}>
				<NewsRoom data={newsList}>
					<Text textAlign={'center'} fontSize={18} color={'#777777'}>Our Blog</Text>

					<chakra.h3 mt={[10,5]} as={Container} textAlign={['start' , 'center']} fontWeight={400} fontSize={40}>Value proposition accelerator product management venture</chakra.h3>

				</NewsRoom>
			</Box>

			<Box px={{base: 10, md: 20}}>
				<ContactCard />
			</Box>

		</Box>
  )
}

export {HomeScreen}