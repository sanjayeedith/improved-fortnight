"use client";
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

const socialLinks: FooterLink[] = [
	{ title: 'GitHub', href: 'https://github.com/sanjayeedith', icon: GithubIcon },
	{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/sanjay-ramesh-kumar-580569215/', icon: LinkedinIcon },
	{ title: 'Email', href: 'mailto:sanjaysnehar@gmail.com', icon: MailIcon },
];

export function Footer() {
	return (
		<footer id="footer" className="w-full flex flex-col items-center justify-center bg-black px-6 py-16">
			<div className="w-full max-w-7xl flex flex-col items-center gap-8">
				<AnimatedContainer className="space-y-6 text-center">
					<h3 className="text-2xl font-mono text-orange-500 font-bold">Get In Touch</h3>
					<p className="text-neutral-300 text-sm font-mono max-w-md">
						Interested in collaborating or have a question? Feel free to reach out!
					</p>
					
					<div className="flex gap-6 justify-center pt-4">
						{socialLinks.map((link) => (
							<a
								key={link.title}
								href={link.href}
								className="hover:text-orange-500 text-white transition-all duration-300 flex items-center gap-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.icon && <link.icon className="size-6" />}
							</a>
						))}
					</div>
				</AnimatedContainer>

				<div className="border-t border-white/10 w-full pt-8 text-center">
					<p className="text-neutral-400 text-sm font-mono">
						© {new Date().getFullYear()} sanjay. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (shouldReduceMotion || !mounted) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
