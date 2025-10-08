import { RocketLaunchIcon } from '@heroicons/react/24/outline';

const tractionData = [
  {
    number: '1500+',
    title: 'Startups',
    description: 'We have served over last 8 Years',
    color: 'text-indigo-700',
    bg: 'bg-indigo-100',
  },
  {
    number: '12+',
    title: 'Countries',
    description: 'Where our customers are located',
    color: 'text-orange-500',
    bg: 'bg-orange-100',
  },
  {
    number: '98%',
    title: 'Customer Satisfaction',
    description: 'Why not 100%? We are humans after all.',
    color: 'text-indigo-700',
    bg: 'bg-indigo-100',
  },
  {
    number: '$15+',
    title: 'Million Raised',
    description: 'By our Startup Clients',
    color: 'text-orange-500',
    bg: 'bg-orange-100',
  },
  {
    number: '30+',
    title: 'Angel & VC Funds',
    description: 'In our Network',
    color: 'text-indigo-700',
    bg: 'bg-indigo-100',
  },
];

const Section = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20">
      {/* Centered Tag */}
      <div className="flex justify-center mb-4">
        <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
          In startup
        </span>
      </div>

      {/* Centered Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Current Traction
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {tractionData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm text-center transition-transform transform hover:-translate-y-2 hover:shadow-lg duration-300"
          >
            {/* Icon with BG */}
            <div className={`mx-auto mb-4 rounded-full h-14 w-14 flex items-center justify-center ${item.bg}`}>
              <RocketLaunchIcon className={`h-6 w-6 ${item.color}`} />
            </div>

            {/* Number */}
            <h3 className={`text-3xl font-bold ${item.color}`}>{item.number}</h3>

            {/* Title */}
            <p className="text-lg font-medium text-gray-800">{item.title}</p>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
