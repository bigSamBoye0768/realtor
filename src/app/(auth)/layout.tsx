import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return <div className="h-full w-full min-h-svh">{children}</div>;
};

export default AuthLayout;
