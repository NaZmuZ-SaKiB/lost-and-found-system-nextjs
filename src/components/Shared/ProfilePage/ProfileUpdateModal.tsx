"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaEdit } from "react-icons/fa";

const ProfileUpdateModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-pink-500 hover:bg-pink-600">
          <FaEdit className="mr-2" /> Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <div className=""></div>
        <DialogFooter>
          <Button
            className={`bg-pink-500 hover:bg-pink-600 disabled:bg-gray-400 disabled:animate-pulse`}
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileUpdateModal;
