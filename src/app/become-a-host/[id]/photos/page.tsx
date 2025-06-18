import { Upload } from "./_components/upload";

const Page = () => {
	return (
		<div className="px-4 max-w-2xl mx-auto w-full min-h-svh py-20 h-full">
			<div className="w-full py-6">
				<div className="w-full pb-3 animate-list-stagger">
					<h1 className="font-semibold text-2xl md:text-3xl">Add some photos of your barn</h1>
					<p className="text-base font-medium text-black/70 ">You&apos;ll need 5 photos to get started. You can add more or make changes later.</p>
				</div>
				<div className="w-full mt-2">
					<Upload />
				</div>
				<div className=" animate-list-stagger delay-500">0/32</div>
			</div>
		</div>
	);
};

export default Page;
