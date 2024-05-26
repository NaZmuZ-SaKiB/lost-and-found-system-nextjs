import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

import { TTeamMember } from "@/constants";

type TProps = {
  member: TTeamMember;
};

const TeamMemberCard = ({ member }: TProps) => {
  return (
    <div className="rounded-3xl flex-1 p-4 overflow-hidden basis-[250px]">
      <div className="mx-auto border-2 border-pink-500 rounded-full p-1 h-[150px] w-[150px]">
        <div className="size-full rounded-full overflow-hidden relative">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="mt-3  text-center">
        <h5 className=" text-lg text-gray-700 font-bold mb-2">{member.name}</h5>
        <p className="flex justify-center items-center gap-2 mb-2">
          <IoCall /> {member.contactNo}
        </p>
        <p className="flex justify-center items-center gap-2">
          <IoLocationSharp /> {member.address}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
