export const AvatarGroup = ({ avatars }) => (
    <div className="flex items-center justify-center">
      <div className="inline-flex -space-x-4 overflow-hidden rounded-lg">
        {avatars.map((src, index) => (
          <img key={index} className="h-10 w-10 rounded-full border-2 border-white" src={src} alt={`Avatar ${index + 1}`} />
        ))}
        {avatars.length > 3 && (
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-sm font-medium">
            +{avatars.length - 3}
          </span>
        )}
      </div>
    </div>
  );