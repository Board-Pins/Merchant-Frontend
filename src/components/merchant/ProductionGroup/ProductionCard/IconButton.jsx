export const IconButton = ({ src, alt, className = "" }) => (
    <button className={`w-6 ${className}`}>
      <img src={src} alt={alt} />
    </button>
  );
  