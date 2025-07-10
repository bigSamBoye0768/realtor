import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileFooter } from "./_components/mobile-footer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Page = () => {
	return (
		<div className="min-h-svh w-full">
			<div className="w-full border-b shadow fixed top-0 bg-white z-[100] hidden md:block">
				<Header />
			</div>

			<section className="w-full relative mark h-full min-h-svh max-w-[1180px] mx-auto md:pt-[calc(80px_+_0px)] pb-[130px] bg-white">
				<div className="mark w-full md:mt-6 2xl:px-20 lg:px-10 md:px-8">
					<div className="mark-b overflow-hidden rounded-2xl relative grid grid-cols-4 grid-rows-2 min-h-[400px] max-h-[calc(60vh_-_64px)] h-full gap-2">
						{[...Array(5)].map((_, index) => (
							<div className={cn("mark w-full relative h-full", index === 0 && "col-span-2 row-span-2")} key={index}>
								<Image
									src="/assets/photos/b9ae0435-0527-459c-a181-e006654e470a.webp"
									alt="b9ae0435-0527-459c-a181-e006654e470a.webp"
									className="object-cover w-full"
									fill
								/>
							</div>
						))}
						<div className="absolute bottom-4 right-4">
							<Button variant={"outline"} className="font-semibold text-[0.8rem] h-8 border-black border-2 rounded-lg px-3">
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
						{/* <div className="mark w-full h-full col-span-2 row-span-2"></div>
						<div className="mark w-full h-full"></div>
						<div className="mark w-full h-full"></div>
						<div className="mark w-full h-full"></div>
						<div className="mark w-full h-full"></div> */}
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

							<div className="mark">
								<h2 className="font-bold text-xl line-clamp-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolores iure sit perspiciatis alias aspernatur cumque sunt
								</h2>
							</div>
						</div>
					</div>
					<div className="mark-b w-[400px] h-[50vh] sticky top-[calc(80px_+_0px+_24px)] hidden md:block"></div>
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
			</section>

			<MobileFooter />
			<Footer />
		</div>
	);
};

export default Page;
