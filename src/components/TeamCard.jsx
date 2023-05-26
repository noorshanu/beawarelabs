function TeamCard({ TeamLogo, Details, TeamIcon, TeamName, TeamDetails }) {
  return (
    <>
      <div className="d px-4">
        <div className="flex flex-col h-full rounded-md p-7 bg-white">
          <a href="" className="flex max-w-[200px] w-fit ">
            <img
              src={TeamLogo}
              alt=""
              className="text-transparent object-contain w-[150px] h-[50px]"
            />
          </a>
          <div className="text-black flex flex-grow text-sm mt-7  items-center ">
            {Details}
          </div>
          <div className="flex mt-[30px]">
            <img
              src={TeamIcon}
              alt=""
              className="w-[60px] h-[60px] rounded-full object-contain"
            />
            <div className="flex flex-col justify-center ml-3">
              <p className="text-sm font-medium text-black mb-[5px]">
                {TeamName}
              </p>
              <p className="text-sm font-medium text-black m-0">
                {TeamDetails}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
