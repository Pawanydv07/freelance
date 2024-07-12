import React from 'react';

const categories = [
  'JavaScript', 'React', 'HTML', 'Python', 'Java', 'Node.js', 'Go', 'Ruby on Rails',
  'C++', 'C#', 'PHP', 'Swift', 'Kotlin', 'TypeScript', 'SQL', 'R', 'MATLAB', 
  'Perl', 'Scala', 'Dart', 'Rust', 'Objective-C', 'Haskell', 'Elixir', 'F#', 
  'Groovy', 'Lua', 'COBOL', 'Fortran', 'Shell Scripting', 'Visual Basic', 
  'Assembly Language', 'Pascal', 'Ada', 'Lisp', 'Prolog', 'Erlang'
];

const CategoryMenu = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
