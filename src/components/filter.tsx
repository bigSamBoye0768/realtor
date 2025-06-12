import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export const Filter = ({ trigger }: { trigger: React.ReactNode }) => {
	const isMobile = useIsMobile();

	return isMobile ? (
		<Drawer>
			<DrawerTrigger asChild>{trigger}</DrawerTrigger>
			<DrawerContent className="max-h-[calc(100vh-200px)] overflow-hidden h-full">
				<DrawerHeader className="mark">
					<DrawerTitle>Filter</DrawerTitle>
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	) : (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="max-w-screen-md flex gap-0 flex-col p-0 overflow-hidden w-full max-h-[calc(100vh-100px)] h-full sm:rounded-xl">
				<DialogHeader>
					<DialogTitle>wassup</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

// export const FilesGallery = ({ children, storeId, userId }: { children: React.ReactElement, storeId: Id<'stores'>, userId: string }) => {
//   const isDesktop = useIsMobile();

//   if (isDesktop) {
//     return (
//       <Drawer>
//         <DrawerTrigger asChild>
//           {children}
//           {/* <Button variant="outline">ADD</Button> */}
//         </DrawerTrigger>
//         <DrawerContent className="max-h-[calc(100vh-40px)] overflow-hidden h-full" showDrag={false} showClose>
//           <DrawerHeader className="h-14 border-b bg-black/5">
//             <DrawerTitle className="text-sm font-semibold text-left">Select file</DrawerTitle>
//           </DrawerHeader>
//           <div className="flex-1 overflow-auto">
//             <Suspense fallback={<FilesContentSkeleton />}>
//               <FilesContent storeId={storeId} userId={userId} />
//             </Suspense>
//           </div>
//           <DrawerFooter className="border-t">
//             <Button variant="default" className="font-semibold">Done</Button>
//             <DrawerClose asChild>
//               <Button variant={"outline"} size="default" className="font-semibold">Cancel</Button>
//             </DrawerClose>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     )
//   }

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         {children}
//         {/* <Button variant="outline">ADD</Button> */}
//       </DialogTrigger>
//       <DialogContent className="max-w-screen-lg flex gap-0 flex-col p-0 overflow-hidden w-full max-h-[calc(100vh-100px)] h-full sm:rounded-xl">
//         <DialogHeader className="h-14 px-4 border-b flex justify-center bg-black/5">
//           <DialogTitle className="text-sm font-semibold">Select file</DialogTitle>
//         </DialogHeader>
//         <div className="flex-1 overflow-auto h-full">
//           <Suspense fallback={<FilesContentSkeleton />}>
//             <FilesContent storeId={storeId} userId={userId} />
//           </Suspense>
//         </div>
//         <DialogFooter className="border-t h-14 items-center px-4 flex">
//           <DialogClose asChild>
//             <Button variant={"outline"} size="xs" className="font-semibold">Cancel</Button>
//           </DialogClose>
//           <Button size="xs" className="font-semibold">Done</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }

// const FilesContent = ({ storeId, userId }: { storeId: Id<'stores'>, userId: string }) => {
//   const [view, setView] = useState("grid")
//   const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set())

//   const files = useQuery(api.media.getMediaByStoreId, { storeId })

//   const isLoading = false

//   if (!files || files.length <= 0) {
//     return (
//       <div className="w-full h-full flex flex-col items-center justify-center">
//         <Image src="/files.svg" width={220} height={220} alt="files image" />
//         <span className="font-bold text-sm mb-2">No files yet</span>
//         <span className="max-w-sm text-center text-black/70">Upload files to make a selection. You&apos;ll also be able to reuse the files in other areas of smart</span>
//         <Button size="xs" className="px-3 mt-2">Upload file</Button>
//       </div>
//     )
//   }

//   if (isLoading) {
//     return (
//       <FilesContentSkeleton />
//     )
//   }

//   const sortOptions = [
//     { name: "Date added (newest first)", value: "date_newest" },
//     { name: "Date added (oldest first)", value: "date_oldest" },
//     { name: "File name (A-Z)", value: "name_asc" },
//     { name: "File name (Z-A)", value: "name_desc" }
//   ];

//   const onViewChange = (v: string) => {
//     setView(v)
//   }

//   const onSortChange = (v: string) => {
//     console.log(v);
//   }

//   const onFileCheckChange = (publicId: string, checked: CheckedState) => {
//     setSelectedFiles(prevVals => {
//       const newSet = new Set(prevVals)
//       if (checked) {
//         newSet.add(publicId)
//       } else {
//         newSet.delete(publicId)
//       }
//       return newSet
//     })
//   }

//   console.log(selectedFiles);

//   return (
//     <div className="h-full w-full overflow-y-auto">
//       <div className="px-4 my-3">
//         <div className="flex justify-between items-center flex-nowrap gap-x-2">
//           <label className="w-full max-w-xl">
//             <Input type="search" placeholder="Search files" className="border-gray-500 text-xs h-8" />
//           </label>
//           <div className="flex gap-x-2 flex-nowrap items-center">
//             <Select onValueChange={onSortChange} defaultValue="date_newest">
//               <SelectTrigger className="w-full max-w-16 px-2 h-8 rounded-lg border-gray-500 text-xs">
//                 <div className="flex items-center gap-x-1 flex-nowrap">
//                   <span>
//                     <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.75 4.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.749.749 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.749.749 0 1 1-1.06 1.06z"></path><path d="M11.75 4.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.749.749 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.749.749 0 1 0-1.06-1.06l-1.72 1.72z"></path></svg>
//                   </span>
//                   <span>Sort</span>
//                 </div>
//               </SelectTrigger>
//               <SelectContent className='rounded-lg w-full max-w-fit min-w-full'>
//                 {sortOptions.map((option, index) => (
//                   <SelectItem value={option.value} showCheck key={index} className='text-xs cursor-pointer'>
//                     {option.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             <Select onValueChange={onViewChange}>
//               <SelectTrigger className="w-full max-w-16 px-2 h-8 rounded-lg border-gray-500 text-xs">
//                 {
//                   view === "grid" ? (
//                     <span><svg width={16} height={16} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" focusable="false"><path d="M2.5 3.5a1 1 0 011-1H5a1 1 0 011 1V5a1 1 0 01-1 1H3.5a1 1 0 01-1-1V3.5zM8.25 3.5a1 1 0 011-1h1.5a1 1 0 011 1V5a1 1 0 01-1 1h-1.5a1 1 0 01-1-1V3.5zM14 3.5a1 1 0 011-1h1.5a1 1 0 011 1V5a1 1 0 01-1 1H15a1 1 0 01-1-1V3.5z" fillRule="nonzero"></path><path d="M6 9.25a1 1 0 00-1-1H3.5a1 1 0 00-1 1v1.5a1 1 0 001 1H5a1 1 0 001-1v-1.5zM11.75 9.25a1 1 0 00-1-1h-1.5a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1v-1.5zM17.5 9.25a1 1 0 00-1-1H15a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1v-1.5zM6 15a1 1 0 00-1-1H3.5a1 1 0 00-1 1v1.5a1 1 0 001 1H5a1 1 0 001-1V15zM11.75 15a1 1 0 00-1-1h-1.5a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1V15zM17.5 15a1 1 0 00-1-1H15a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1V15z"></path></svg></span>
//                   ) : (
//                     <span><svg width={16} height={16} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" focusable="false"><path d="M6.5 4.5a1 1 0 011-1H17a1 1 0 011 1V5a1 1 0 01-1 1H7.5a1 1 0 01-1-1v-.5zM2 9.75a1 1 0 011-1h.5a1 1 0 011 1v.5a1 1 0 01-1 1H3a1 1 0 01-1-1v-.5zM2 15a1 1 0 011-1h.5a1 1 0 011 1v.5a1 1 0 01-1 1H3a1 1 0 01-1-1V15zM2 4.5a1 1 0 011-1h.5a1 1 0 011 1V5a1 1 0 01-1 1H3a1 1 0 01-1-1v-.5z" fillRule="nonzero"></path><path d="M18 9.75a1 1 0 00-1-1H7.5a1 1 0 00-1 1v.5a1 1 0 001 1H17a1 1 0 001-1v-.5zM18 15a1 1 0 00-1-1H7.5a1 1 0 00-1 1v.5a1 1 0 001 1H17a1 1 0 001-1V15z"></path></svg></span>
//                   )
//                 }
//               </SelectTrigger>
//               <SelectContent className='rounded-lg w-full max-w-fit min-w-full'>
//                 <SelectItem value="grid" className='text-xs cursor-pointer'>
//                   <div className="flex gap-1 flex-nowrap items-center">
//                     <span><svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" focusable="false"><path d="M2.5 3.5a1 1 0 011-1H5a1 1 0 011 1V5a1 1 0 01-1 1H3.5a1 1 0 01-1-1V3.5zM8.25 3.5a1 1 0 011-1h1.5a1 1 0 011 1V5a1 1 0 01-1 1h-1.5a1 1 0 01-1-1V3.5zM14 3.5a1 1 0 011-1h1.5a1 1 0 011 1V5a1 1 0 01-1 1H15a1 1 0 01-1-1V3.5z" fillRule="nonzero"></path><path d="M6 9.25a1 1 0 00-1-1H3.5a1 1 0 00-1 1v1.5a1 1 0 001 1H5a1 1 0 001-1v-1.5zM11.75 9.25a1 1 0 00-1-1h-1.5a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1v-1.5zM17.5 9.25a1 1 0 00-1-1H15a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1v-1.5zM6 15a1 1 0 00-1-1H3.5a1 1 0 00-1 1v1.5a1 1 0 001 1H5a1 1 0 001-1V15zM11.75 15a1 1 0 00-1-1h-1.5a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1V15zM17.5 15a1 1 0 00-1-1H15a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1V15z"></path></svg></span>
//                     <span>Grid view</span>
//                   </div>
//                 </SelectItem>
//                 <SelectItem value="list" className='text-xs cursor-pointer'>
//                   <div className="flex gap-1 flex-nowrap items-center">
//                     <span><svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" focusable="false"><path d="M6.5 4.5a1 1 0 011-1H17a1 1 0 011 1V5a1 1 0 01-1 1H7.5a1 1 0 01-1-1v-.5zM2 9.75a1 1 0 011-1h.5a1 1 0 011 1v.5a1 1 0 01-1 1H3a1 1 0 01-1-1v-.5zM2 15a1 1 0 011-1h.5a1 1 0 011 1v.5a1 1 0 01-1 1H3a1 1 0 01-1-1V15zM2 4.5a1 1 0 011-1h.5a1 1 0 011 1V5a1 1 0 01-1 1H3a1 1 0 01-1-1v-.5z" fillRule="nonzero"></path><path d="M18 9.75a1 1 0 00-1-1H7.5a1 1 0 00-1 1v.5a1 1 0 001 1H17a1 1 0 001-1v-.5zM18 15a1 1 0 00-1-1H7.5a1 1 0 00-1 1v.5a1 1 0 001 1H17a1 1 0 001-1V15z"></path></svg></span>
//                     <span>List view</span>
//                   </div>
//                 </SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//         <div>
//           filters
//         </div>
//       </div>
//       <div className="px-4 my-4">
//         <Media storeId={storeId} userId={userId} />
//       </div>
//       {/* <FilesContentSkeleton /> */}
//       <div className=" px-4">
//         <ul className="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-2">
//           {files.map((file) => (
//             <li className="" key={file.publicId}>
//               <div className="outer-container p-4 group rounded-xl bg-white hover:bg-gray-400/20">
//                 <div className="border-2 bg-white rounded-xl p-1">
//                   <div className="relative aspect-square rounded-lg overflow-hidden">
//                     <Checkbox checked={selectedFiles.has(file.publicId)} onCheckedChange={(check) => onFileCheckChange(file.publicId, check)} className="absolute top-1 left-1 z-40 bg-white" />
//                     <div className="bg-black/20 absolute inset-0 z-30 opacity-0 group-hover:opacity-100"></div>
//                     <Image src={file.url} alt="img" fill className="object-cover" />
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center mt-2 px-2">
//                   <div className="tracking-tight line-clamp-1 w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{file.name}</div>
//                   <div className="tracking-tight line-clamp-1 text-center">{file.format}</div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// // grid-cols-[repeat(auto-fill,minmax(9rem,1fr))]

// export const FilesContentSkeleton = () => {

//   return (
//     <div className="h-full w-full px-4 py-4 overflow-hidden">
//       <Skeleton className="h-8 mb-4" />
//       <Skeleton className="h-28" />

//       <ul className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-2">
//         {[...Array(12)].map((_, index) => (
//           <li key={index}>
//             <div className="outer-container p-4 group rounded-xl bg-white border-2 border-transparent">
//               <Skeleton className="w-full h-full aspect-square" />

//               <div className="flex flex-col items-center mt-2 gap-y-2 px-2">
//                 <Skeleton className="w-full h-2" />
//                 <Skeleton className="w-full h-2" />
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul >
//     </div >
//   )
// }

// export const Media = ({ userId, storeId }: { userId: string, storeId: Id<'stores'> }) => {
//   const [isLoading, setIsLoading] = useState<boolean>(false)

//   const onDrop = useCallback(
//     async (acceptedFiles: File[]) => {
//       // console.log(acceptedFiles);

//       const formData = new FormData();
//       formData.append("file", acceptedFiles[0]);
//       formData.append("uploadedBy", userId);
//       formData.append("storeId", storeId);
//       formData.append("name", acceptedFiles[0].name);

//       try {
//         setIsLoading(true)
//         const mediaId = await uploadFile(formData);
//         console.log(mediaId);
//         toast("File uploaded.")
//       } catch (error) {
//         console.error("Error uploading file:", error);
//         toast("Failed to upload file.")
//       } finally {
//         setIsLoading(false)
//       }
//     },
//     [storeId, userId]
//   );

//   const { getRootProps, getInputProps, open } = useDropzone({
//     // Disable click and keydown behavior
//     noClick: true,
//     noKeyboard: true,
//     accept: {
//       'image/*': ['.jpeg', '.png', '.jpg', '.webp',]
//     },
//     onDrop,
//     maxFiles: 1,
//     disabled: isLoading
//   });

//   return (
//     <>
//       <div className='w-full flex'>
//         <div {...getRootProps({ className: 'dropzone w-full' })}>
//           <div className='border-dashed border-2 rounded-lg h-32 w-full p-2 border-gray-500 flex flex-col gap-1 items-center justify-center'>
//             <input {...getInputProps()} />
//             <div className=''>
//               <Button variant="outline" disabled={isLoading} size="xs" className='rounded-lg' onClick={open}>Upload new</Button>
//             </div>
//             <div className='text-xs text-black/60'>Drag and drop images</div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// const [isPending, startTransition] = useTransition()
// const [name, setName] = useState(initialName)
// const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     startTransition(() => {
//         updateStream({ name })
//             .then(() => {
//                 toast.success(`Stream name updated`)
//                 closeRef.current?.click();
//             })
//             .catch(() => toast.error("Something went wrong"))
//     })
// }
