import Posts from "@/components/adminPosts";
import { SideBar } from "@/components/sideBar";
import Upload from "@/components/upload";

const UploadLatestWork = async () => {


  return (
    <>
      <SideBar />
      <div className="w-5/6 ml-auto">
      <Upload />
      <Posts />
      </div>
    </>
  );
};

export default UploadLatestWork;
