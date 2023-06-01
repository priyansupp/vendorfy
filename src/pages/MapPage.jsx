import MapSection from '../components/Map/map' // import the map here
import locations from '../assets/fake-data/locations';

const MapPage = () => {
    return (
        <MapSection locations={locations} zoomLevel={15} />
    );
}

export default MapPage;
