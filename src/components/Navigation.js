import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import genreList from "../Data/Genres";
import "../Css/Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faCartShopping, faVideo, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Navigation({ basket }) {
  let basketQty = 0;
  let basketPrice = 0;
  basket.forEach((item) => {
    basketQty += item.qty;
    basketPrice += item.qty * item.price;
  });

  const navigate = useNavigate();
  const Search = (e) => {
    if (e.target.previousSibling.value !== "") {
      navigate(`search/${e.target.previousSibling.value}`);
      navigate(0);
    }
  };

  const SearchEnter = () => {
    let tempValue = document.querySelector("#searchQ").value;
    if (tempValue !== "") {
      navigate(`search/${tempValue}`);
      navigate(0);
    }
  };
  return (
    <>
      <Navbar expand="xl" variant="dark" className="colorNav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-3" />
        <Navbar.Brand href="/" className="px-3">
          DVDShop.com
        </Navbar.Brand>
        <Navbar.Brand className="d-xs-block d-sm-block d-md-block d-lg-block d-xl-none mx-3">
          <Nav.Link href={basketQty > 0 ? "/basket" : ""} key="basket">
            <FontAwesomeIcon icon={faCartShopping} /> {basketQty > 0 ? `[ ${basketQty} ]` : ""}
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          Hello
          <Nav className="mx-auto">
            <Nav.Link href="/" className="px-3" key="home">
              <FontAwesomeIcon icon={faHouseChimney} />
              &nbsp;Home
            </Nav.Link>
            <NavDropdown className="px-3" bg="dark" variant="dark" href="/genres" id="basic-nav-dropdown" title={[<FontAwesomeIcon icon={faVideo} />, " Movies"]} key="dropdown">
              <NavDropdown.Item href="/popular" style={{ textAlign: "center" }} key="popular">
                Popular
              </NavDropdown.Item>
              {genreList.map((genre) => (
                <NavDropdown.Item className="p-0" href={`/genre/${genre.name}`} style={{ height: "max-content", textAlign: "center" }} key={genre.name}>
                  {genre.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <OverlayTrigger
              trigger={["hover", "hover"]}
              key="bottom"
              placement="bottom"
              overlay={
                <Popover id="popover-positioned-top">
                  <Popover.Body>
                    {basket.length > 0 ? (
                      basket.map((item) => (
                        <div className="basket-popover">
                          <div>{item.title}</div>{" "}
                          <div>
                            £{item.price} x {item.qty}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="basket-popover">Basket is empty</div>
                    )}
                    <div className="basket-popover-total">Total - £{basketPrice.toFixed(2)}</div>
                  </Popover.Body>
                </Popover>
              }
            >
              <Nav.Link className="px-3" href={basketQty > 0 ? "/basket" : ""} key="basket">
                <FontAwesomeIcon icon={faCartShopping} />
                &nbsp; Basket {basketQty > 0 ? `[${basketQty} - £${basketPrice.toFixed(2)}]` : ""}
              </Nav.Link>
            </OverlayTrigger>
            <Nav.Link className="px-3" href="/contact" key="contact">
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; Contact
            </Nav.Link>
            <Form className="d-flex mx-3" onSubmit={(e) => SearchEnter(e)}>
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" id="searchQ" />
              <Button type="button" variant="outline-light" onClick={(e) => Search(e)}>
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
