const heroDesktop = "./images/image-hero-desktop.jpg";
const heroMobile = "./images/image-hero-mobile.jpg";
const logoMastercraft = "./images/logo-mastercraft.svg";

interface HeroProps {
  onBackProject: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

const Hero = ({ onBackProject, isBookmarked, onToggleBookmark }: HeroProps) => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="w-full h-64 md:h-[400px] overflow-hidden">
        <picture>
          <source srcSet={heroDesktop} media="(min-width: 768px)" />
          <img
            src={heroMobile}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Content Card */}
      <div className="max-w-3xl mx-auto px-6 -mt-8 md:-mt-16 relative z-10">
        <div className="relative bg-white rounded-lg shadow-lg pt-12 pb-8 md:pt-14 md:pb-10 px-6 md:px-12 text-center">
          {/* Logo overlapping card */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <img
              src={logoMastercraft}
              alt="Mastercraft"
              className="w-14 h-14 md:w-16 md:h-16"
            />
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-4">
            Mastercraft Bamboo Monitor Riser
          </h1>

          <p className="text-dark-gray mb-6 md:mb-8 text-base md:text-lg">
            A beautiful &amp; handcrafted monitor stand to reduce neck and eye
            strain.
          </p>

          {/* Actions */}
{/* Actions */}
<div className="flex items-center justify-between gap-4">
  {/* Back button */}
  <button
    onClick={onBackProject}
    className="bg-moderate-cyan hover:bg-dark-cyan text-white font-bold
               flex items-center justify-center
               h-12 px-6
               rounded-full transition-colors
               w-full sm:w-auto text-base"
  >
    Back this project
  </button>

  {/* Bookmark */}
  {/* Mobile: only round icon */}
  <button
    onClick={onToggleBookmark}
    aria-pressed={isBookmarked}
    className="flex md:hidden items-center justify-center h-12 w-12 rounded-full transition-colors
      bg-gray-200 hover:bg-gray-300"
  >
    <svg
      width="40"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
    >
      <g fill="none" fillRule="evenodd">
        <circle
          fill={isBookmarked ? "hsl(176, 72%, 28%)" : "#2F2F2F"}
          cx="20"
          cy="20"
          r="20"
        />
        <path
          fill={isBookmarked ? "#fff" : "#B1B1B1"}
          d="M16 13v14l4-4.058L24 27V13z"
        />
      </g>
    </svg>
  </button>

  {/* Desktop: pill with logo on left + text */}
  <button
    onClick={onToggleBookmark}
    aria-pressed={isBookmarked}
    className={`hidden md:flex items-center justify-start rounded-full transition-colors
                flex-shrink-0 h-12 pl-0 pr-6
        ${
          isBookmarked
            ? "bg-[#EEF6F5] hover:bg-[#DFF0ED]"
            : "bg-gray-200 hover:bg-gray-300 md:bg-[#F2F2F2] md:hover:bg-[#E2E2E2]"
        }`}
  >
    {/* Icon fixed on left, same height as button */}
    <div className="flex items-center justify-center h-12 w-12">
      <svg
        width="40"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
      >
        <g fill="none" fillRule="evenodd">
          <circle
            fill={isBookmarked ? "hsl(176, 72%, 28%)" : "#2F2F2F"}
            cx="20"
            cy="20"
            r="20"
          />
          <path
            fill={isBookmarked ? "#fff" : "#B1B1B1"}
            d="M16 13v14l4-4.058L24 27V13z"
          />
        </g>
      </svg>
    </div>

    <span
      className={`font-bold ml-2 ${
        isBookmarked ? "text-moderate-cyan" : "text-dark-gray"
      }`}
    >
      {isBookmarked ? "Bookmarked" : "Bookmark"}
    </span>
  </button>
</div>



        </div>
      </div>
    </div>
  );
};

export default Hero;
