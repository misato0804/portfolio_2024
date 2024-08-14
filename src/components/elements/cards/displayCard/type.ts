export type Project = {
  title: string;
  description: string;
  GithubLink: string;
  DemoLink: string;
};

export type DisplayCardProps = {
  project: Project;
};
