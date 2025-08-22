import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileFooter } from "./_components/mobile-footer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EmblaCarousel from "./_components/carousel/EmblaCarousel";
import { DoubleSlider } from "@/components/ui/double-slider";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Page = () => {
	return (
		<div className="min-h-svh w-full">
			<div className="w-full border-b shadow fixed top-0 bg-white z-[100] hidden md:block">
				<Header maxWidth="max-w-[1180px]" />
			</div>

			<section className="w-full relative h-full min-h-svh max-w-[1180px] mx-auto md:pt-[calc(80px_+_0px)] pb-[130px] bg-white">
				<div className="w-full md:mt-6 2xl:px-20 lg:px-10 md:px-8">
					<div className="overflow-hidden rounded-2xl hidden relative md:grid grid-cols-4 grid-rows-2 min-h-[400px] max-h-[calc(60vh_-_64px)] h-full gap-2">
						{[...Array(5)].map((_, index) => (
							<div className={cn("w-full relative h-full", index === 0 && "col-span-2 row-span-2")} key={index}>
								<Image
									src="/assets/photos/b9ae0435-0527-459c-a181-e006654e470a.webp"
									alt="b9ae0435-0527-459c-a181-e006654e470a.webp"
									className="object-cover w-full hover:brightness-90 transition-all duration-150"
									fill
								/>
								{/* <div className="bg-black absolute inset-0"></div>*/}
							</div>
						))}
						<div className="absolute bottom-4 right-4">
							<Button variant={"outline"} className="font-bold text-xs h-8 border-black border-2 rounded-lg px-3">
								<div>
									<svg
										xmlnsXlink="http://www.w3.org/1999/xlink"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										aria-hidden="true"
										role="presentation"
										focusable="false"
										style={{ display: "block", height: "16px", width: "16px", fill: "currentcolor" }}
										width="16"
										height="16"
									>
										<path
											fillRule="evenodd"
											d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
											fill="#222222"
										/>
									</svg>
								</div>
								Show all photos
							</Button>
						</div>
					</div>

					<div className="w-full md:hidden">
						<EmblaCarousel slides={SLIDES} options={{ containScroll: "trimSnaps", dragFree: false, loop: false, align: "start" }} />
					</div>
				</div>

				<div className="mark w-full flex gap-10 mt-6 2xl:px-20 lg:px-10 md:px-8 px-4">
					<div className="mark-b w-full h-[150vh]">
						<div className="w-full mark">
							{/* <div className="mark-b grid grid-cols-4 grid-rows-2 min-h-[400px] max-h-[calc(60vh_-_64px)] h-full gap-2">
								<div className="mark w-full h-full col-span-2 row-span-2"></div>
								<div className="mark w-full h-full"></div>
								<div className="mark w-full h-full"></div>
								<div className="mark w-full h-full"></div>
								<div className="mark w-full h-full"></div>
							</div> */}

							<div className="mark-b pb-6 border-b border-black/20">
								<h2 className="font-semibold text-xl line-clamp-2">Entire condo in Accra, Ghana</h2>

								<div className="mt-1 flex items-center gap-2 text-sm">
									<span>2 guests</span>
									<Separator orientation="vertical" className="min-w-[4px] max-h-[4px] bg-black/80" />
									<span>1 bed</span>
									<Separator orientation="vertical" className="min-w-[4px] max-h-[4px] bg-black/80" />
									<span>1 bath</span>
								</div>
							</div>

							<div className="border-b border-black/20 py-6">
								<div className="flex gap-6">
									<div className="relative w-[40px] h-[40px] aspect-square rounded-full overflow-hidden">
										<Image
											src="/assets/photos/b9ae0435-0527-459c-a181-e006654e470a.webp"
											alt="b9ae0435-0527-459c-a181-e006654e470a.webp"
											className="object-cover"
											fill
										/>
									</div>
									<div>
										<div className="text-base font-semibold">Hosted by Ariadna</div>
										<div className="text-sm">1 year hosting</div>
									</div>
								</div>
							</div>

							<div className="border-b border-black/20 py-6">
								<div className="flex flex-col gap-y-4">
									{[...Array(3)].map((_, index) => (
										<div className="flex gap-6" key={index}>
											<div className="relative w-[40px] h-[40px] aspect-square flex justify-center overflow-hidden">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 32 32"
													aria-hidden="true"
													role="presentation"
													focusable="false"
													width="32"
													height="32"
													style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}
												>
													<path
														d="M24.33 1.67a2 2 0 0 1 2 1.85v24.81h3v2H2.67v-2h3V3.67a2 2 0 0 1 1.85-2h.15zm-4 2H7.67v24.66h12.66zm4 0h-2v24.66h2zm-7 11a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66z"
														fill="#222222"
													></path>
												</svg>
											</div>
											<div className="w-full">
												<div className="text-base font-semibold">Self check-in</div>
												<div className="text-sm">Check yorself in with the lockbox.</div>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="border-b border-black/20 py-6">
								<h2 className="font-semibold text-xl">Meet your Host</h2>

								<div className="bg-[#f0efe9] rounded-3xl mark mt-6">
									<div className="w-full px-4 py-6">
										<div className="mark-b w-full max-w-sm mx-auto">
											<div className="bg-white rounded-3xl w-full shadow-[0_6px_20px_rgba(0,0,0,0.2)] p-4 flex">
												<div className="mark">
													<div className="mark-b relative  w-[90px] h-[90px] aspect-square rounded-full">
														<div className="relative w-full h-full rounded-full overflow-hidden">
															<Image
																src="/assets/photos/b9ae0435-0527-459c-a181-e006654e470a.webp"
																alt="b9ae0435-0527-459c-a181-e006654e470a.webp"
																className="object-cover"
																fill
															/>
														</div>
														<div className="w-7 h-7 aspect-square flex items-center justify-center absolute bottom-0 right-0 bg-green-500 rounded-full">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 32 32"
																aria-label="Verified host"
																role="img"
																focusable="false"
																style={{ display: "block", height: "16px", width: "16px", fill: "white" }}
															>
																<path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm7 9.08-9.5 9.5-4.5-4.5L6.88 17l6.62 6.62L25.12 12 23 9.88z"></path>
															</svg>
														</div>
													</div>
													<div className="text-center">
														<h2 className="font-semibold text-lg">Ariadna Donovan</h2>
														<div>Host</div>
													</div>
												</div>
												<div className="w-full mark"></div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="mark mt-36 p-8">
								<DoubleSlider />
							</div>
						</div>
					</div>
					<div className="w-[400px] h-[50vh] shadow-[0_3px_15px_7px_rgba(0,0,0,0.15)] rounded-xl sticky top-[calc(80px_+_0px+_24px)] hidden md:block"></div>
				</div>

				<div className="2xl:px-20 lg:px-10 md:px-8 px-4">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta magni architecto est! Nesciunt perspiciatis, nam, optio fugit et facere
						odio neque rerum totam amet eum iusto saepe, velit repellendus officia eveniet. Officia ea neque aperiam totam incidunt cumque. Aliquam
						earum illo repudiandae illum officia sint? Non sequi optio molestias, laboriosam nam eum, magni hic cupiditate expedita, iusto autem
						reiciendis ipsam iste voluptatum ad exercitationem? Cum eligendi, placeat ex alias provident nobis doloremque nesciunt ullam commodi,
						repellat, facilis laborum! Aliquid voluptates culpa nobis saepe pariatur, voluptatibus ex eaque a dignissimos possimus reprehenderit,
						incidunt eum laudantium eveniet totam? Quae vero quasi illo fugiat quo sequi aspernatur commodi repudiandae? Cumque quia reiciendis
						voluptatum non numquam quae laborum ut error perspiciatis impedit omnis, possimus id accusamus? Nulla provident autem dolorum totam quas
						beatae, voluptate fuga, delectus praesentium commodi maiores sed amet fugiat. Fuga incidunt cupiditate blanditiis unde nemo expedita
						laborum quia ratione obcaecati eum! Temporibus vitae cumque numquam omnis, qui enim obcaecati tenetur eveniet nam! Dignissimos tenetur,
						aut doloremque, iusto quo voluptas modi, ad dolores pariatur nihil inventore odio accusantium reprehenderit perspiciatis iste quas!
						Inventore fugiat ipsum quisquam ipsam aliquid nemo a cum odio, tempora nobis esse et laborum asperiores. Tempora at enim ullam similique
						iste! Repellendus nemo delectus obcaecati dicta, amet quidem blanditiis ullam nobis sit, iure vero ad aperiam quasi labore quia commodi
						recusandae atque nam ex placeat? Non autem id enim culpa reprehenderit sed ipsa ea minima nulla numquam exercitationem cupiditate dolor
						vel ex quae maxime laboriosam, suscipit aliquam recusandae possimus asperiores nam labore! Rerum quo quasi consequatur sunt eius, voluptas
						mollitia cum doloribus eos libero fugiat ducimus voluptates sit numquam reiciendis reprehenderit, consequuntur quis nesciunt saepe
						necessitatibus a. Eos sunt dignissimos dolores veritatis, cupiditate ut molestias minima quibusdam asperiores, libero possimus pariatur.
						Excepturi nisi laborum sit est dolores repellat temporibus? Consequuntur nulla odit, aperiam inventore, nam quas enim porro ea perferendis
						fugit ullam, laboriosam distinctio in culpa rem. Adipisci expedita doloribus et quibusdam obcaecati impedit commodi consequatur tempore
						amet aperiam esse velit eum vel dolore rerum blanditiis debitis natus, sequi quam laudantium? Quam possimus, incidunt earum provident
						iusto quos veniam cupiditate autem unde, adipisci ea molestiae. Totam dicta culpa quas harum dolorem alias debitis exercitationem
						reiciendis? Placeat nihil velit corporis sit. Sed, cumque officia fugit quibusdam nam deserunt vitae praesentium ducimus quod. Dolorum,
						repellat nulla! Fugiat facilis nemo nostrum at, debitis reiciendis, quidem commodi aspernatur magni quisquam libero saepe aut! Commodi
						maiores nesciunt omnis porro nihil voluptatem ducimus, velit odit voluptates praesentium voluptatum tenetur? Fugit atque aspernatur,
						praesentium sint soluta excepturi nulla iusto, eaque quo aliquid repellendus neque ullam vitae a nobis quisquam, magni tempore eius
						accusamus impedit? Illum maiores facilis sapiente nulla minus iste asperiores error quo distinctio ad saepe, totam officia soluta incidunt
						necessitatibus natus! Suscipit vero magni veritatis soluta laborum quidem accusantium quasi aliquam distinctio nulla laudantium minima
						ullam cum aut atque incidunt, at optio ducimus? Ipsam, adipisci fugiat! Sapiente atque magnam pariatur maxime, eius officia rem totam
						sequi dignissimos, non corporis mollitia at error, ex reiciendis? Corrupti quos sapiente sint culpa optio eum nam eaque at, laborum, a,
						commodi dolorem inventore sit nostrum aperiam accusamus facilis molestiae ipsum cumque nulla tenetur quaerat odit? Eligendi nemo harum
						aut, ipsam dolorem molestiae illo obcaecati corrupti qui quod officia tempora pariatur assumenda doloremque quasi beatae omnis inventore
						nesciunt dignissimos! Voluptas architecto reprehenderit reiciendis labore ullam esse similique consequatur sed totam nulla rerum sapiente
						debitis possimus, atque cumque, repellat perferendis voluptatum iste quae pariatur repellendus quibusdam vel. Dolorum beatae eius illum
						eveniet, quis necessitatibus eaque! Quibusdam neque enim corrupti, fuga, qui optio quos rem molestiae in pariatur dolor. Voluptatum, sunt.
						Totam temporibus obcaecati consectetur vero enim! Dolorum ab neque aspernatur corporis aliquid odit maiores nesciunt quaerat. Inventore
						similique quas assumenda deleniti autem mollitia ipsam sed tempore laborum quam in ratione laudantium itaque, dicta blanditiis eum
						expedita optio accusamus adipisci temporibus quae maxime excepturi ad deserunt. Reprehenderit, ipsa! Aliquid, iure veniam impedit quasi
						nostrum incidunt doloribus doloremque cum dolorem officiis et ea laborum ut ad mollitia quia! Architecto id eaque provident fugiat,
						corrupti blanditiis suscipit natus repudiandae reprehenderit porro magni optio quibusdam, consectetur aspernatur tenetur. Illum eius
						reprehenderit, tempora optio sapiente doloremque asperiores inventore quasi maxime iste voluptates eveniet quae voluptatem molestiae
						assumenda temporibus suscipit hic quis error sequi veniam rerum, perferendis earum? Sapiente sequi doloremque consectetur, repudiandae
						architecto consequuntur neque. Mollitia animi explicabo ipsa odio, officia labore sunt illum voluptatem reiciendis est consectetur nulla
						deserunt quo! Modi ipsa, magnam voluptates id esse eaque ipsam perferendis hic alias ducimus, excepturi impedit? Tempora delectus animi
						sequi aspernatur ex. Harum doloribus aut provident quisquam ad assumenda esse nisi maiores ratione possimus! Quam, repellat. Voluptate
						consequatur natus iste omnis non unde aliquam minus dicta quae, officiis, dolores iusto incidunt, reiciendis rerum eos. Corrupti
						praesentium earum cumque adipisci repudiandae consequatur asperiores ipsa sed numquam similique, sunt soluta magnam commodi ab animi enim?
						Voluptatum fuga ea modi voluptatem, aut sit? Minima, quisquam repudiandae! Qui ullam et iusto minima sequi repellat mollitia voluptas
						molestias aspernatur voluptate. Doloremque blanditiis incidunt corrupti laudantium dicta quia perspiciatis exercitationem nobis quisquam.
						Incidunt, aspernatur nostrum a veritatis deleniti autem voluptatum? Iste, odit totam obcaecati tenetur fuga dolor minima aspernatur, et,
						eligendi porro quod impedit unde vero culpa? Soluta harum vero repudiandae explicabo obcaecati et! Perferendis veniam sit illo. Cupiditate
						sequi reiciendis, quis doloribus expedita nisi impedit earum minima. Vel corporis impedit reprehenderit sunt quaerat quibusdam, expedita
						quia est architecto omnis obcaecati suscipit! Delectus, consequuntur? Saepe, quis. Incidunt enim, assumenda officia quo ullam dolores
						inventore alias fugit distinctio nihil culpa quod! Alias, ullam vero molestiae enim nobis nulla veritatis ut hic veniam blanditiis quos et
						optio doloribus debitis dolorum modi itaque molestias porro aperiam voluptas inventore error ipsa. Sint neque facere, est quas itaque
						impedit ipsa id, quos accusantium fuga ab sapiente et libero ducimus debitis corporis quam consequatur aspernatur quibusdam. Ipsa tempora
						neque earum accusantium, provident itaque, dolore eum animi aut odit nulla ad soluta. Enim quia veritatis repudiandae quisquam laudantium
						sed cumque quis neque? Voluptatibus ut dolor nulla cumque consectetur quasi.
					</p>
				</div>

				<div className="2xl:px-20 lg:px-10 md:px-8 border-t border-black/20 py-6">
					<h2 className="font-semibold text-xl">Location</h2>
					<div>Accra, Ghana</div>

					<div>
						<Skeleton className="w-full h-[400px]" />
					</div>
				</div>
			</section>

			<MobileFooter />
			<Footer maxWidth="max-w-[1180px]" />
		</div>
	);
};

export default Page;
