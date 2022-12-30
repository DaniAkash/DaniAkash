import clsx from "clsx";

import { Container } from "@/components/Container";
import {
	TwitterIcon,
	InstagramIcon,
	GitHubIcon,
	LinkedInIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.jpg";
import { TWITTER, INSTAGRAM, LINKEDIN, GITHUB, MAIL } from "@/constants/links";

function SocialLink({ className, href, children, icon: Icon }) {
	return (
		<li className={clsx(className, "flex")}>
			<a
				href={href}
				className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
				target="_blank"
				rel="noreferrer"
			>
				<Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
				<span className="ml-4">{children}</span>
			</a>
		</li>
	);
}

function MailIcon(props) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				fillRule="evenodd"
				d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
			/>
		</svg>
	);
}

export default function About() {
	return (
		<>
			{/* TODO: figure out how to set title tags */}
			{/* <Head>
				<title>About - Spencer Sharp</title>
				<meta
					name="description"
					content="I’m Spencer Sharp. I live in New York City, where I design the future."
				/>
			</Head> */}
			<Container className="mt-16 sm:mt-32">
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div className="lg:pl-20">
						<div className="max-w-xs px-2.5 lg:max-w-none">
							<img
								src={portraitImage.src}
								alt=""
								sizes="(min-width: 1024px) 32rem, 20rem"
								className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
							/>
						</div>
					</div>
					<div className="lg:order-first lg:row-span-2">
						<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
							I’m Dani Akash
						</h1>
						<div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
							<p>
								Since the day I played the{" "}
								<a
									href="https://www.microsoft.com/en-us/p/3d-pinball-space-cadet/9mt92dxzj11r"
									target="_blank"
									rel="noreferrer"
								>
									3D Pinball
								</a>{" "}
								game on one of the Windows XP machines in a Xerox shop near my
								school, I've had a fascination with computers. Since then, I've
								worked hard to learn more about computers and eventually earned
								an engineering degree in computer science.
							</p>
							<p>
								As a worldbuilder, I'm always learning about how our world
								works, from global economics to particle physics. I try to learn
								as much as I can about this world through books, documentaries & educational youtube videos. I also enjoy reading about imaginary worlds. This made me a big fan of
								Japanese manga and games, such as One Piece, Evangelion, Tekken, and many others.
							</p>
							<p>
								I adhere to the philosophy of optimistic nihilism and strive to
								accomplish as many good things as possible in my lifetime. I
								have worked with many non-governmental organisations (NGOs) such
								as Teach for India and SOS Children's Villages to help educate
								children to use computers and science. After Covid-19, I started
								investing heavily in Green Energy technologies, hoping to
								contribute to a more sustainable future for future generations.
							</p>
							<p>
								Today, I work as a programmer, engineering manager, and active
								educator, teaching others how to code and build a career in
								technology. I build high-performance web and mobile apps using
								modern JavaScript, GraphQL, tRPC, serverless and edge runtimes.
							</p>
						</div>
					</div>
					<div className="lg:pl-20">
						<ul role="list">
							<SocialLink href={TWITTER} icon={TwitterIcon}>
								Follow on Twitter
							</SocialLink>
							<SocialLink
								href={INSTAGRAM}
								icon={InstagramIcon}
								className="mt-4"
							>
								Follow on Instagram
							</SocialLink>
							<SocialLink href={GITHUB} icon={GitHubIcon} className="mt-4">
								Follow on GitHub
							</SocialLink>
							<SocialLink href={LINKEDIN} icon={LinkedInIcon} className="mt-4">
								Follow on LinkedIn
							</SocialLink>
							<SocialLink
								href={MAIL}
								icon={MailIcon}
								className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
							>
								{MAIL.replace("mailto:", "")}
							</SocialLink>
						</ul>
					</div>
				</div>
			</Container>
		</>
	);
}
