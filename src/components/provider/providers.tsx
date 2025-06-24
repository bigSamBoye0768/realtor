"use client";

import React from "react";
import AuthProvider from "./authProvider";
import { Authenticator } from "@aws-amplify/ui-react";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<Authenticator.Provider>
			<AuthProvider>{children}</AuthProvider>
		</Authenticator.Provider>
	);
};

export default Providers;
