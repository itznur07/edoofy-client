const ArticleCard = ({ title, date, snippet, views, comments, cover }) => {
  return (
    <div className='flex flex-col bg-white shadow-lg rounded-lg p-4 border-s border-t border-[#49BBBD]'>
      <div>
        <img
          className='w-full rounded-lg object-cover transform transition duration-500 hover:scale-105 cursor-pointer'
          src={cover}
          alt=''
        />
      </div>
      <div className='flex items-center justify-between mt-4'>
        <div className='text-gray-600 text-sm'>{date}</div>
        <div className='flex items-center space-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-600'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
              clipRule='evenodd'
            />
          </svg>
          <div className='text-gray-600 text-sm'>{views}</div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-600'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2zM5.293 7.293a1 1 0 011.414 0L9 9.586l2.293-2.293a1 1 0 011.414 1.414L10.414 11l3.293 3.293a1 1 0
                -1.414L9
                -10.414l-3.293
                -3.293a1
                -1
                -0
                -10
                -1.414l3.293
                -3.293z'
              clipRule='evenodd'
            />
          </svg>
          <div className='text-gray-600 text-sm'>{comments}</div>
        </div>
      </div>
      <div className='mt-4 font-bold text-xl'>{title}</div>
      <div className='mt-2 text-gray-700 text-md'>{snippet}</div>
    </div>
  );
};
export default ArticleCard;
