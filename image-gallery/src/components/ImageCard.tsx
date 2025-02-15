type ImageCardProps = {
  description: string;
  url: string;
  tags: string[];
  name: string;
};

const ImageCard = ({ description, url, tags, name }: ImageCardProps) => {
  return (
    <div className="flex flex-col items-start bg-white rounded-2xl shadow-lg w-80 h-auto overflow-hidden border-gray-300">
      <img src={url} alt={description} className="w-full"></img>
      <div className="p-6">
        <div className="font-serif text-xl font-semibold text-gray-700">
          Photo by {name}
        </div>
        <ul className="py-2">
          <li>
            <strong>Views: </strong>
            300
          </li>
          <li>
            <strong>Downloads: </strong>
            100
          </li>
          <li>
            <strong>Likes: </strong>
            200
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap p-4 gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-cyan-500 px-2 py-1 text-white border-cyan-700"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
