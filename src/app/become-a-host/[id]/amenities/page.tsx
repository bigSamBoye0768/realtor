"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Amenity, AmenityItem } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/amenities.icons";
import StepLayout from "../../_components/stepLayout";
import { usePathname, useRouter } from "next/navigation";
import { useStepNavigation } from "@/hooks/use-step-navigation";

type AmenityGroup = {
	title?: string;
	items: AmenityItem[];
};

const amenityGroups: AmenityGroup[] = [
	{
		items: [
			{ value: Amenity.Wifi, label: "Wifi", icon: Icons.wifi() },
			{ value: Amenity.TV, label: "TV", icon: Icons.tv() },
			{ value: Amenity.Kitchen, label: "Kitchen", icon: Icons.kitchen() },
			{ value: Amenity.Washer, label: "Washer", icon: Icons.washer() },
			{ value: Amenity.FreeParkingOnPremises, label: "Free parking on premises", icon: Icons.freeParkingOnPremises() },
			{ value: Amenity.PaidParkingOnPremises, label: "Paid parking on premises", icon: Icons.paidParkingOnPremises() },
			{ value: Amenity.AirConditioning, label: "Air conditioning", icon: Icons.airConditioning() },
			{ value: Amenity.DedicatedWorkspace, label: "Dedicated workspace", icon: Icons.dedicatedWorkspace() },
		],
	},
	{
		title: "Do you have any standout amenities?",
		items: [
			{ value: Amenity.Pool, label: "Pool", icon: Icons.pool() },
			{ value: Amenity.HotTub, label: "Hot tub", icon: Icons.hotTub() },
			{ value: Amenity.OutdoorDiningArea, label: "Outdoor dining area", icon: Icons.outdoorDiningArea() },
			{ value: Amenity.FirePit, label: "Fire pit", icon: Icons.firePit() },
			{ value: Amenity.PoolTable, label: "Pool table", icon: Icons.poolTable() },
			{ value: Amenity.IndoorFireplace, label: "Indoor fireplace", icon: Icons.indoorFireplace() },
			{ value: Amenity.Piano, label: "Piano", icon: Icons.piano() },
			{ value: Amenity.ExerciseEquipment, label: "Exercise equipment", icon: Icons.exerciseEquipment() },
			{ value: Amenity.LakeAccess, label: "Lake access", icon: Icons.lakeAccess() },
			{ value: Amenity.BeachAccess, label: "Beach access", icon: Icons.beachAccess() },
			{ value: Amenity.OutdoorShower, label: "Outdoor shower", icon: Icons.outdoorShower() },
		],
	},
	{
		title: "Do you have any of these safety items?",
		items: [
			{ value: Amenity.SmokeAlarm, label: "Smoke alarm", icon: Icons.smokeAlarm() },
			{ value: Amenity.FirstAidKit, label: "First aid kit", icon: Icons.firstAidKit() },
			{ value: Amenity.FireExtinguisher, label: "Fire extinguisher", icon: Icons.fireExtinguisher() },
			{ value: Amenity.CarbonMonoxideAlarm, label: "Carbon monoxide alarm", icon: Icons.carbonMonoxideAlarm() },
		],
	},
];

const Page = () => {
	const pathname = usePathname();
	const [isLoading, setIsLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const navigations = useStepNavigation();
	const router = useRouter();

	const handleNext = async () => {
		setIsLoading(true);
		setIsDisabled(true);

		try {
			console.log("inside", isLoading);

			if (navigations.next) {
				router.push(`/become-a-host/${pathname.split("/")[2]}/${navigations.next}`);
			}
		} catch (err) {
			console.log(err);
		} finally {
			// optional: only reset loading if navigation failed
		}
	};

	const [selected, setSelected] = useState<Amenity[]>([]);

	console.log(selected);

	const toggleAmenity = (amenity: Amenity) => {
		setSelected((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]));
	};

	return (
		<StepLayout onNext={handleNext} isNextLoading={isLoading} isNextDisabled={isDisabled}>
			<div className="w-full min-h-svh py-20 h-full px-4">
				<div className="max-w-screen-sm w-full mx-auto pt-2">
					<h1 className="text-2xl md:text-3xl font-semibold py-4 animate-list-stagger">Tell guests what your place has to offer </h1>
					<div>
						{amenityGroups.map((group, index) => (
							<div key={index} className="mb-8 mt-3">
								{group.title && <h2 className="text-lg font-semibold mt-6 mb-4">{group.title}</h2>}
								<div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-3">
									{group.items.map((item, i) => {
										const isActive = selected.includes(item.value);
										return (
											<Button
												variant={"ghost"}
												key={i}
												className={cn(
													"w-full h-full cursor-pointer flex flex-col justify-between items-start gap-1 p-4 rounded-xl",
													isActive ? "bg-white box-shadow hover:bg-white" : "bg-[#F7F7F7] text-black/70"
												)}
												onClick={() => toggleAmenity(item.value)}
											>
												<div>{item.icon}</div>
												<div className="text-left font-[550] text-sm whitespace-normal">{item.label}</div>
											</Button>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;
