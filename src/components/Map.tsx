import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Location } from "../types/types";

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
		googleMapsApiKey: process.env.GOOGLEMAPS_API || "",
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
		width: "100%",
		height: "270px",
		marginTop: "40px",
		marginBottom: "16px",
	};

	return isLoaded ? (
		<div className="map w-full md:max-d-[450px]">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={position}
				zoom={10}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				<Marker position={position} />
			</GoogleMap>
		</div>
	) : (
		<></>
	);
};

export default MapComponent;
