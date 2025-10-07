"use client";

import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { geojsonData } from "@/data/geoData";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function DynamicMap() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  // const geojsonData = {
  //   type: "FeatureCollection",
  //   features: [
  //     { type: "Feature", properties: { value: 1 }, geometry: { type: "Point", coordinates: [77.1025, 28.7041] } },
  //     { type: "Feature", properties: { value: 2 }, geometry: { type: "Point", coordinates: [88.3639, 22.5726] } },
  //     { type: "Feature", properties: { value: 3 }, geometry: { type: "Point", coordinates: [72.8777, 19.076] } },
  //   ]
  // };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [77.1025, 28.7041],
      zoom: 4
    });

    mapRef.current = map;

    // Function to add heatmap layer
    const addHeatmap = () => {
      if (!map.getSource("points")) {
        map.addSource("points", { type: "geojson", data: geojsonData });
        map.addLayer({
          id: "heatmap-layer",
          type: "heatmap",
          source: "points",
          paint: {
            "heatmap-weight": ["interpolate", ["linear"], ["get", "value"], 0, 0, 6, 1],
            "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, 15, 3],
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0, "rgba(33,102,172,0)",
              0.2, "rgb(103,169,207)",
              0.4, "rgb(209,229,240)",
              0.6, "rgb(253,219,199)",
              0.8, "rgb(239,138,98)",
              1, "rgb(178,24,43)"
            ],
            "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 15, 20],
            "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 7, 1, 15, 0]
          }
        });
      }
    };

    map.on("load", addHeatmap);

    // Track style switching
    let isLight = false;

    map.on("zoom", () => {
      const zoom = map.getZoom();

      if (zoom >= 10 && !isLight) {
        isLight = true;

        // Save current center and zoom
        const center = map.getCenter();
        const currentZoom = map.getZoom();

        // Switch style without resetting view
        map.setStyle("mapbox://styles/mapbox/light-v11");

        // Wait for style to load, then restore center/zoom and re-add heatmap
        map.once("styledata", () => {
          map.jumpTo({ center, zoom: currentZoom });
          addHeatmap();
        });
      } else if (zoom < 10 && isLight) {
        isLight = false;

        const center = map.getCenter();
        const currentZoom = map.getZoom();

        map.setStyle("mapbox://styles/mapbox/dark-v11");

        map.once("styledata", () => {
          map.jumpTo({ center, zoom: currentZoom });
          addHeatmap();
        });
      }
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
}
