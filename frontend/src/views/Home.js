import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import loading from "../assets/loading.gif";
import "../assets/style.css";
import Product from "../components/Product";
import { getCurrentUser, getProducts } from "../stores/action/actionCreator";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const roles = useSelector((state) => state.products.role);
  const products = useSelector((state) => state.products.products);
  console.log(products)
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear()
    navigate("/login");
    Swal.fire({
      icon: "success",
      title: "You've successfully log out",
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCurrentUser())
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border border-slate-800 bg-slate-900/70 mt-3 p-5 text-center">
          <h1>Home</h1>
          <Table bordered responsive size="sm" style={{ color: "black" }}>
            <thead>
              <tr>
                <th style={{ width: "70px" }}>No</th>
                <th style={{ width: "200px" }}>Name</th>
                <th style={{ width: "200px" }}>Category</th>
                {roles === "Admin" && (
                  <>
                    <th style={{ width: "150px" }}>Delete</th>
                  </>
                )}
              </tr>
            </thead>
            {products && (
              <tbody>
                {products?.map((product, index) => {
                  return <Product product={product} key={product.id} index={index} />;
                })}
              </tbody>
            )}
          </Table>
          {products?.length == 0 && <img src={loading} />}

          <br />
          <br />
          <Button variant="danger" onClick={logout}>
            Log Out
          </Button>
        </div>
      </div>
    </>
  );
}
