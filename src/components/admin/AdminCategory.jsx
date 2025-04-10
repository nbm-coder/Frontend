/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AdminPagination from "./AdminPagination";

const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  //   const [categoryForm, setCategoryForm] = useState({ name: "", description: "" });
  //   const [editingCategory, setEditingCategory] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const getToken = () => {
    return document.cookie
      .split("; ")
      .find(row => row.startsWith("jwtToken="))
      ?.split("=")[1];
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const token = getToken();
      if (!token) {
        throw new Error("JWT Token not found");
      }

      const response = await axios.get(
        `http://localhost:8080/api/admin/categories?page=${page}&size=${productsPerPage}`,
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      );

      setCategories(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      toast.error("Error fetching categories");
    }
    setLoading(false);
  };


  useEffect(() => {
    fetchCategories();
  }, [page, size]);

  //   const handleDelete = async (id) => {
  //     try {
  //       await axios.delete(`http://localhost:8080/api/admin/categories/${id}`, {
  //         headers: { Authorization: `Bearer ${document.cookie.jwtToken}` },
  //         withCredentials: true,
  //       });
  //       toast.success("Category deleted");
  //       fetchCategories();
  //     } catch (error) {
  //       toast.error("Error deleting category");
  //     }
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       if (editingCategory) {
  //         await axios.put(
  //           `http://localhost:8080/api/admin/categories/${editingCategory.categoryId}`,
  //           categoryForm,
  //           {
  //             headers: { Authorization: `Bearer ${document.cookie.jwtToken}` },
  //             withCredentials: true,
  //           }
  //         );
  //         toast.success("Category updated");
  //       } else {
  //         await axios.post(`http://localhost:8080/api/admin/categories`, categoryForm, {
  //           headers: { Authorization: `Bearer ${document.cookie.jwtToken}` },
  //           withCredentials: true,
  //         });
  //         toast.success("Category added");
  //       }
  //       setCategoryForm({ name: "", description: "" });
  //       setEditingCategory(null);
  //       fetchCategories();
  //     } catch (error) {
  //       toast.error("Error saving category");
  //     }
  //   };

  return (
    <div className="m-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>

      {/* <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Category Name"
          value={categoryForm.name}
          onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={categoryForm.description}
          onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          {editingCategory ? "Update" : "Add"} Category
        </button>
      </form> */}

      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Description</th>
              {/* <th className="border p-2">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.categoryId}>
                <td className="border p-2">{category.categoryId}</td>
                <td className="border p-2">{category.name}</td>
                <td className="border p-2">{category.description}</td>
                {/* <td className="border p-2"> */}
                  {/* <button
                    className="bg-yellow-500 text-white px-2 py-1 mr-2"
                    onClick={() => setEditingCategory(category)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1"
                    onClick={() => handleDelete(category.categoryId)}
                  >
                    Delete
                  </button> */}
                {/* </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination Component */}
      <div className="m-5">

        <AdminPagination
          totalPages={totalPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      </div>
    </div>
  );
};

export default AdminCategory;
