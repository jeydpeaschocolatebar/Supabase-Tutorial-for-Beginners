import supabaseClient from "../config/supabase.client";

const Home = () => {
  console.log(supabaseClient);

  return (
    <div className="page home">
      <h2>Home</h2>
    </div>
  );
};

export default Home;
