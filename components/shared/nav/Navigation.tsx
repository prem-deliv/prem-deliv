import Link from "next/link";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Premium Delivery</Box>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/service-fees">Service Fees</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={2}>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/service-fees">Service Fees</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
