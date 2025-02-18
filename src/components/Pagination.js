import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoImage from "../Images/NoImage.jpg";

const Pagination = ({ list, onAdd }) => {
  const items = list;
  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 10));

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 50) {
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
        <Card className="text-center shadow-sm card" key={item.id}>
          <div className="card-image-container">
            <Link to={`/movie/${item.title.replace("/", "").split(" ").join("")}`} key={item.id} state={item.id}>
              {item.poster_path ? <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt={item.title} className="mx-auto" /> : <Card.Img variant="top" src={NoImage} alt="No Image Available" className="mx-auto" />}
            </Link>
          </div>

          <Card.Body>
            <Link to={`/movie/${item.title.replace("/", "").split(" ").join("")}`} key={item.id} state={item.id} style={{ textDecoration: "none" }}>
              <h4>{item.title}</h4>
            </Link>
          </Card.Body>

          <Button variant="success" className="gallery-button" onClick={() => onAdd(item)}>
            Add to Cart <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </Card>
      ))}
    </>
  );
};

export default Pagination;
