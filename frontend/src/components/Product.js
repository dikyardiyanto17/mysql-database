import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getCurrentUser,
  getProducts,
} from "../stores/action/actionCreator";
// import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";

export default function Product({ index, product }) {
  const roles = useSelector((state) => state.products.role);
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setRole(e.target.value);
  };

  const deletingProduct = (id) => {
    dispatch(deleteProduct(id))
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success deleting user",
        });
      })
      .then(() => {
        dispatch(getProducts());
      });
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [roles]);
  return (
    <>
      <tr>
        <td style={{ maxWidth: "10px" }}>{index + 1}</td>
        <td style={{ maxWidth: "100px", minWidth: "100px" }}>{product.name}</td>
        <td style={{ maxWidth: "100px", minWidth: "100px" }}>{product.Category.name}</td>
        {roles === "Admin" ? (
          <>
            <td>
              <Button
                variant="dark"
                onClick={() => {
                  deletingProduct(product.id);
                }}
              >
                Delete
              </Button>
            </td>
          </>
        ) : (
          <>
            <td>No action available</td>
          </>
        )}
      </tr>
    </>
  );
}
