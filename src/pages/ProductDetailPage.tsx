import { useParams } from "react-router-dom";

function ProductDetail() {
  const { slug } = useParams();

  return (
    <div className="mt-25">
      <h2>Menampilkan detail untuk: {slug.replace(/-/g, " ")}</h2>
      <p>Slug yang aktif: {slug}</p>
    </div>
  );
}

export default ProductDetail;
