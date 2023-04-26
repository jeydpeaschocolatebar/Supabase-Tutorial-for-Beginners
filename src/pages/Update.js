import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabaseClient from "../config/supabase.client";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabaseClient
        .from("smoothies")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        navigate("/", { replace: true });
      }

      if (data) {
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);
      }
    };

    fetchSmoothie();
  }, [id, navigate]);

  return (
    <div className="page update">
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea
          type="text"
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Create Smoothie Recipe</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Update;
