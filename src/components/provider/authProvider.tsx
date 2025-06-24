import React from "react";
import { Amplify } from "aws-amplify";

import { Authenticator, useAuthenticator, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Button } from "../ui/button";

Amplify.configure({
	Auth: {
		Cognito: {
			userPoolId: process.env.AWS_COGNITO_USER_POOL_ID!,
			userPoolClientId: process.env.AWS_COGNITO_CLIENT_ID!,
		},
	},
});

const formFields = {
	signIn: {
		username: {
			placeholder: "Enter your email",
			isRequired: true,
			label: "Email",
		},
		password: {
			placeholder: "Enter your password",
			isRequired: true,
			label: "Password",
		},
	},
	signUp: {
		username: {
			placeholder: "Enter your email address",
			isRequired: true,
			label: "Email",
		},
		password: {
			placeholder: "Enter your password",
			isRequired: true,
			label: "Password",
		},
		confirm_password: {
			placeholder: "Confirm your password",
			isRequired: true,
			label: "Confirm Password",
		},
	},
};

const components = {
	SignIn: {
		// Header() {
		// 	return (
		// 		<View textAlign="center">
		// 			<h1 className="text-2xl font-semibold">Welcome Back</h1>
		// 			<p className="text-muted-foreground">Please sign in to continue</p>
		// 		</View>
		// 	);
		// },

		// FormFields() {
		// 	const {} = useAuthenticator();

		// 	return (
		// 		<>
		// 			{Object.entries(formFields.signIn).map(([name, field]) => (
		// 				<div key={name}>
		// 					<label htmlFor={name}>{field.label}</label>
		// 					<input id={name} name={name} placeholder={field.placeholder} required={field.isRequired} className="input" />
		// 				</div>
		// 			))}
		// 			hello
		// 		</>
		// 	);
		// },

		Footer() {
			const { toSignUp } = useAuthenticator();

			return (
				<View textAlign="center">
					<div className="flex items-center">
						<p className="text-muted-foreground">Don&apos;t have an account?</p>
						<Button onClick={toSignUp} size="sm" variant={"link"} className="ml-2 h-fit w-fit p-0 underline">
							Sign Up
						</Button>
					</div>
				</View>
			);
		},
	},
	SignUp: {
		// Header() {
		// 	return (
		// 		<View textAlign="center">
		// 			<h1 className="text-2xl font-semibold">Welcome Back</h1>
		// 			<p className="text-muted-foreground">Please sign in to continue</p>
		// 		</View>
		// 	);
		// },

		// FormFields() {
		// 	const {} = useAuthenticator();

		// 	return (
		// 		<>
		// 			{Object.entries(formFields.signIn).map(([name, field]) => (
		// 				<div key={name}>
		// 					<label htmlFor={name}>{field.label}</label>
		// 					<input id={name} name={name} placeholder={field.placeholder} required={field.isRequired} className="input" />
		// 				</div>
		// 			))}
		// 			hello
		// 		</>
		// 	);
		// },

		Footer() {
			const { toSignIn } = useAuthenticator();

			return (
				<View textAlign="center">
					<div className="flex items-center">
						<p className="text-muted-foreground">Already have an account?</p>
						<Button onClick={toSignIn} size="sm" variant={"link"} className="ml-2 h-fit w-fit p-0 underline">
							Sign In
						</Button>
					</div>
				</View>
			);
		},
	},
};

export default function AuthProvider({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full min-h-svh w-full">
			{/* The Authenticator component provides authentication UI and state management */}
			{/* It wraps the children components to ensure they are only rendered when authenticated */}
			{/* You can customize the Authenticator component with various props if needed */}
			{/* For example, you can pass a custom sign-in/sign-up form or handle authentication events */}
			{/* Here, we are using the default Authenticator which provides a basic UI */}
			<Authenticator formFields={formFields} components={components}>
				{() => <>{children}</>}
			</Authenticator>
		</div>
	);
}
