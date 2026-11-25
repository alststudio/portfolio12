import { PROJECTS, type Project } from '../data';
import { reveal, useInViewAnimation } from '../hooks/useInViewAnimation';

function ProjectItem({ project }: { project: Project }) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  return (
    <div ref={ref}>
      <div {...reveal(inView, '0.1s')} className="ml-20 md:ml-28">
        <h3 className="font-mondwest text-2xl font-semibold text-[#051A24] md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-[#051A24]/70 md:text-base">{project.description}</p>
      </div>
      <div {...reveal(inView, '0.2s')}>
        <img
          src={project.image}
          alt={project.name}
          className="mt-8 w-full rounded-2xl object-cover shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
