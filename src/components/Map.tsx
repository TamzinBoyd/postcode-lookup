import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Location } from "./CollectTab";

interface Props {
	location: Location;
}
const MapComponent: FunctionComponent<Props> = ({ location }) => {
	const [position, setPosition] = useState({
		lat: location.latitude,
		lng: location.longitude,
	});
	const [map, setMap] = useState(null);

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyCpL8cMBKI07YJIPbNrcT51ORAdyvF0X2s",
	});

	const onLoad = useCallback(
		(map: any) => {
			const bounds = new window.google.maps.LatLngBounds(position);
			map.fitBounds(bounds);
			setMap(map);
		},
		[position],
	);

	const onUnmount = useCallback((map: any) => {
		setMap(null);
	}, []);

	useEffect(() => {
		setPosition({ lat: location.latitude, lng: location.longitude });
	}, [location.latitude, location.longitude]);

	const containerStyle = {
		width: "500px",
		height: "270px",
        marginTop: "40px",
        marginBottom: "16px",
	};

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={position}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			<Marker position={position} />
		</GoogleMap>
	) : (
		<></>
	);
};

export default MapComponent;
