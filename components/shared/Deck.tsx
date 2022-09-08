import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'

interface DeckProps {
    color: string
    icon: IconType
    bg: string
    text: string
}
const Deck = ({
    color,
    icon,
    bg,
    text,
}: DeckProps) => {
  return (
    <Flex
        width={'100%'}
        color={color}
        boxShadow={'0px 4px 32px rgba(0, 0, 0, 0.08)'}
        background={bg}
        p={5}
        borderRadius={4}>
        <Icon
            w={5}
            h={5}
            as={icon}
            color={color}
            mr={6}
        />
        <Text fontSize={16} fontWeight={600}>{text}</Text>
    </Flex>
  )
}

export {Deck}