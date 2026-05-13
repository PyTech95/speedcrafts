import React, { useEffect, useRef, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

const COUNTRIES_GEOJSON_URL =
  'https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson';

// Highlight India + all African countries
const isHighlighted = (props) => {
  if (!props) return false;
  const name = (props.NAME || props.name || '').toLowerCase();
  const continent = (props.CONTINENT || props.continent || '').toLowerCase();
  if (continent === 'africa') return true;
  if (name === 'india') return true;
  return false;
};

const AnimatedGlobe = ({ size = 420 }) => {
  const containerRef = useRef(null);
  const globeRef = useRef(null);
  const [countries, setCountries] = useState({ features: [] });
  const [width, setWidth] = useState(size);

  // Fetch country polygons (cached client-side)
  useEffect(() => {
    let isMounted = true;
    fetch(COUNTRIES_GEOJSON_URL)
      .then((r) => r.json())
      .then((data) => {
        if (isMounted) setCountries(data);
      })
      .catch(() => {
        /* fail silently */
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Responsive sizing
  useEffect(() => {
    if (!containerRef.current) return;
    const update = () => {
      const w = containerRef.current?.clientWidth || size;
      const target = Math.min(w, size);
      setWidth(target);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [size]);

  // Auto-rotate the globe like a real planet
  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    // Initial camera distance
    g.pointOfView({ lat: 18, lng: 30, altitude: 2.2 }, 0);
    const controls = g.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.6;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.minPolarAngle = Math.PI / 3;
      controls.maxPolarAngle = (Math.PI * 2) / 3;
    }
  }, [countries]);

  const polygonCapColor = useMemo(
    () => (feat) =>
      isHighlighted(feat.properties)
        ? 'rgba(245, 178, 24, 0.95)' // Speedcrafts gold
        : 'rgba(255, 255, 255, 0.04)',
    []
  );

  const polygonSideColor = useMemo(
    () => (feat) =>
      isHighlighted(feat.properties)
        ? 'rgba(217, 154, 14, 0.9)'
        : 'rgba(255, 255, 255, 0.05)',
    []
  );

  const polygonStrokeColor = useMemo(
    () => (feat) =>
      isHighlighted(feat.properties) ? '#f5b218' : 'rgba(255,255,255,0.18)',
    []
  );

  const polygonAltitude = useMemo(
    () => (feat) => (isHighlighted(feat.properties) ? 0.018 : 0.005),
    []
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ minHeight: size }}
    >
      <Globe
        ref={globeRef}
        width={width}
        height={width}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere
        atmosphereColor="#f5b218"
        atmosphereAltitude={0.18}
        globeMaterial={
          new THREE.MeshPhongMaterial({
            color: new THREE.Color('#1f4a3a'),
            emissive: new THREE.Color('#0a1a14'),
            emissiveIntensity: 0.4,
            shininess: 6
          })
        }
        polygonsData={countries.features}
        polygonCapColor={polygonCapColor}
        polygonSideColor={polygonSideColor}
        polygonStrokeColor={polygonStrokeColor}
        polygonAltitude={polygonAltitude}
        polygonsTransitionDuration={400}
      />
    </div>
  );
};

export default AnimatedGlobe;
