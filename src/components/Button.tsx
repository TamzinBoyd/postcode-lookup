import React, { FunctionComponent } from "react";

interface ButtonProps {
	children: React.ReactNode;
	classes?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	ariaLabel: string;
}
const Button: FunctionComponent<ButtonProps> = ({
	children,
	classes = "",
	onClick,
	type = "button",
	ariaLabel,
}) => {
	return (
		<button
			aria-label={ariaLabel}
			type={type}
			className={`btn btn__primary py-2 px-8 w-56 h-12 bg-gray-700 uppercase text-sm text-gray-100 font-bold hover:bg-gray-500 ${classes}`}
            onClick={onClick ? onClick : () => {}}
		>
			{children}
		</button>
	);
};

export default Button;
