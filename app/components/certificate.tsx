import Link from "next/link";

const CertificateCard = ({ title, image, date, link }) => {
  return (
    <Link
      href={link}
      className="grid grid-rows-[auto,1fr,auto] w-full border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {/* Image Section */}
      <div className="w-full h-48 sm:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </Link>
  );
};

export default CertificateCard;