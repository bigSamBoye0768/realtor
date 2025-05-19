"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
// import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Icons } from './icons';
import { cn } from '@/lib/utils';


const routes = [
    {
        title: "Home",
        url: `/`,
        icon: Icons.home({style:{width:"28", height:"28"}}),
        activeIcon: Icons.homeBlack({style:{width:"28", height:"28"}}),
    },
    {
        title: "Cart",
        url: `/cart`,
        icon: Icons.cart({style:{width:"34", height:"34"}}),
        activeIcon: Icons.cartBlack({style:{width:"34", height:"34"}}),
    },
    {
        title: "Categories",
        url: `/category`,
        icon: Icons.category({style:{width:"28", height:"28"}}),
        activeIcon: Icons.cartBlack({style:{width:"28", height:"28"}}),
    },
    {
        title: "Orders",
        url: `/orders`,
        icon: Icons.orders({style:{width:"28", height:"28"}}),
        activeIcon: Icons.ordersBlack({style:{width:"28", height:"28"}}),
    },
    {
        title: "Login",
        url: `/account-settings`,
        icon: Icons.user({style:{width:"28", height:"28"}}),
        activeIcon: Icons.userBlack({style:{width:"28", height:"28"}}),
    },
]

export const MobileFooterBar = () => {
    const pathname = usePathname()
    console.log(pathname);

    const matches = useIsMobile();
    const [isVisible, setIsVisible] = useState(true);


    let lastScrollY = 0;
    const handleScroll = () => {
        if (typeof window != 'undefined') {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
        }
        lastScrollY = window.scrollY;
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (!matches) return null

    return (
        <footer className={`w-full h-[60px] flex border-t fixed bottom-0 z-20 bg-white left-0 right-0 transition-all duration-250 ease-in-out ${isVisible ? "translate-y-[0%]" : "translate-y-[100%]"}`}>
            <div className='flex max-w-[500px] w-full mx-auto items-center flex-nowrap'>
                {routes.map((route, index) => (
                    <Link href={route.url} key={index} className={cn('flex border-t-2 border-transparent h-full flex-col w-[25%] items-center justify-between py-1', pathname === route.url && "border-black")}>
                        {pathname === route.url ? (
                            route.activeIcon
                        ) :
                            (
                                route.icon
                            )}
                        {/* <Image src={`${pathname === '/' ? "/home-black.svg" : "/home.svg"}`} alt='user svg' width={25} height={25} /> */}
                        <span className={cn('text-[11px] overflow-hidden text-ellipsis whitespace-nowrap', pathname === route.url && "font-bold")}>{route.title}</span>
                    </Link>
                ))}


                {/* <Link href="/cart" className='flex  h-full w-[25%] flex-col items-center justify-between py-1'>
                    <Image src={`${pathname === '/cart' ? "/cart-black.svg" : "/cart.svg"}`} alt='user svg' width={28} height={28} />
                    <span className='text-[11px] overflow-hidden text-ellipsis whitespace-nowrap'>Cart</span>
                </Link>
                <Link href="/orders" className='flex w-[25%]  h-full flex-col items-center justify- py-1'>
                    <Image src={`${pathname === '/orders' ? "/orders-black.svg" : "/orders.svg"}`} alt='user svg' width={25} height={25} />
                    <span className='text-[11px] overflow-hidden text-ellipsis whitespace-nowrap'>Orders</span>
                </Link>

                <Link href="/account-settings" className='w-[25%]  h-full flex flex-col items-center justify-between py-1'>
                    <Image src="/user.svg" alt='user svg' width={25} height={25} />
                    <span className='text-[11px] overflow-hidden text-ellipsis whitespace-nowrap'>Login</span>
                </Link> */}



            </div>
        </footer>
    )
}








































// "use client";

// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { useIsMobile } from '@/hooks/use-mobile';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';

// export const MobileFooterBar = () => {
//     const pathname = usePathname()
//     console.log(pathname);

//     const matches = useIsMobile();
//     const [isVisible, setIsVisible] = useState(true);


//     let lastScrollY = 0;
//     const handleScroll = () => {
//         if (typeof window != 'undefined') {
//             if (window.scrollY > lastScrollY) {
//                 setIsVisible(false)
//             } else {
//                 setIsVisible(true)
//             }
//         }
//         lastScrollY = window.scrollY;
//     };


//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll)

//         return () => window.removeEventListener("scroll", handleScroll)
//     }, [])

//     if (!matches) return null

//     return (
//         <footer className={`w-full h-[60px] flex border-t-2 fixed bottom-0 shadow z-20 bg-white left-0 right-0 transition-all duration-250 ease-in-out ${isVisible ? "translate-y-[0%]" : "translate-y-[100%]"}`}>
//             <div className='flex max-w-[500px] py-[5px] w-full mx-auto items-center flex-nowrap'>
//                 <Link href="/" className='flex  h-full flex-col w-[25%] items-center justify-between py-1'>
//                     {pathname === '/' ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="home">
//                             <path fill="black" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                 d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023"
//                                 transform="translate(2.5 2)"></path>
//                         </svg>
//                     ) :
//                         (
//                             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="home">
//                                 <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                     d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023"
//                                     transform="translate(2.5 2)"></path>
//                             </svg>
//                         )}
//                     {/* <Image src={`${pathname === '/' ? "/home-black.svg" : "/home.svg"}`} alt='user svg' width={25} height={25} /> */}
//                     <span className='text-[11px] overflow-hidden text-ellipsis whitespace-nowrap'>Home</span>
//                 </Link>
//                 <Link href="/cart" className='flex  h-full w-[25%] flex-col items-center justify-between py-1'>
//                     {pathname === '/cart' ? (
//                         <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19"
//                                 stroke="#000000" stroke-width="2" stroke-linecap="round" />
//                             <path opacity="1"
//                                 d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
//                                 stroke="#000000" fill="black" stroke-width="2" />
//                             <path opacity="1"
//                                 d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
//                                 stroke="#000000" fill="black" stroke-width="2" />
//                             <path
//                                 d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
//                                 stroke="#000000" fill="black" stroke-width="2" />
//                         </svg>
//                     ) : (
//                         <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19"
//                                 stroke="#000000" stroke-width="2" stroke-linecap="round" />
//                             <path opacity="1"
//                                 d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
//                                 stroke="#000000" stroke-width="2" />
//                             <path opacity="1"
//                                 d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
//                                 stroke="#000000" stroke-width="2" />
//                             <path
//                                 d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
//                                 stroke="#000000" stroke-width="2" />
//                         </svg>
//                     )}
//                     {/* <Image src={`${pathname === '/cart' ? "/cart-black.svg" : "/cart.svg"}`} alt='user svg' width={25} height={25} /> */}
//                     <span className='text-[11px] overflow-hidden text-ellipsis whitespace-nowrap'>Cart</span>
//                 </Link>
//                 <Link href="/orders" className='flex w-[25%]  h-full flex-col items-center justify- py-1'>
//                     <Image src="/orders.svg" alt='user svg' width={25} height={25} />
//                     <span className='text-[11px] overflow-hidden text-ellipsis whitespace-nowrap'>Orders</span>
//                 </Link>

//                 <Link href="/sign-in" className='w-[25%]  h-full flex flex-col items-center justify-between py-1'>
//                     {pathname === '/sign-in' ? (
//                         <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19"
//                                 stroke="#000000" stroke-width="2" stroke-linecap="round" />
//                             <path opacity="1"
//                                 d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
//                                 stroke="#000000" fill="black" stroke-width="2" />
//                             <path opacity="1"
//                                 d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
//                                 stroke="#000000" fill="black" stroke-width="2" />
//                             <path
//                                 d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
//                                 stroke="#000000" fill="black" stroke-width="2" />
//                         </svg>
//                     ) : (
//                         <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="12" cy="6" r="4" stroke="#000000" stroke-width="2" />
//                             <path opacity="1"
//                                 d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
//                                 stroke="#000000" stroke-width="2" />
//                         </svg>
//                     )}
//                     {/* <Image src="/user.svg" alt='user svg' width={25} height={25} /> */}
//                     <span className='text-[11px] overflow-hidden text-ellipsis whitespace-nowrap'>Login</span>
//                 </Link>



//             </div>
//         </footer>
//     )
// }










