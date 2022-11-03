import React, { useEffect, useRef } from "react";
import { VStack, Icon, Text, HStack, Wrap, Button, useToast, Spinner, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"
import { GrDocumentCsv } from "react-icons/gr";
import SearchBar from "../Elements/SearchBar";
import useFiles from "../../fetchers/file/useFiles";
import UploadCSV from "../Elements/UploadCSV";
import routes from "../../routes"

function Home() {
  const toast = useToast()
  const uploadRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { files, isError, isLoading, refresh } = useFiles()

  useEffect(() => {
    if (isError)
      toast({ title: "Failed to get files", status: "error", position: "top-right" })
    //eslint-disable-next-line
  }, [isError])

  return (
    <>
      <UploadCSV isOpen={isOpen} onClose={onClose} refresh={refresh} />
      <HStack justifyContent="space-between" mb="6">
        <Text pl="5">{files?.length || 0} Files</Text>
        <HStack spacing="4">
          <SearchBar />
          <input ref={uploadRef} hidden type="file" />
          <Button colorScheme="blue" fontSize="sm" onClick={onOpen}>Upload File</Button>
        </HStack>
      </HStack>
      <HStack alignItems="flex-start">
        {isLoading && !isError && <HStack pt="40" w="full" justifyContent="center"><Spinner /></HStack>}
        {!isLoading && !files?.length && <Text w="full" textAlign="center" pt="40">No Files Found</Text>}
        {!isLoading && files?.length && <Wrap w="full" spacing="6">
          {files?.map(file => <Card key={file.filename} file={file} />)}
        </Wrap>}
      </HStack>
    </>
  );
}

function Card({ file }) {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(routes.DASHBOARD + "/" + file.filename)
  }

  return (
    <VStack
      p="2"
      borderRadius="4"
      _hover={{ bg: "gray.100" }}
      justifyContent="center"
      cursor="pointer"
      onClick={onClick}
    >
      <Icon as={GrDocumentCsv} fontSize="60px" opacity="0.85" />
      <Text fontSize="xs" maxWidth="80px" noOfLines={1}>{file.filename}</Text>
    </VStack>
  );
}

export default Home;
