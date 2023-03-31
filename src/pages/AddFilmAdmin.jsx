import NavbarComponent from "../components/myNavbar";
import {IoMdAttach} from "react-icons/io"
import { Button, Row, Col, Form  } from "react-bootstrap";

function AddFilmAdmin () {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <div
                className="bg-black text-white py-5"
                style={{ padding: "0px 170px" }}
            >
                <h5 className="fw-bold mb-5 ">Add Film</h5>
                <Form
                className="secondary text-white">
            <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  height: "50px",
                  color: "white",
                }}
              />
            </Col>

            <Col md={12} lg={4} xl={3}>
              <label
                htmlFor="attach"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  padding: "8px 40px 8px 40px",
                  color: "#6C757D",
                  borderRadius: "6px",
                  border: "1px solid white",
                  fontSize: "14px",
                  fontWeight: "lighter",
                }}
              >
                Attach Thumbnail
                <IoMdAttach
                  style={{
                    color: "#E50914",
                    fontSize: "30px",
                    marginLeft: "8px",
                  }}
                />
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="thumbnailfilm"
                id="attach"
                hidden
              />
            </Col>
          </Row>

          <Form.Group className="mb-4" controlId="formGridAddress1">
            <Form.Control
              style={{
                background: "rgba(210, 210, 210, 0.25)",
                height: "50px",
                color: "white",
              }}
              type="number"
              placeholder="Year"
              name="year"
              onChange={handleChange}
            />
          </Form.Group>

          <select
            className="py-1  w-100 mb-4"
            style={{
              border: "1px solid white",
              background: "rgba(210, 210, 210, 0.25)",
              color: "rgba(210, 210, 210, 0.25)",
              height: "50px",
              color: "white",
              borderRadius: "6px",
            }}
            name="category_id"
            onChange={handleChange}
          >
            <option value="" selected hidden>
              Category
            </option>
            <option value="1" className="bg-dark">
              Movies
            </option>
            <option value="2" className="bg-dark">
              Tv Series
            </option>
          </select>

          <Form.Control
            as="textarea"
            onChange={handleChange}
            rows={3}
            placeholder="Description"
            name="description"
            style={{
              background: "rgba(210, 210, 210, 0.25)",
              marginBottom: "66px",
              resize: "none",
              height: "177px",
              color: "white",
            }}
          />

          <Form.Group className="mb-4" controlId="formGridAddress1">
            <Form.Control
              style={{
                background: "rgba(210, 210, 210, 0.25)",
                height: "50px",
                color: "white",
              }}
              type="url"
              placeholder="Link Film"
              name="link"
              onChange={handleChange}
            />
          </Form.Group>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button
              type="submit"
              style={{
                width: "200px",
                height: "40px",
                background: "#E50914",
                border: "1px solid black",
                fontWeight: "bold",
              }}
            >
              Save
            </Button>
          </div>
        </Form>
        </div>
        </>
    )
}

export default AddFilmAdmin;