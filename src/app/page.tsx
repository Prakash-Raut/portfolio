import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
	return (
		<div className="min-h-screen p-8 max-w-[640px] mx-auto">
			<header className="flex items-center space-x-4 mb-8">
				<Image
					src="/avatar.jpg"
					alt="John Rush"
					width={64}
					height={64}
					className="rounded-full"
				/>
				<div>
					<h1 className="text-xl font-bold">Prakash Raut</h1>
					<p className="text-sm text-muted-foreground">
						100x software engineer
					</p>
				</div>
				<div className="flex space-x-2">
					<Button
						asChild
						variant="outline"
					>
						<Link
							href="https://github.com/Prakash-Raut"
							className="px-3 py-1 rounded text-sm"
							target="_blank"
						>
							<Github className="h-4 w-4" />
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
					>
						<Link
							href="https://www.linkedin.com/in/prakashkumarraut/"
							className="px-3 py-1 rounded text-sm"
							target="_blank"
						>
							<Linkedin className="h-4 w-4" />
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
					>
						<Link
							href="https://x.com/Mr_Prakash_Raut"
							className="px-3 py-1 rounded text-sm"
							target="_blank"
						>
							<Twitter className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</header>

			<div className="space-y-2 mb-8">
				<blockquote className="mt-6 border-l-2 pl-6 italic">
					There is no secret ingredient.
				</blockquote>
			</div>

			<section className="mb-8">
				<h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
					Projects
				</h2>
				{[
					{
						name: "Leetcode clone",
						description:
							"Expand your knowledge and prepare for technical interviews.",
						link: "https://github.com/Prakash-Raut/LeetCode",
					},
					{
						name: "Uber",
						description:
							"Get a ride in minutes. Or become a driver and earn money on your schedule.",
						link: "https://github.com/Prakash-Raut/Uber-App",
					},
				].map((project) => (
					<Link
						href={project.link}
						key={project.name}
						className="flex justify-between items-center py-3 my-2 px-4 rounded-xl"
						target="_blank"
					>
						<div>
							<p className="text-sm font-medium leading-none">
								{project.name}
							</p>
							<small className="font-medium text-sm text-muted-foreground">
								{project.description}
							</small>
						</div>
						<ArrowRight className="h-4 w-4" />
					</Link>
				))}
			</section>

			<footer className="flex justify-between items-center pt-8 mt-8"></footer>
		</div>
	);
}
