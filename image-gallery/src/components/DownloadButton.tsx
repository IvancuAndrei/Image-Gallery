import { Download } from "lucide-react";

const DownloadButton = ({ idImage }: { idImage: string }) => {
  const handleClick = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();

    const API_KEY = "g5mgouoMBvFFi2_J5xnUvuL9oUmYtaOw3XHpS-XIVsY";

    const downloadLocation = `https://api.unsplash.com/photos/${idImage}/download?client_id=${API_KEY}`;

    try {
      const response = await fetch(downloadLocation);
      const data = await response.json();

      if (!response.ok) {
        alert("Error fetching download location.");
        return;
      }

      const imageUrl = data.url;
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        alert("Error downloading image.");
        return;
      }

      const blob = await imageResponse.blob();
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `image-${idImage}.jpg`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      URL.revokeObjectURL(downloadLink.href);
    } catch (error) {
      alert("Error during the download process.");
      console.error(error);
    }
  };

  return (
    <Download
      size={24}
      onClick={handleClick}
      className="text-gray-500 cursor-pointer hover:text-gray-800 transition-all duration-200"
    />
  );
};

export default DownloadButton;
