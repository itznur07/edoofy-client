import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Edoofy - ${title}`;
  }, [title]);
};

export default useTitle;
