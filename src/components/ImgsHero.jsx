import { useState, useEffect } from "react";

const images = [
  "../../public/images/Hero1.jpg",
  "../../public/images/Hero2.jpg",
  "../../public/images/Hero3.jpg",
  "../../public/images/Hero4.jpg",
  "../../public/images/Hero5.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // تغيير الصورة كل 3 ثواني

    return () => clearInterval(interval); // تنظيف الـ interval عند إلغاء تحميل المكون
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-96 h-48 object-cover rounded-xl shadow-lg transition-all duration-500"
      />
    </div>
  );
};

export default ImageSlider;