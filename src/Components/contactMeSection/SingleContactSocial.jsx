const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl glass h-12 w-12 text-cyan hover:text-orange hover:-translate-y-1 transition-all duration-300 rounded-full p-3 flex items-center justify-center ">
      <a href={link} target="_blank" rel="noreferrer" className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
