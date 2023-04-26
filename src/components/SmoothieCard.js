import { Link } from "react-router-dom";
import supabaseClient from "../config/supabase.client";

const SmoothieCard = ({ smoothie }) => {
  const handleDelete = async () => {
    const { data, error } = await supabaseClient
      .from("smoothies")
      .delete()
      .eq("id", smoothie.id);

    if (error) {
      console.error(error);
    }

    if (data) {
      console.log(data);
    }
  };

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};

export default SmoothieCard;
