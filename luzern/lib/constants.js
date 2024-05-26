import { infos } from "@/components/MapWithCircles";
import dayjs from "dayjs";

function adjustRadii(circles) {
  const radii = circles.map((circle) => circle.center.radius);
  const minRadius = Math.min(...radii);
  const maxRadius = Math.max(...radii);

  // If all radii are the same, set all to 150 (midpoint of 50 and 250)
  if (minRadius === maxRadius) {
    return circles.map((circle) => ({
      ...circle,
      center: {
        ...circle.center,
        radius: 150,
      },
    }));
  }

  // Scale radii to be between 50 and 250
  return circles.map((circle) => ({
    ...circle,
    center: {
      ...circle.center,
      radius:
        ((circle.center.radius - minRadius) / (maxRadius - minRadius)) *
          (250 - 50) +
        50,
    },
  }));
}

function groupByDayAndHour(arr) {
  const grouped = arr.reduce((acc, item) => {
    const date = dayjs(item.created);
    const dayHour = date.toISOString().slice(0, 16); // 'YYYY-MM-DDTHH:mm'

    if (!acc[dayHour]) {
      acc[dayHour] = [];
    }
    acc[dayHour].push(item);

    return acc;
  }, {});

  // Convert the grouped object to an array of arrays
  return Object.values(grouped);
}
// Function to calculate the average Anzahl for each Platz
function calculateAverages(groups) {
  const platzMap = {};

  groups.forEach((group) => {
    group.forEach((item) => {
      if (!platzMap[item.Platz]) {
        platzMap[item.Platz] = [];
      }
      platzMap[item.Platz].push(item.Anzahl);
    });
  });

  const averages = Object.entries(platzMap).map(([Platz, anzahlen]) => {
    const totalAnzahl = anzahlen.reduce((sum, anzahl) => sum + anzahl, 0);
    return { Platz, average: totalAnzahl / anzahlen.length };
  });

  return averages;
}

function extractData(arr) {
  const groupedDataWithAverage = groupByDayAndHour(arr);

  // Extract the first 5 groups and calculate their average Anzahl
  const firstFiveGroups = groupedDataWithAverage.slice(0, 5);
  // Calculate the overall average Anzahl for each Platz across the first 5 groups
  const overallAverages = calculateAverages(firstFiveGroups);
  return { firstFiveGroups, overallAverages };
}

function combineArrays(group, overallAverages) {
  // Create a map from the second array
  const averageMap = overallAverages.reduce((acc, item) => {
    acc[item.Platz] = item.average;
    return acc;
  }, {});

  // Merge the objects from the first array with the corresponding average from the map
  return group.map((item) => ({
    ...item,
    average: averageMap[item.Platz] || null, // Add average if exists, otherwise null
  }));
}

export function getData(arr) {
  const { firstFiveGroups, overallAverages } = extractData(arr);
  const data = combineArrays(firstFiveGroups[0], overallAverages);
  const createInfosModal = data
    .map((radiusInfo) => {
      const matchingItem = infos.find(
        (info) =>
          (info.title.includes(radiusInfo.Platz) ||
            radiusInfo.Platz.includes(info.title)) &&
          !radiusInfo.Platz.includes("Radar")
      );
      if (matchingItem) {
        return {
          image: matchingItem.image,
          title: matchingItem.title,
          center: {
            x: matchingItem.center.x,
            y: matchingItem.center.y,
            radius: radiusInfo.Anzahl,
          },
          average: radiusInfo.average,
          description: matchingItem.description,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  const adjustRadiis = adjustRadii(createInfosModal);
  return { infosArray: adjustRadiis };
}
