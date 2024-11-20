import { createResource } from "./generateEmbeddings";
import { aboutContent } from "./parse-content/about-content";
import { blogContent } from "./parse-content/blog-content";
import { careerContent } from "./parse-content/career-content";
import { nowContent } from "./parse-content/now-content";
import { projectsContent } from "./parse-content/projects-content";
import { resumeContent } from "./parse-content/resume-content";
import { socialContent } from "./parse-content/social-content";
import { speakingContent } from "./parse-content/speaking-content";
import { usesContent } from "./parse-content/uses-content";
import type { AIDocumentType } from "./utils/ai-document-type";

const about = await aboutContent();
const blog = await blogContent();
const career = careerContent();
const now = await nowContent();
const project = projectsContent();
const resume = await resumeContent();
const social = socialContent();
const speaking = speakingContent();
const uses = usesContent();

const index = async (data: AIDocumentType[]) => {
  return Promise.all(
    data.map(async (each) => {
      return await createResource(each);
    }),
  );
};

console.log("Creating resources and embeddings...");
console.log("This may take a while...");
console.log("Indexing about content...");
await index(about);
console.log("About content indexed.");
console.log("Indexing blog content...");
await index(blog);
console.log("Blog content indexed.");
console.log("Indexing career content...");
await index(career);
console.log("Career content indexed.");
console.log("Indexing now content...");
await index(now);
console.log("Now content indexed.");
console.log("Indexing project content...");
await index(project);
console.log("Project content indexed.");
console.log("Indexing resume content...");
await index(resume);
console.log("Resume content indexed.");
console.log("Indexing social content...");
await index(social);
console.log("Social content indexed.");
console.log("Indexing speaking content...");
await index(speaking);
console.log("Speaking content indexed.");
console.log("Indexing uses content...");
await index(uses);
console.log("Uses content indexed.");

process.exit(0);
