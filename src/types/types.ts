export interface AddressProp {
	county: string;
	line1: string;
	name: string;
	postcode: string;
	town: string;
}

export interface DeliveryOption {
	description: string;
	name: string;
	price: string;
}

export interface Location {
	latitude: number;
	longitude: number;
}

export interface OpeningTimes {
	Mon: string;
	Tues: string;
	Wed: string;
	Thurs: string;
	Fri: string;
	Sat: string;
	Sun: string;
}

export interface DataProps {
	address: AddressProp;
	delivery_options: DeliveryOption[];
	location: Location;
	name: string;
	opening_times: OpeningTimes;
}