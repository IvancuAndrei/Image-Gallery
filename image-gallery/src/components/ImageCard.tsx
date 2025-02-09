const ImageCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-lg max-w-sm">
      <img
        src="https://picsum.photos/200/300"
        alt="image"
        className="px-6 py-4 max-w-full max-h-60"
      ></img>
      <div>
        <span>#tag1</span>
        <span>#tag2</span>
        <span>#tag3</span>
      </div>
    </div>
  );
};

export default ImageCard;
