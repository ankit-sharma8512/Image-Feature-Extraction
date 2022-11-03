import React from 'react'
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"

function TableBuilder({ headers, data }) {
  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            {headers?.map(head => <Th key={head}>{head}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((row, idx) => (
            <Tr key={JSON.stringify(row) + idx}>
              {headers?.map((head, idx2) => <Td key={JSON.stringify(row) + row[head] + idx2}>{row[head]}</Td>)}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TableBuilder