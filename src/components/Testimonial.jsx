import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const testimonials = [
  {
    id: 1,
    name: 'Paula Wilson',
    title: 'Media Analyst',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800', 
    text: 'Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt.',
  }
];

const TestimonialSlider = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <h2 className="text-2xl py-8">TESTIMONIALS</h2>
      <div className="relative w-full max-w-4xl bg-white rounded-lg p-8">
        <div className="text-center">
          <img
            src={testimonials[0].image}
            alt={testimonials[0].name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 p-4">{testimonials[0].text}</p>
          <p className="font-bold text-green-600">{testimonials[0].name}</p>
          <p className="text-gray-500">{testimonials[0].title}</p>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
          disabled
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
          disabled
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
