"use client";

import { Button } from "@/components/ui/button";
import React, { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Icons } from "./icons";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const MAX_FILES = 3;

export const Upload = () => {
	const [files, setFiles] = useState(Array<{ name: string }>);

	const onDrop = useCallback(async (acceptedFiles: File[]) => {
		console.log("acceptedFiles", acceptedFiles);

		// const formData = new FormData();
		// formData.append("file", acceptedFiles[0]);
		// formData.append("name", acceptedFiles[0].name);
	}, []);

	const onDropRejected = useCallback(async (fileRejections: FileRejection[]) => {
		console.log("fileRejections", fileRejections);

		if (fileRejections.length > 0) {
			const tooManyFiles = fileRejections.find((fileRejection) => fileRejection.errors[0].code === "too-many-files");
			const fileTooLarge = fileRejections.find((fileRejection) => fileRejection.errors[0].code === "file-too-large");

			if (tooManyFiles) toast.error(`Too many files. You can only upload ${MAX_FILES} files at a time`);
			if (fileTooLarge) toast.error(`File size is too large`);
		}
	}, []);

	const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
		// Disable click and keydown behavior
		noClick: true,
		noKeyboard: true,
		maxSize: 1024 * 1024 * 3,
		accept: {
			"image/*": [".jpeg", ".png", ".jpg", ".webp"],
		},
		onDrop,
		maxFiles: MAX_FILES,
		onDropRejected,
	});

	return (
		<div className="w-full h-[220px] md:h-[65vh] md:min-h-[300px] md:max-h-[min(200px,50vh)]">
			<div {...getRootProps({ className: "dropzone w-full h-full" })}>
				<div className={cn("w-full h-full border-2 rounded-lg overflow-hidden", isDragActive ? "border-black" : "border-dashed border-black/30")}>
					<input {...getInputProps()} />
					<div className="w-full h-full md:p-20 relative">
						{isDragActive && (
							<div className="absolute inset-0 flex items-center justify-center bg-transparent backdrop-blur-md">
								<div className="font-semibold text-lg">Drop photos here</div>
							</div>
						)}
						<div className="p-2 text-center w-full h-full flex items-center justify-center flex-col">
							<div>{Icons.photos()}</div>
							<div className="font-semibold text-base md:text-lg py-2">Drag your photos here</div>
							<div className="text-sm pb-2">Choose at least 5 photos</div>
							<div>
								<Button variant="ghost" className="bg-transparent hover:bg-transparent underline font-semibold p-0 h-fit" onClick={open}>
									Upload from your device
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
