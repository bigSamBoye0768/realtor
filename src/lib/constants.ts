import { Icons } from "@/components/icons/structure.icons";
import { JSX } from "react";

export enum ProperyTypeEnum {
	House = "House",
	Hotel = "Hotel",
	Guesthouse = "Guesthouse",
	Apartment = "Apartment",
	Beachhouse = "Beachhouse",
	Villa = "Villa",
}

export const ProperyTypeIcons: Record<ProperyTypeEnum, JSX.Element> = {
	House: Icons.house(),
	Hotel: Icons.house(),
	Guesthouse: Icons.house(),
	Apartment: Icons.apartment(),
	Beachhouse: Icons.house(),
	Villa: Icons.house(),
};

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

// export const AmenityIcons: Record<AmenityEnum, LucideIcon> = {
// 	WasherDryer: Waves,
// 	AirConditioning: Thermometer,
// 	Dishwasher: Waves,
// 	HighSpeedInternet: Wifi,
// 	HardwoodFloors: Home,
// 	WalkInClosets: Maximize,
// 	Microwave: Tv,
// 	Refrigerator: Thermometer,
// 	Pool: Waves,
// 	Gym: Dumbbell,
// 	Parking: Car,
// 	PetsAllowed: PawPrint,
// 	WiFi: Wifi,
// };
