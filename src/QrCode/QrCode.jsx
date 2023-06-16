import { Text, Box, SimpleGrid, Center, Img } from "@chakra-ui/react";
import React from "react";
import qrCodeImage from '../assets/image-qr-code.png'
export const QrCode = () => {
    return (
        <>

            <Center >

                <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} >
                    <Box
                        p="8"
                        w={280}
                        textAlign="center"
                        rounded="2xl"
                        boxShadow="dark-lg"
                        backgroundColor={'white'}
                    >
                        <Img
                            mb={3}
                            rounded="xl"
                            src={qrCodeImage} w={560}></Img>

                        <Text as='b'>Improve your front-end skills by building projects</Text>
                        <Text fontSize={"xs"} color={'gray.500'} mt={4}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                        </Text>

                        <Box>

                        </Box>
                    </Box>

                </SimpleGrid>
            </Center>

        </>

    )

}