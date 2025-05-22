import React from 'react';

const foodArticles = [
  {
    category: "FOOD TIPS",
    title: "Typography is all around us. Let's enjoy it & get inspired",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "COOKING TIPS",
    title: "Pinterest keyword searches that will help your cooking activities",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=400&q=80"
  },
  {
    category: "KITCHEN TIPS",
    title: "Learn: kitchen tool is difficult when you focus on tech features",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80"
  },
  {
    category: "RECIPE TIPS",
    title: "Instagram accounts that are doing very well with their food",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80"
  },
  {
    category: "DESIGN TIPS",
    title: "Some recipe design exploration using the Poppins font",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=400&q=80"
  },
  {
    category: "EDITORIAL TIPS",
    title: "Editorial food inspirations that can be applied to projects",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80"
  }
];

const Article = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 px-4 py-12 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        

        <div className="md:col-span-2 bg-white rounded-xl shadow overflow-hidden">
          <img
            src={foodArticles[0].image}
            alt={foodArticles[0].title}
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide mb-2">
              {foodArticles[0].category}
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              {foodArticles[0].title}
            </h2>
          </div>
        </div>

        {/* Two Smaller Articles */}
        <div className="space-y-6">
          {foodArticles.slice(1, 3).map((article, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow overflow-hidden flex">
              <div className="p-4 flex-1">
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide mb-1">
                  {article.category}
                </p>
                <h3 className="text-sm font-bold text-gray-900 leading-snug">
                  {article.title}
                </h3>
              </div>
              <img
                src={article.image}
                alt={article.title}
                className="w-28 h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Three More Articles */}
        {foodArticles.slice(3).map((article, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide mb-1">
                {article.category}
              </p>
              <h3 className="text-base font-bold text-gray-900 leading-snug">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Page Number - Static at Bottom Right */}
      <div className="absolute bottom-6 right-8 text-gray-400 font-semibold text-lg">
        <p>2</p>
      </div>
    </div>
  );
};

export default Article;
