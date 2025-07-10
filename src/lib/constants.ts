import { Icons as StructureIcons } from "@/components/icons/structure.icons";
import { JSX } from "react";

export enum ProperyTypeEnum {
	House = "House",
	Hotel = "Hotel",
	GuestHouse = "GuestHouse",
	Apartment = "Apartment",
	EarthHome = "EarthHome",
	Dome = "Dome",
	BedAndBreakfast = "BedAndBreakfast",
}

export const ProperyTypeIcons: Record<ProperyTypeEnum, JSX.Element> = {
	House: StructureIcons.house(),
	Hotel: StructureIcons.hotel(),
	GuestHouse: StructureIcons.guesthouse(),
	Apartment: StructureIcons.apartment(),
	EarthHome: StructureIcons.earthHome(),
	Dome: StructureIcons.dome(),
	BedAndBreakfast: StructureIcons.bedAndBreakfast(),
};

export type PropertyItem = {
	value: ProperyTypeEnum;
	label: string;
	icon: JSX.Element;
};

export const properties: PropertyItem[] = [
	{ value: ProperyTypeEnum.House, label: "House", icon: StructureIcons.house() },
	{ value: ProperyTypeEnum.Apartment, label: "Apartment", icon: StructureIcons.apartment() },
	{ value: ProperyTypeEnum.GuestHouse, label: "Guesthouse", icon: StructureIcons.guesthouse() },
	{ value: ProperyTypeEnum.BedAndBreakfast, label: "Bed & breakfast", icon: StructureIcons.bedAndBreakfast() },
	{ value: ProperyTypeEnum.Hotel, label: "Hotel", icon: StructureIcons.hotel() },
	{ value: ProperyTypeEnum.EarthHome, label: "Earth home", icon: StructureIcons.earthHome() },
	{ value: ProperyTypeEnum.Dome, label: "Dome", icon: StructureIcons.dome() },
];

export enum AmenityEnum {
	WasherDryer = "WasherDryer",
	AirConditioning = "AirConditioning",
	Dishwasher = "Dishwasher",
	HighSpeedInternet = "HighSpeedInternet",
	HardwoodFloors = "HardwoodFloors",
	WalkInClosets = "WalkInClosets",
	Microwave = "Microwave",
	Refrigerator = "Refrigerator",
	Pool = "Pool",
	Gym = "Gym",
	Parking = "Parking",
	PetsAllowed = "PetsAllowed",
	WiFi = "WiFi",
}

export enum Amenity {
	Wifi = "wifi",
	TV = "tv",
	Kitchen = "kitchen",
	Washer = "washer",
	FreeParkingOnPremises = "freeParkingOnPremises",
	PaidParkingOnPremises = "paidParkingOnPremises",
	AirConditioning = "airConditioning",
	DedicatedWorkspace = "dedicatedWorkspace",
	Pool = "pool",
	HotTub = "hotTub",
	OutdoorDiningArea = "outdoorDiningArea",
	FirePit = "firePit",
	PoolTable = "poolTable",
	IndoorFireplace = "indoorFireplace",
	Piano = "piano",
	ExerciseEquipment = "exerciseEquipment",
	LakeAccess = "lakeAccess",
	BeachAccess = "beachAccess",
	OutdoorShower = "outdoorShower",
	SmokeAlarm = "smokeAlarm",
	FirstAidKit = "firstAidKit",
	FireExtinguisher = "fireExtinguisher",
	CarbonMonoxideAlarm = "carbonMonoxideAlarm",
}

export type AmenityItem = {
	value: Amenity;
	label: string;
	icon: JSX.Element;
};

export enum OccupancyType {
	Me = "me",
	Roommates = "roommates",
	Family = "family",
	OtherGuests = "otherGuests",
}

export type OccupancyOption = {
	value: OccupancyType;
	label: string;
	icon: JSX.Element;
};

// export const occupancyOptions: OccupancyOption[] = [
// 	{ value: OccupancyType.Me, label: "Just me", icon: User },
// 	{ value: OccupancyType.Roommates, label: "Roommates", icon: Users },
// 	{ value: OccupancyType.Family, label: "My family", icon: Home },
// 	{ value: OccupancyType.OtherGuests, label: "Other guests", icon: Hotel },
// ];
