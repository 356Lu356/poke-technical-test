import Link from "next/link";
import React from "react";

function ButtonReturn() {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
    >
      ← Volver a la lista
    </Link>
  );
}

export default ButtonReturn;
