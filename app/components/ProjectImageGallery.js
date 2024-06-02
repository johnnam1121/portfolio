import { ProjectImages } from './ProjectImages';

export default function ProjectImageGallery() {
  return (
    <div className='pt-28 sm:pt-40 lg:pt-72'>
      <div className='flex mx-auto items-center justify-center'>
        <h1>some text here</h1>
      </div>

      <div className='pt-10 w-2/3 sm:w-3/4 sm:pt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:w-2/3 lg:pt-40 lg:grid-cols-4 mx-auto justify-center'>
        {ProjectImages.map((image, index) => (
          <div className="my-2 sm:px-1 lg:p-2 lg:my-4" key={index}>
            <a href={image.link}><img className="h-full w-full object-cover border-2 border-secondary shadow-lg rounded-lg hover:-translate-y-3 duration-200" src={image.src.src} alt={image.alt} /></a>
          </div>
        ))}
      </div>
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
