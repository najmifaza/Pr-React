import Card from "../components/card";
import { Link } from "react-router-dom";
function ProductPage() {
  const products = [
    { id: 1, name: "Laptop Gaming", slug: "laptop-gaming-asus" },
    { id: 2, name: "Mechanical Keyboard", slug: "keyboard-mechanical-rgb" },
  ];
  return (
    <>
      <div className="mt-25">
        <p className="font-medium text-white dark:text-white-400">
          Product Page
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
          Produk Produk Kami
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Ini adalah halaman Product Page
        </p>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.slug}`}>
              <Card title={product.name} />
              {/* Kamu bisa bungkus Card di dalam Link agar seluruh area card bisa diklik */}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
