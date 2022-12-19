import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ list, onAdd }) => {
  const items = list;
  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 10));
  const handleScroll = () => {
    // check if user has reached bottom of page
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 50) {
      // load next 4 items from array
      setDisplayedItems([...displayedItems, ...items.slice(displayedItems.length, displayedItems.length + 5)]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedItems]);

  return (
    <>
      {displayedItems.map((item) => (
        <Card className="text-center m-4 shadow-sm card" key={item.id}>
          <Link to={`/movie/${item.title.replace("/", "").split(" ").join("")}`} key={item.id} state={item.id}>
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt="Product Image" className="mx-auto" />
            <Card.Body>
              <h4>{item.title}</h4>
            </Card.Body>
          </Link>
          <Button variant="success" className="gallery-button" onClick={() => onAdd(item)}>
            Add <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </Card>
      ))}
    </>
  );
};

export default Pagination;
