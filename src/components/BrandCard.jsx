import { AiFillDislike, AiFillLike } from "react-icons/ai";

const BrandCard = ({ name, image, upVotes, downVotes, voteUp, voteDown, index }) => {
  return (
    <div className="flex flex-col gap-2 w-[250px]">
      <div className="w-full h-[250px]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-left">{name}</h2>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div>{upVotes} Up</div>
          <div>0 Down</div>
        </div>

        <div className="flex gap-2">
          <div className="w-8 h-8 border flex place-items-center justify-center rounded-full" onClick={() => voteUp(index)}>
            <AiFillLike />
          </div>

          <div className="w-8 h-8 border flex place-items-center justify-center rounded-full">
            <AiFillDislike />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
