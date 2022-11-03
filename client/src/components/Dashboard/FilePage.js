import React, { useState } from 'react'
import { VStack, Box, Spinner, Text, HStack, IconButton } from "@chakra-ui/react"
import TableBuilder from '../Elements/TableBuilder'
import { useParams } from "react-router-dom"
import useFile from "../../fetchers/file/useFile"
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi"

function FilePage() {
  const { filename } = useParams()
  const [page, setPage] = useState(1)
  const { file, isError, isLoading } = useFile(filename, page)

  if (isLoading)
    return <Spinner />
  if (isError)
    return <Text>Failed to load data</Text>

  return (
    <VStack h="full" w="full" spacing="0">
      <Box flex="9" w="full" h="full" overflowY="scroll">
        <TableBuilder headers={Object.keys(file?.results[0])} data={file?.results} />
      </Box>
      <Box flex="1" w="full">
        <HStack w="full" justifyContent="center" h="full" alignItems="center">
          <HStack spacing="4" pt="4">
            <IconButton isDisabled={page === 1} icon={<FiChevronsLeft />} size="sm" bg="none" onClick={() => setPage(1)} />
            <IconButton isDisabled={page === 1} icon={<FiChevronLeft />} size="sm" bg="none" onClick={() => setPage(state => state - 1)} />
            <Text>{page}</Text>
            <IconButton isDisabled={page === file?.totalPages} icon={<FiChevronRight />} size="sm" bg="none" onClick={() => setPage(state => state + 1)} />
            <IconButton isDisabled={page === file?.totalPages} icon={<FiChevronsRight />} size="sm" bg="none" onClick={() => setPage(file?.totalPages)} />
          </HStack>
        </HStack>
      </Box>
    </VStack>
  )
}

export default FilePage