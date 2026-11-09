const SingleInfo = ({ text, Image }) => {
  return (
    <div className="glass flex gap-4 items-center justify-start rounded-xl px-4 py-3">
      <Image className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
