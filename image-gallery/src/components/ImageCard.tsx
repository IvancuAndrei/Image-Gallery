const ImageCard = (key: string, imageURL: string) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-lg max-w-sm">
      <img
        src={imageURL}
        alt="image"
        className="px-6 py-4 max-w-full max-h-60"
      ></img>
      <div>
        <span className="rounded-lg border-amber-950">#tag1</span>
        <span className="rounded-lg border-amber-400">#tag2</span>
        <span className="rounded-lg border-amber-800">#tag3</span>
      </div>
    </div>
  );
};

export default ImageCard;
