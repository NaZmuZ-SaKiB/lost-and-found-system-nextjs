import TeamMemberCard from "@/components/Card/TeamMemberCard";
import { TeamMembers } from "@/constants";

const OurTeam = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-semibold text-center">Our Team</h2>
        <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

        <div className="flex flex-wrap gap-3 mt-10">
          {TeamMembers.map((member, index) => (
            <TeamMemberCard key={index + "team member"} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
