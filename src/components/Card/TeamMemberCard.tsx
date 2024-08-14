import Image from "next/image";

import { TTeamMember } from "@/constants";
import ShineBorder from "../magicui/shine-border";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

type TProps = {
  member: TTeamMember;
};

const TeamMemberCard = ({ member }: TProps) => {
  return (
    <div className="rounded-3xl flex-1 p-4 overflow-hidden basis-[250px]">
      <ShineBorder
        borderRadius={1000}
        borderWidth={2}
        className="relative mx-auto border-2 border-transparent rounded-full h-[150px] min-w-[150px] w-[150px] p-0 flex items-center justify-center"
        color={["#FF69B4", "#DA70D6", "#DA70D6"]}
      >
        <div className="size-[138px] rounded-full overflow-hidden relative">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-center"
          />
        </div>
      </ShineBorder>
      <div className="mt-3  text-center">
        <h5 className="text-xl text-slate-700 font-bold">{member.name}</h5>
        <p className="text-slate-600 flex justify-center items-center gap-2 mb-3">
          {member.position}
        </p>

        <div className="flex justify-center gap-2 items-center">
          <FaFacebook className="text-xl text-blue-600/80 hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="text-xl text-blue-400/80 hover:text-blue-400 cursor-pointer" />
          <FaLinkedin className="text-xl text-blue-800/80 hover:text-blue-800 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
