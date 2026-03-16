import AboutBanner from "./components/AboutBanner/AboutBanner";
import Milestones from "./components/Milestones/Milestones";
import ReachOut from "./components/ReachOut/ReachOut";

export default function About() {
  return (
    <div className="h-full min-h-dvh">
      <AboutBanner />
      <Milestones />
      <ReachOut />
    </div>
  );
}
