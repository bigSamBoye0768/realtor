// import { Footer } from "@/components/footer";
// import { Header } from "@/components/header";
// import { MobileFooterBar } from "@/components/mobile-footer-bar";
// import { api } from "@/lib/axios-instance";
// import { useQuery } from "@tanstack/react-query";
// import React from "react";

// interface Wishlist {
// 	id: string;
// 	name: string;
// 	createdAt: string;
// 	items: {
// 		listing: { id: string; imageUrl: string; title: string };
// 	}[];
// }

// interface RecentlyViewed {
// 	id: string;
// 	viewedAt: string;
// 	listing: {
// 		id: string;
// 		imageUrl: string;
// 		title: string;
// 	};
// }

// const Page = () => {
// 	const { data: wishlists, isLoading: wishlistLoading } = useQuery<Wishlist[]>({
// 		queryKey: ["wishlists"],
// 		queryFn: async () => {
// 			const res = await api.get("/wishlists");
// 			return res.data;
// 		},
// 		enabled: !!user,
// 	});

// 	const { data: recentlyViewed, isLoading: rvLoading } = useQuery<RecentlyViewed[]>({
// 		queryKey: ["recentlyViewed"],
// 		queryFn: async () => {
// 			const res = await api.get("/recently-viewed");
// 			return res.data;
// 		},
// 		enabled: !!user,
// 	});

// 	const hasWishlists = (wishlists?.length ?? 0) > 0;
// 	const hasRecentlyViewed = (recentlyViewed?.length ?? 0) > 0;

// 	return (
// 		<div className="min-h-[100vh] w-full">
// 			<div className="w-full border-b shadow fixed hidden md:block top-0 bg-white z-40">
// 				<Header showSearch={false} />
// 			</div>

// 			<section className="w-full h-full min-h-[100vh] max-w-screen-xl mx-auto px-4 md:pt-[70px] pb-[70px]">
// 				<div className=" py-7">
// 					<div>
// 						<h1 className="text-2xl font-bold mb-4 md:mt-8">Wishlists</h1>

// 						{!userLoading && !user && (
// 							<div className="flex flex-col items-center justify-center py-10 text-center">
// 								<p className="text-lg text-muted-foreground mb-4">Log in to view your wishlists and recently viewed listings.</p>
// 								<Button asChild>
// 									<Link href="/sign-in">Log in</Link>
// 								</Button>
// 							</div>
// 						)}

// {hasWishlists && (
// 						<div className="mt-8">
// 							<div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 md:gap-6">
// 							{hasRecentlyViewed && (
// 								<div className="mark">
// 									<div className="w-full grid grid-cols-2 grid-rows-2 aspect-square rounded-3xl overflow-hidden gap-1.5">
// 										{[...Array(4)].map((_, index) => (
// 											<div key={index} className="bg-primary/10"></div>
// 										))}
// 									</div>

// 									<div className="mt-2">
// 										<h3 className="font-semibold text-sm">Recently viewed</h3>
// 										<div className="text-black/60 font-semibold">2 weeks ago</div>
// 									</div>
// 								</div>
// 								)}

// 								{[...Array(2)].map((_, index) => (
// 									<div key={index} className="">
// 										<div className="w-full grid grid-cols-2 bg-primary/10 grid-rows-2 aspect-square rounded-3xl overflow-hidden gap-1.5"></div>

// 										<div className="mt-2">
// 											<h3 className="font-semibold text-sm">Wishlist name {index + 1}</h3>
// 											<div className="text-black/60 font-semibold">2 weeks ago</div>
// 										</div>
// 									</div>
// 								))}
// 							</div>
// 						</div>
// 						)}

// 					</div>
// 				</div>
// 			</section>

// 			<MobileFooterBar />
// 			<div className="hidden md:block w-full">
// 				<Footer maxWidth="max-w-[1180px]" />
// 			</div>
// 		</div>
// 	);
// };

// export default Page;

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileFooterBar } from "@/components/mobile-footer-bar";
import { WishlistClient, WishlistClientSkeleton } from "./_components/wishlist-client";
import { getCurrentUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

const Page = async () => {
	const user = await getCurrentUser();

	return (
		<div className="min-h-[100vh] w-full">
			{/* Header */}
			<div className="w-full border-b shadow fixed hidden md:block top-0 bg-white z-40">
				<Header showSearch={false} />
			</div>

			<section className="w-full h-full min-h-[100vh] max-w-screen-xl mx-auto px-4 md:pt-[70px] pb-[70px]">
				<div className="py-7">
					<h1 className="text-2xl font-bold mb-4 md:mt-8">Wishlists</h1>
					{!user ? (
						<div className="flex flex-col items-center justify-center py-10 text-center">
							<p className="text-lg text-muted-foreground mb-4">Log in to view your wishlists and recently viewed listings.</p>
							<Button asChild>
								<Link href="/sign-in">Log in</Link>
							</Button>
						</div>
					) : (
						<Suspense fallback={<WishlistClientSkeleton />}>
							<WishlistClient user={!!user} />
						</Suspense>
					)}
				</div>
			</section>

			<MobileFooterBar />
			<div className="hidden md:block w-full">
				<Footer maxWidth="max-w-[1180px]" />
			</div>
		</div>
	);
};

export default Page;
