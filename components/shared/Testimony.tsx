import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

interface TestimonyProps {
    message: string
    Icon: JSX.Element
    name: string
    role: string
    height?: any
    profileOffset?: string | number
}
const Testimony = ({
    message,
    Icon,
    name,
    role,
    height= 'auto',
    profileOffset,
}: TestimonyProps) => {
  return (
    <Box
        height={height}
        // minHeight={322}
        borderRadius={12}
        backgroundColor={'#fff'}
        boxShadow={'0px 12px 32px rgba(0, 0, 0, 0.12)'}
        p={5}
    >
        <Text my={5} color={'#000'} fontSize={24} fontWeight={400}>{message}</Text>

        <HStack position={'relative'} top={{base: 'initial',md: profileOffset}}>
            {Icon}
            <VStack align={'flex-start'} mb={5}>
                <Text color={'#0A2640'} fontSize={16} fontWeight={700}>{name}</Text>
                <Text color={'#0A2640'} fontSize={16} fontWeight={400}>{role}</Text>
            </VStack>
        </HStack>
    </Box>
  )
}

export {Testimony}