import TeamMember1 from "@/assets/images/team-member-1.jpg";
import TeamMember2 from "@/assets/images/team-member-2.jpg";
import TeamMember3 from "@/assets/images/team-member-3.jpg";
import TeamMember4 from "@/assets/images/team-member-4.jpg";

export type TTeamMember = {
  name: string;
  contactNo: string;
  address: string;
  image: string;
};

export const TeamMembers: TTeamMember[] = [
  {
    name: "John Doe",
    contactNo: "+1234567890",
    address: "Springfield, IL 62704, USA",
    image: TeamMember1.src,
  },

  {
    name: "Michael Johnson",
    contactNo: "+1122334455",
    address: "Gotham, NJ 07001, USA",
    image: TeamMember2.src,
  },
  {
    name: "Jane Smith",
    contactNo: "+1987654321",
    address: "Metropolis, NY 10001, USA",
    image: TeamMember3.src,
  },
  {
    name: "Emily Davis",
    contactNo: "+1223344556",
    address: "Star City, CA 90210, USA",
    image: TeamMember4.src,
  },
];
