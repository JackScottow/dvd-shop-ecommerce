import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Pagination = ({ list }) => {
  const items = list;
  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 8));

  const handleScroll = () => {
    // check if user has reached bottom of page
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 50) {
      // load next 4 items from array
      setDisplayedItems([...displayedItems, ...items.slice(displayedItems.length, displayedItems.length + 4)]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedItems]);

  return (
    <>
      {displayedItems.map((item) => (
        <Link to={`/movie/${item.title.replace("/", "").split(" ").join("")}`} key={item.id} state={item.id}>
          <Card className="text-center m-4 shadow card" key={item.id}>
            <Card.Img
              variant="top"
              src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
              alt="Product Image"
              className="mx-auto"
            />
            <Card.Body>
              <h4>{item.title}</h4>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default Pagination;
