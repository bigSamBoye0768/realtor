import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileFooterBar } from "@/components/mobile-footer-bar";

export const metadata: Metadata = {
	title: "Account settings",
	description: "Login into your account",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="min-h-[100vh] h-full w-full">
			<div className="w-full border-b shadow fixed hidden md:block top-0 bg-white z-40">
				<Header showSearch={false} />
			</div>

			<section className="w-full h-full min-h-[100vh] max-w-screen-md mx-auto px-4 md:pt-[70px] pb-[70px]">
				<div className=" py-7">{children}</div>
			</section>

			<MobileFooterBar />
			<div className="hidden md:block w-full">
				<Footer />
			</div>
		</div>
	);
}

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Signup-smart",
//     description: "Login into your account",
// };

// export default function AuthenticationLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
//     return (
//         <div className="h-[100svh] w-full relative">
//             <div className="relative h-full flex">
//                 <div className="w-full h-full fixed z-10 inset-0 auth-bg"></div>
//                 <div className="z-50 w-full overflow-auto h-full">
//                     <div className='w-full h-full md:flex md:items-center md:px-4 md:justify-center'>
//                         <div className='bg-white md:max-w-lg p-4 md:p-10 h-full md:h-fit md:rounded-lg w-full mx-auto'>
//                             {children}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
