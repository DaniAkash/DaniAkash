import clsx from "clsx";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import {
	TwitterIcon,
	InstagramIcon,
	GitHubIcon,
	LinkedInIcon,
} from "@/components/SocialIcons";
import image1 from "@/images/photos/image-1.jpg";
import image3 from "@/images/photos/image-2.jpg";
import image2 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";
import doodleblueLogo from "@/images/logos/doodleblue.gif";
import redblacktreeLogo from "@/images/logos/redblacktree.jpeg";
import pickyourtrailLogo from "@/images/logos/pickyourtrail.jpeg";
import oslashLogo from "@/images/logos/oslash.png";
import guviLogo from "@/images/logos/guvi.jpeg";
import wundergraphLogo from '@/images/logos/wundergraph.jpeg';
import clarifaiLogo from '@/images/logos/clarifai.png';
import { TWITTER, INSTAGRAM, GITHUB, LINKEDIN } from "@/constants/links";

function MailIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
				className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
			/>
			<path
				d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
				className="stroke-zinc-400 dark:stroke-zinc-500"
			/>
		</svg>
	);
}

function BriefcaseIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
				className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
			/>
			<path
				d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
				className="stroke-zinc-400 dark:stroke-zinc-500"
			/>
		</svg>
	);
}

function ArrowDownIcon(props) {
	return (
		<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
			<path
				d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ArrowTopRight(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
			/>
		</svg>
	);
}

function Article({ article }) {
	return (
		<Card as="article">
			<Card.Title href={article.url}>
				{article.title}
			</Card.Title>
			<Card.Eyebrow as="time" dateTime={article.date} decorate>
				{article.date}
			</Card.Eyebrow>
			<Card.Description>{article.description}</Card.Description>
			<Card.Cta>Read article</Card.Cta>
		</Card>
	);
}

function SocialLink({ icon: Icon, ...props }) {
	return (
		<a className="group -m-1 p-1" {...props} target="_blank" rel="noreferrer">
			<Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
		</a>
	);
}

function Newsletter() {
	return (
		<form
			action="/thank-you"
			className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
		>
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<MailIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Stay up to date</span>
			</h2>
			<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
				Get notified when I publish something new, and unsubscribe at any time.
			</p>
			<div className="mt-6 flex">
				<input
					type="email"
					placeholder="Email address"
					aria-label="Email address"
					required
					className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
				/>
				<Button type="submit" className="ml-4 flex-none">
					Join
				</Button>
			</div>
		</form>
	);
}

function Resume() {
	let resume = [
		{
			company: "Clarifai",
			title: "Senior Software Engineer",
			start: "2023",
			end: {
				label: "Present",
				dateTime: new Date().getFullYear(),
			},
			logo: clarifaiLogo.src,
		},
		{
			company: "Wundergraph",
			title: "Senior Software Engineer",
			start: "2023",
			logo: wundergraphLogo.src,
			end: "2023",
		},
		{
			company: "OSlash",
			title: "Eng. Manager (Chrome Extension)",
			logo: oslashLogo.src,
			start: "2020",
			end: "2023",
		},
		{
			company: "Guvi Geek Networks",
			title: "Mentor (Part-time)",
			logo: guviLogo.src,
			start: "2019",
			end: "2020",
		},
		{
			company: "Pickyourtrail",
			title: "Software Engineer (React)",
			logo: pickyourtrailLogo.src,
			start: "2017",
			end: "2020",
		},
		{
			company: "RedBlackTree",
			title: "Software Engineer (React Native)",
			logo: redblacktreeLogo.src,
			start: "2016",
			end: "2017",
		},
		{
			company: "doodleblue",
			title: "Web Developer (R&D)",
			logo: doodleblueLogo.src,
			start: "2016",
		},
	];

	return (
		<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<BriefcaseIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Work</span>
			</h2>
			<ol className="mt-6 space-y-4">
				{resume.map((role, roleIndex) => (
					<li key={roleIndex.toString()} className="flex gap-4">
						<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
							<img
								src={role.logo}
								alt=""
								className="h-7 w-7 rounded-full"
								unoptimized
							/>
						</div>
						<dl className="flex flex-auto flex-wrap gap-x-2">
							<dt className="sr-only">Company</dt>
							<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
								{role.company}
							</dd>
							<dt className="sr-only">Role</dt>
							<dd className="text-xs text-zinc-500 dark:text-zinc-400">
								{role.title}
							</dd>
							<dt className="sr-only">Date</dt>
							<dd
								className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
								aria-label={`${role.start.label ?? role.start} ${
									role?.end ? `until ${role.end.label ?? role.end}` : ""
								}`}
							>
								<time dateTime={role.start.dateTime ?? role.start}>
									{role.start.label ?? role.start}
								</time>{" "}
								{role?.end ? (
									<>
										<span aria-hidden="true">—</span>{" "}
										<time dateTime={role.end.dateTime ?? role.end}>
											{role.end.label ?? role.end}
										</time>
									</>
								) : null}
							</dd>
						</dl>
					</li>
				))}
			</ol>
			<Button href={LINKEDIN} variant="secondary" className="group mt-6 w-full">
				LinkedIn
				<ArrowTopRight className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
			</Button>
		</div>
	);
}

function Photos() {
	let rotations = [
		"rotate-2",
		"-rotate-2",
		"rotate-2",
		"rotate-2",
		"-rotate-2",
	];

	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{[image1, image2, image3, image4, image5].map((image, imageIndex) => {
          const propObject = {
            "transition:name": `hero-image-${imageIndex.toString()}`
          }
          return (
            <div
              key={image.src}
              className={clsx(
                "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
                rotations[imageIndex % rotations.length],
              )}
            >
              <img
                src={image.src}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
                {...propObject}
              />
            </div>
				)})}
			</div>
		</div>
	);
}

export default function Home({ articles }) {
	return (
		<>
			{/* TODO: figure out a way to set page title */}
			{/* <Head>
        <title>
          Spencer Sharp - Software designer, founder, and amateur astronaut
        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head> */}
			<Container className="mt-9">
				<div className="max-w-2xl">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
						Writer, Speaker, Hacker
					</h1>
					<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						I’m Dani, a software engineer passionate about building great
						products and engineering teams. Throughout my career I have built
						high quality apps, managed engineering teams, created training
						programs for various groups of people, helped setup roadmaps for products &
						contributed to many open source projects.
					</p>
					<div className="mt-6 flex gap-6">
						<SocialLink
							href={TWITTER}
							aria-label="Follow on Twitter"
							icon={TwitterIcon}
						/>
						<SocialLink
							href={INSTAGRAM}
							aria-label="Follow on Instagram"
							icon={InstagramIcon}
						/>
						<SocialLink
							href={GITHUB}
							aria-label="Follow on GitHub"
							icon={GitHubIcon}
						/>
						<SocialLink
							href={LINKEDIN}
							aria-label="Follow on LinkedIn"
							icon={LinkedInIcon}
						/>
					</div>
				</div>
			</Container>
			<Photos />
			<Container className="mt-24 md:mt-28">
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
					<div className="flex flex-col gap-16">
						{articles.map((article) => (
							<Article key={article.slug} article={article} />
						))}
					</div>
					<div className="space-y-10 lg:pl-16 xl:pl-24">
						{/* TODO: work on the newsletter... */}
						{/* <Newsletter /> */}
						<Resume />
					</div>
				</div>
			</Container>
		</>
	);
}

// TODO: load articles in astro friendly way
// export async function getStaticProps() {
//   if (process.env.NODE_ENV === 'production') {
//     await generateRssFeed()
//   }

//   return {
//     props: {
//       articles: (await getAllArticles())
//         .slice(0, 4)
//         .map(({ component, ...meta }) => meta),
//     },
//   }
// }
