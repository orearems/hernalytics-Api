import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const StatsBar = () => {
  const [candidates, setCandidates] = useState([]);

  let totalVotes = candidates
    .map((candidate) => candidate.candidates_vote)
    .reduce((cur, total) => cur + total, 0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president"
        );
        const data = await response.json();
        if (!data) throw new Error("no data found!");
        setCandidates(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, []);

  return (
    <Box as="section" px="100px">
      <Text color="white" mt="40px">
        PRESIDENT
      </Text>
      <Flex
        style={{
          width: "100%",
          height: "10px",
          background: "gray",
          marginTop: "30px",
          display: "flex",
        }}
      >
        {candidates.map((candidate) => {
          return (
            <Tooltip
              key={candidate.candidate_id}
              bg="white"
              w="230px"
              p="0"
              hasArrow
              label={
                <Card
                  bg="white"
                  w="230px"
                  h="60px"
                  mt="0"
                  borderRadius="none"
                  boxShadow="none"
                >
                  <CardBody px="0" pt="10px">
                    <Flex
                      mt="0"
                      justifyContent="space-around"
                      alignItems="center"
                    >
                      <Avatar
                        w="40px"
                        h="40px"
                        borderRadius="none"
                        name={candidate.full_name}
                      ></Avatar>
                      <Box ml="0">
                        <Text color="blue.500">
                          {candidate.full_name},{" "}
                          {candidate.political_party_name === "Labour Party"
                            ? "LP"
                            : candidate.political_party_name ===
                              "All Progressives Confress"
                            ? "APC"
                            : "PDP"}
                        </Text>
                        <Text fontWeight="normal" color="gray.800">
                          {`${candidate.candidates_vote} votes (${Math.round(
                            (candidate.candidates_vote / totalVotes) * 100
                          )}%)`}
                        </Text>
                      </Box>
                    </Flex>
                  </CardBody>
                </Card>
              }
            >
              <Box
                w={`${Math.round(
                  (candidate.candidates_vote / totalVotes) * 100
                )}%`}
                style={
                  candidate.full_name === "Peter Obi"
                    ? {
                        background: "green",
                        height: "100%",
                      }
                    : candidate.full_name === "Tinubu"
                    ? {
                        background: "lightblue",
                        height: "100%",
                      }
                    : {
                        background: "red",
                        height: "100%",
                      }
                }
              />
            </Tooltip>
          );
        })}
      </Flex>
    </Box>
  );
};

export default StatsBar;
