import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const StateResult = () => {
  const [stateResult, setStateResult] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result"
        );
        const data = await response.json();
        if (!data) throw new Error("no data found!");
        setStateResult(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, []);

  const myKeys = Object.keys(stateResult);
  const arr = myKeys.map((key) => stateResult[key]);
  const array = arr.flat(2) || [];

  return (
    <TableContainer>
      <Table w="100%" size="sm">
        <Thead>
          <Tr>
            <Th borderColor="gray.600" w="20%" color="white">
              States
            </Th>
            <Th borderColor="gray.600" w="20%" color="white">
              APC
            </Th>
            <Th borderColor="gray.600" w="20%" color="white">
              LP
            </Th>
            <Th borderColor="gray.600" w="20%" color="white">
              PDP
            </Th>
            <Th borderColor="gray.600" w="20%" color="white">
              Leading
            </Th>
          </Tr>
        </Thead>
        {array.length > 0 && (
          <Tbody>
            <Tr>
              <Td borderColor="gray.600" color="white">
                {array[0].state_name}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[2].candidate_votes * 100) /
                    (array[2].candidate_votes +
                      array[0].candidate_votes +
                      array[1].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[0].candidate_votes * 100) /
                    (array[2].candidate_votes +
                      array[0].candidate_votes +
                      array[1].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[1].candidate_votes * 100) /
                    (array[2].candidate_votes +
                      array[0].candidate_votes +
                      array[1].candidate_votes)
                )} %`}
              </Td>
              <Td
                borderColor="gray.600"
                w="100%"
                h="100%"
                color="white"
                bg="green"
              >
                LP
              </Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.600" color="white">
                {array[3].state_name}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[5].candidate_votes * 100) /
                    (array[5].candidate_votes +
                      array[3].candidate_votes +
                      array[4].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[4].candidate_votes * 100) /
                    (array[5].candidate_votes +
                      array[4].candidate_votes +
                      array[3].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[3].candidate_votes * 100) /
                    (array[5].candidate_votes +
                      array[4].candidate_votes +
                      array[3].candidate_votes)
                )} %`}
              </Td>
              <Td
                borderColor="gray.600"
                w="100%"
                h="100%"
                color="white"
                bg="red"
              >
                PDP
              </Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.600" color="white">
                {array[6].state_name}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[6].candidate_votes * 100) /
                    (array[6].candidate_votes +
                      array[7].candidate_votes +
                      array[8].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[7].candidate_votes * 100) /
                    (array[6].candidate_votes +
                      array[7].candidate_votes +
                      array[8].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[8].candidate_votes * 100) /
                    (array[6].candidate_votes +
                      array[7].candidate_votes +
                      array[8].candidate_votes)
                )} %`}
              </Td>
              <Td
                borderColor="gray.600"
                w="100%"
                h="100%"
                color="white"
                bg="blue.300"
              >
                APC
              </Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.600" color="white">
                {array[9].state_name}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[11].candidate_votes * 100) /
                    (array[11].candidate_votes +
                      array[9].candidate_votes +
                      array[10].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[9].candidate_votes * 100) /
                    (array[11].candidate_votes +
                      array[9].candidate_votes +
                      array[10].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[10].candidate_votes * 100) /
                    (array[11].candidate_votes +
                      array[9].candidate_votes +
                      array[10].candidate_votes)
                )} %`}
              </Td>
              <Td
                borderColor="gray.600"
                w="100%"
                h="100%"
                color="white"
                bg="green"
              >
                LP
              </Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.600" color="white">
                {array[12].state_name}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[13].candidate_votes * 100) /
                    (array[13].candidate_votes +
                      array[12].candidate_votes +
                      array[14].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[12].candidate_votes * 100) /
                    (array[13].candidate_votes +
                      array[12].candidate_votes +
                      array[14].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[14].candidate_votes * 100) /
                    (array[13].candidate_votes +
                      array[12].candidate_votes +
                      array[14].candidate_votes)
                )} %`}
              </Td>
              <Td
                borderColor="gray.600"
                w="100%"
                h="100%"
                color="white"
                bg="green"
              >
                LP
              </Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.600" color="white">
                {array[15].state_name}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[17].candidate_votes * 100) /
                    (array[17].candidate_votes +
                      array[15].candidate_votes +
                      array[16].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[15].candidate_votes * 100) /
                    (array[17].candidate_votes +
                      array[15].candidate_votes +
                      array[16].candidate_votes)
                )} %`}
              </Td>
              <Td borderColor="gray.600" color="white">
                {`${Math.round(
                  (array[16].candidate_votes * 100) /
                    (array[17].candidate_votes +
                      array[15].candidate_votes +
                      array[16].candidate_votes)
                )} %`}
              </Td>
              <Td
                borderColor="gray.600"
                w="100%"
                h="100%"
                color="white"
                bg="green"
              >
                LP
              </Td>
            </Tr>
          </Tbody>
        )}
      </Table>
    </TableContainer>
  );
};

export default StateResult;
