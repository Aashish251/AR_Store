import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { api } from "../../utils/api";
import CheckEmail from "../auth/CheckEmail";
import IssuedBookCard from "../Card/IssuedBookCard";

export default function ReturnBooks() {
  const [email, setemail] = useState("");
  const [isEmailVerified, setisEmailVerified] = useState(false);
  const [user, setuser] = useState();

  useEffect(() => {
    if (!isEmailVerified) return;

    const token = localStorage.getItem("token");

    api
      .post(
        "/auth/booksissuedbyuser",
        { email: email },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setuser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [isEmailVerified]);

  const handleBookReturn = (bookId) => {
    const token = localStorage.getItem("token");
    api
      .post(
        "/bookreturn",
        { email: email, bookId: bookId },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        const updatedBooksIssued = user.booksIssued.filter(
          (book) => book.bookId._id !== bookId
        );
        setuser((prevUserData) => ({
          ...prevUserData,
          booksIssued: updatedBooksIssued,
        }));
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const resetDetails = () => {
    setemail("");
    setisEmailVerified(false);
    setuser(null);
  };
  return (
    <>
      {!isEmailVerified && (
        <CheckEmail
          email={email}
          setemail={setemail}
          setisEmailVerified={setisEmailVerified}
        />
      )}
      {isEmailVerified && user && (
        <>
          <h4>Current candidate: {email}</h4>
          <Button variant="warning" onClick={resetDetails}>
            Reset
          </Button>
          <Row>
            {user.booksIssued.length > 0 ? (
              user.booksIssued.map((book) => (
                <Col key={book._id} md={6} className=" mt-3">
                  <IssuedBookCard
                    book={book}
                    isReturn={true}
                    handleBookReturn={handleBookReturn}
                  />
                </Col>
              ))
            ) : (
              <Col>
                <h2>No issued books found</h2>
                <Button variant="warning" onClick={resetDetails}>
                  Go back
                </Button>
              </Col>
            )}
          </Row>
        </>
      )}
    </>
  );
}
