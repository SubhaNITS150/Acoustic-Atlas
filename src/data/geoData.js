const cityCenters = {
  delhi: [77.1025, 28.7041],
  mumbai: [72.8777, 19.076],
  kolkata: [88.3639, 22.5726],
  bangalore: [77.5946, 12.9716],
  pune: [72.8258, 18.9750],
};

// Hill stations / quiet areas
const hillStations = [
  [79.2133, 11.3536], // Kodaikanal
  [78.0600, 9.9312],  // Munnar
  [88.4731, 27.1712], // Darjeeling
  [77.5800, 30.3200], // Nainital
  [75.5000, 32.2700], // Shimla
  [73.8029, 18.5074], // Lonavala
  [76.9425, 8.5210],  // Wayanad
];

// Function to generate clustered points
function generateCluster(center, count, color, value) {
  const points = [];
  for (let i = 0; i < count; i++) {
    const offsetLng = (Math.random() - 0.5) * 0.2; // ±0.1 degrees
    const offsetLat = (Math.random() - 0.5) * 0.2; // ±0.1 degrees
    points.push({
      type: "Feature",
      properties: { color, value },
      geometry: {
        type: "Point",
        coordinates: [center[0] + offsetLng, center[1] + offsetLat],
      },
    });
  }
  return points;
}

// Generate all points
const features = [
  ...generateCluster(cityCenters.delhi, 30, "red", 5),
  ...generateCluster(cityCenters.mumbai, 30, "red", 5),
  ...generateCluster(cityCenters.kolkata, 30, "red", 5),
  ...generateCluster(cityCenters.bangalore, 30, "red", 5),
  ...generateCluster(cityCenters.pune, 30, "red", 5),

  // Optional: some medium traffic towns (yellow)
  ...generateCluster([80.2707, 13.0827], 15, "yellow", 3), // Chennai
  ...generateCluster([85.8245, 20.2961], 10, "yellow", 3), // Bhubaneswar
  ...generateCluster([81.8463, 25.4358], 10, "yellow", 3), // Varanasi
  ...generateCluster([79.0882, 21.1458], 10, "yellow", 3), // Nagpur

  // Hill stations / quiet areas (green)
  ...hillStations.flatMap((station) => generateCluster(station, 5, "green", 1)),
];

export const geojsonData = {
  type: "FeatureCollection",
  features,
};