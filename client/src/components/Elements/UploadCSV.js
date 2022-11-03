import {
  Button, HStack, VStack, Text, useToast, Box,
  Modal, ModalHeader, ModalBody, ModalOverlay, ModalContent, ModalCloseButton, Link
} from '@chakra-ui/react'
import React, { useState, useRef } from 'react'
import Fileservice from '../../services/file'

const ACCEPT = ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"

function UploadCSV({ isOpen, onClose, refresh }) {
  const toast = useToast()
  const inputRef = useRef()
  const [currentFile, setCurrentFile] = useState(null)

  const uploadFile = async () => {
    try {
      if (!currentFile)
        throw new Error("No File Selected")
      const file = new File([currentFile], currentFile?.name);

      const data = new FormData();
      data.append('file', file);
      // data.append('filename', file2.name);

      await Fileservice.uploadFile(data)
      toast({ title: "File Uploaded", status: "success", position: "top-right" })
      refresh()
      handleClose()
    } catch (error) {
      console.log(error)
      toast({ title: "File Upload Failed", status: "error", position: "top-right" })
      handleClose()
    }
  }

  const handleClose = () => {
    setCurrentFile(null)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload a new File</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <input ref={inputRef} accept={ACCEPT} type="file" hidden onChange={(e) => setCurrentFile(e.target.files[0])} />
          <Box h="40vh">
            <HStack w="full" justifyContent="center" mt="12">
              {!currentFile ? <Button bg="gray.300" onClick={() => inputRef.current.click()}>Select CSV</Button> :
                <Button bg="gray.300" onClick={uploadFile}>Upload CSV</Button>}
            </HStack>
            <VStack mt="4">
              <Link size="sm" onClick={() => setCurrentFile(null)}>Select Another File</Link>
              <Text fontWeight="700">Currently Selected File- </Text>
              <Text>{currentFile?.name || "None"}</Text>
            </VStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default UploadCSV