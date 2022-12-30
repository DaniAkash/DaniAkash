import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

function ToolsSection({ children, ...props }) {
	return (
		<Section {...props}>
			<ul role="list" className="space-y-16">
				{children}
			</ul>
		</Section>
	);
}

function Tool({ title, href, children }) {
	return (
		<Card as="li">
			<Card.Title as="h3" href={href}>
				{title}
			</Card.Title>
			<Card.Description>{children}</Card.Description>
		</Card>
	);
}

export default function Uses() {
	return (
		<>
			{/* TODO: figure out how to add titles */}
			{/* <Head>
				<title>Uses - Spencer Sharp</title>
				<meta
					name="description"
					content="Software I use, gadgets I love, and other things I recommend."
				/>
			</Head> */}
			<SimpleLayout
				title="Software I use, gadgets I love, and other things I recommend."
				intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
			>
				<div className="space-y-20">
					<ToolsSection title="Workstation">
						<Tool title="16” MacBook Pro, Intel Core i9, 32GB RAM (2019)">
							M1 Macbooks are great but I'm sticking to my good old Intel Mac which still handles heavy workloads without a hitch.
						</Tool>
						<Tool title="4k 32” LG UltraFine Display Ergo">
							Bigger the display, bigger the motivation to use it to read your code 😆 - also the the ergonomic stand that comes with this model 🤌
						</Tool>
						<Tool title="Keychron K4 Wireless Mechanical Keyboard">
							Mechanical Keyboards are ❤️ and the satisfying clicks of the normal profile Keychron keyboard is the reason I code most of the time. Fun-fact, I learnt typing with a traditional type-writer which I badly miss now.
						</Tool>
						<Tool title="Logitech MX Master 3">
							As a power user of VSCode, tmux & the tiles app in the Mac, I rarely need to click stuff on the screen. But when I do, I do it with the most erogonomic MX Master 3.
						</Tool>
						<Tool title="Monarch Elevate: Height Adjustable Table">
							Because, sitting too much while you are thinking about what to name that variable is bad for your health. Always switch between sitting & standing every 1 hour & 15 mins respectively.
						</Tool>
            <Tool title="Senheisser HD 458BT headphones">
							Most trusted headphones for work - taking video calls, watching egghead lessons, listening to podcasts while coding - can't live without this one.
						</Tool>
					</ToolsSection>
					<ToolsSection title="Development tools">
						<Tool title="VSCodium">
							A completely open-source variant of the VSCode with its own marketplace that supports all my vital extensions & a great logo.
						</Tool>
						<Tool title="Oh My Zsh!">
							I can't use my mac terminal without installing Oh My Zsh & setting up my favorite theme. Who wants to cd into a directory, when you can just type the directory name directly!
						</Tool>
						<Tool title="tmux">
							With large screens comes no reason to open multiple tabs in your terminal - just keep the processes running across the tmux profiles.
						</Tool>
					</ToolsSection>
					<ToolsSection title="Design">
						<Tool title="Figma">
							They say figma is a great design tool, but I use it to build flow charts & stick-figure prototypes of my weekend projects. I love it & I can't think of using another tool to do this.
						</Tool>
            <Tool title="Excalidraw">
							Professional quality scribbling & a very funny logo maker. I'd say this is my preferred design tool.
						</Tool>
					</ToolsSection>
					<ToolsSection title="Productivity">
						<Tool title="Tiles">
							By removing the use of mouse to resize & move windows across the screen, I'm 2x more efficient but also 2x less efficient by wasting time deciding which window to place in which section of the screen.
						</Tool>
						<Tool title="Notion">
							Pretty much all my ideas, projects, plans & thoughts about my digital life are recorded in the generous free tier provided the Notion app.
						</Tool>
						<Tool title="Spark">
							Keeping my inbox clean by only reading the messages filtered by this great email app.
						</Tool>
						<Tool title="Cron">
							They say it's an extremely powerful tool for managing calendars, but I use it because it's event reminders are so much better than the native mac calendar app.
						</Tool>
            <Tool title="Simplenote">
							Replacing the need for paper in my life. Works across all my devices - take a quick note whenever you want & forget about it forever.
						</Tool>
					</ToolsSection>
				</div>
			</SimpleLayout>
		</>
	);
}
