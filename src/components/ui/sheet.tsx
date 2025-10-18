"use client";
import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement> & {
	children?: React.ReactNode;
};

export function Sheet({ children, ...props }: DivProps) {
	return (
		<div data-component="Sheet" {...props}>
			{children}
		</div>
	);
}

export function SheetContent({ children, ...props }: DivProps & { side?: "left" | "right" | "top" | "bottom"; showClose?: boolean; }) {
	return (
		<div data-component="SheetContent" {...props}>
			{children}
		</div>
	);
}

export function SheetFooter({ children, ...props }: DivProps) {
	return (
		<div data-component="SheetFooter" {...props}>
			{children}
		</div>
	);
}

