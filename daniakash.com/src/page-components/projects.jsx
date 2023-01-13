import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import clsx from "clsx";

const projects = [
	{
		name: "OSlash - Browser Extension",
		description:
			"Shortcuts for work! Founding Engineer & team lead of the v1 of OSlash for Chrome, Safari & Firefox.",
		link: { href: "https://www.oslash.com", label: "Get OSlash" },
		logo: '/images/assets/oslash.png',
	},
	{
		name: "Pickyourtrail - Travel Planner App",
		description:
			"Solo Engineer behind the cross platform PYT mobile app till v1.8, built with React Native, available for Android & iOS.",
		link: { href: "https://play.google.com/store/apps/details?id=com.pickyourtrail&hl=en&gl=US", label: "Get the app" },
		logo: '/images/assets/pyt.png',
	},
  {
    name: 'React Native Toolkit',
    description: 'High quality react-native libraries I built for use in personal projects - fully open sourced! ❤️',
    link: { href: 'https://github.com/react-native-toolkit', label: 'github/react-native-toolkit'},
    logo: '/images/assets/react-native-toolkit.png',
  },
  {
    name: 'React Native Docs',
    description: 'Part of the official React Native Docs rewrite effort & wrote significant part of the docs, including vital elements like Animated & PanResponder',
    link: { href: 'https://github.com/facebook/react-native-website/issues/1579', label: 'Link to Project'},
    logo: '/images/assets/react-native.svg',
  },
	{
		name: "Pickyourtrail - Travel Guide",
		description:
			"A content-rich SEO friendly Travel guide website built before the days of Gatsby & Next.js - built along with a custom in-house React Framework",
		link: { href: "https://pickyourtrail.com/guides/", label: "Checkout the guides" },
		logo: '/images/assets/pyt-guides.png',
	},
	{
		name: "JavaScript by Example - Book (2017)",
		description:
			"Author of the book covering modern JavaScript programming with real web apps",
		link: { href: "https://www.oreilly.com/library/view/javascript-by-example/9781788293969/", label: "Read the book" },
		logo: '/images/assets/js-book.jpeg',
    noBg: true
	},
	{
		name: "Learning Git - Video Course",
		description:
			"A video course on teaching git to new developers on the GUVI platform",
		link: { href: "https://www.guvi.in/courses/git_git", label: "Course Videos" },
		logo: '/images/assets/git.jpg',
	},
];

function LinkIcon(props) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function Projects() {
	return (
		<>
			{/* TODO: figure out a way for title tags */}
			{/* <Head>
				<title>Projects - Spencer Sharp</title>
				<meta
					name="description"
					content="Things I’ve made trying to put my dent in the universe."
				/>
			</Head> */}
			<SimpleLayout
				title="Things I’ve built throughout my career"
				intro="I’ve worked on tons of little projects, but these are the ones that I’m most proud of. These include apps I have built at work, training programs, books, video courses & other open source libraries I have built over the years."
			>
				<ul
					role="list"
					className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
				>
					{projects.map((project) => (
						<Card as="li" key={project.name}>
							<div className={clsx("relative z-10 flex w-12 items-center justify-center",
              project.noBg && "h-16",
              project.noBg || "h-12 rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
              )}>
								<img src={project.logo} alt="" className={clsx(project.noBg || 'h-8 w-8 rounded-full', project.noBg && 'h-16 w-12')} />
							</div>
							<h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
								<Card.Link href={project.link.href} target="_blank" rel="noreferrer">{project.name}</Card.Link>
							</h2>
							<Card.Description>{project.description}</Card.Description>
							<p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
								<LinkIcon className="h-6 w-6 flex-none" />
								<span className="ml-2">{project.link.label}</span>
							</p>
						</Card>
					))}
				</ul>
			</SimpleLayout>
		</>
	);
}
