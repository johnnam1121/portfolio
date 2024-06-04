import Image from 'next/image';
import { ProjectImages } from './ProjectImages';

export default function ProjectImageGallery() {
  return (
    <div className='pt-10 w-2/3 sm:w-3/4 sm:pt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:w-2/3 lg:pt-20 lg:grid-cols-4 mx-auto justify-center align-top'>
      {ProjectImages.map((image, index) => (
        <div className="relative hover:-translate-y-3 hover:translate-x-1 duration-200 my-2 sm:px-1 lg:p-2 lg:my-4 group" key={index}>
          <a href={image.link} target='_blank' rel="noopener noreferrer">
            <img className="h-full w-full object-cover border-2 border-secondary shadow-lg rounded-lg transition-opacity duration-200 group-hover:opacity-50" src={image.src.src} alt={image.alt} />
            <div className='w-1/2 h-1/2 rounded-lg border-1 border-secondary shadow-lg translate-y-1/2 absolute inset-0 opacity-0 group-hover:opacity-70 duration-200 bg-primary mx-auto flex flex-col items-center justify-center'>
              <p className="text-sm text-center text-mainText">
                {image.heading}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

{/* Featured image */ }
{/* <div className='w-3/4 mx-auto items-center justify-center hidden md:flex'>
            <img style={featuredImageSizing()} className="h-3/4 rounded-lg" src={featuredImage} alt="" />
            <div className='flex flex-col ml-10'>
              <h1>test</h1>
              <p>some more test</p>
            </div>
          </div> */}
{/* Non-featured images */ }

// onMouseDown={() => isSmallScreen ? (undefined) : (handleImageData(image.src.src))}


// const featuredImageSizing = () => {
//   if (window.innerWidth >= 1400) {
//     return { width: '50vw', height: '50vh' };
//   } else if (window.innerWidth >= 1024) {
//     return { width: '100vw', height: '20vh' };
//   } else if (window.innerWidth >= 768) {
//     return { width: '100vw', height: '15vh' };
//   } else if (window.innerWidth >= 640) {
//     return { width: '100vw', height: '20vh' };
//   } else {
//     return { width: '100vw', height: '20vh' };
//   }
// };


// Define a function to handle image selection
// const handleImageData = (selectedImage) => {
//   setFeaturedImage(selectedImage);
// };

// Filter out the featured image from the non-featured images
// const nonFeaturedImages = isSmallScreen ? (ProjectImages) : (ProjectImages.filter(image => image.src.src !== featuredImage));
// const [featuredImage, setFeaturedImage] = useState(ProjectImages[0].src.src);
