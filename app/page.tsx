import ProjectList from "./_components/ProjectList";
import SmallAboutMe from "./_components/SmallAboutMe";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SmallAboutMe/>
      <ProjectList/>
    </div>
  );
}
