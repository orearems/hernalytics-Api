import { MapContainer, TileLayer, Polygon, ZoomControl } from "react-leaflet";
import { nigeriaData } from "../Assets/Nigeria";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const MapLayout = () => {
  const [mapData, setMapData] = useState([]);
  const [result, setResult] = useState([]);
  const newData = mapData.map((el) => {
    return {
      id: el.id,
      name: el.name,
      party: el.political_party_name,
      votes: el.candidate_votes,
    };
  });

  useEffect(() => {
    const getMapData = async () => {
      try {
        const response = await fetch(
          "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=map"
        );
        const data = await response.json();
        if (!data) throw new Error("no data found");
        setMapData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getMapData();
  }, []);
  function getColor(d) {
    return d === "Abia"
      ? "green"
      : d === "Anambra"
      ? "green"
      : d === "Adamawa"
      ? "red"
      : d === "Lagos"
      ? "green"
      : d === "Cross River"
      ? "green"
      : d === "Rivers"
      ? "green"
      : "gray";
  }

  return (
    <MapContainer
      center={[9.082, 8.6753]}
      zoom={6}
      zoomControl={false}
      scrollWheelZoom={false}
      style={{ height: "700px", backgroundColor: "#111421", borderRadius: '20px'}}
    >
      <ZoomControl zoom={6} position="topright" />
      <TileLayer url="" />
      {nigeriaData.features.map((state) => {
        const coordinates = state.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ]);

        return (
          <Polygon
            key={state.properties.admin1RefN}
            pathOptions={{
              fillColor: getColor(state.properties.admin1Name),
              fillOpacity: ".9",
              weight: 1,
              color: "#111421",
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: ".7",
                });
                const stateDetails = newData.filter(
                  (el) => el.name === state.properties.admin1Name.toUpperCase()
                );
                setResult(stateDetails);
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: ".9",
                });
              },
              click: (e) => {},
            }}
          />
        );
      })}
      <Box
        position="absolute"
        borderRadius="10px"
        bottom="20px"
        left="20px"
        w="340px"
        h="120px"
        bg="#393C4A"
        pt="10px"
        pl="10px"
      >
        <Text fontSize="lg" textAlign="center" color="white">
          Results
        </Text>
        <Text fontSize="lg" color="white">
          State: {result.length > 0 ? result[0].name : ""}
        </Text>
        <Text fontSize="lg" color="white">
          Number of votes: {result.length > 0 ? result[0].votes : ""}
        </Text>
        <Text fontSize="lg" color="white">
          Leading party: {result.length > 0 ? result[0].party : ""}
        </Text>
      </Box>
      <Grid templateColumns='1fr' gap={6} w='100px' position='absolute' right='50px' bottom='150px'>
        <Flex gap={2}>
          <Box w='30px' h='20px' bg='blue.500' />
          <Text fontWeight='thin' color='gray.200' fontSize='sm'>APC</Text>
        </Flex>
        <Flex gap={2}>
          <Box w='30px' h='20px' bg='green' />
          <Text fontWeight='thin' color='gray.200' fontSize='sm'>LP</Text>
        </Flex>
        <Flex gap={2}>
          <Box w='30px' h='20px' bg='red' />
          <Text fontWeight='thin' color='gray.200' fontSize='sm'>PDP</Text>
        </Flex>
      </Grid>
    </MapContainer>
  );
};

export default MapLayout;
