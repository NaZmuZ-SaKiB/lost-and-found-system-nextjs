import TeamMember1 from "@/assets/images/team-member-1.webp";
import TeamMember2 from "@/assets/images/team-member-2.webp";
import TeamMember3 from "@/assets/images/team-member-3.webp";
import TeamMember4 from "@/assets/images/team-member-4.webp";

export type TTeamMember = {
  name: string;
  position: string;
  image: string;
};

export const TeamMembers: TTeamMember[] = [
  {
    name: "John Doe",
    position: "Founder",
    image: TeamMember1.src,
  },

  {
    name: "Michael Johnson",
    position: "Coordinator",
    image: TeamMember2.src,
  },
  {
    name: "Jane Smith",
    position: "Community Manager",
    image: TeamMember3.src,
  },
  {
    name: "Emily Davis",
    position: "Moderator",
    image: TeamMember4.src,
  },
];
