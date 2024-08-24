interface locationInterface {
    coords: coords;
    timestamp: number;
}

interface coords {
    altitude: number | null;
    altitudeAccuracy: number | null;
    latitude: number;
    accuracy: number | null;
    longitude: number;
    heading: number | null;
    speed: number | null;
}

export { locationInterface, coords };