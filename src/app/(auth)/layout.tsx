import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return <div className="h-full w-full min-h-svh flex items-center justify-center">{children}</div>;
};

export default AuthLayout;
