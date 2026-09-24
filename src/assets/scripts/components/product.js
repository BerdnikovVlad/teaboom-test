const productVariants = {
  100: {
    sku: "01306",
    price: "326.40",
    oldPrice: "349.20",
  },
  500: {
    sku: "01307",
    price: "1432.00",
    oldPrice: "1646.00",
  },
  1000: {
    sku: "01308",
    price: "2064.00",
    oldPrice: "2592.00",
  },
  5000: {
    sku: "01309",
    price: "6320.00",
    oldPrice: "8710.00",
  },
};

const DEFAULT_WEIGHT = "100";

export const initProduct = () => {
  const product = document.querySelector("[data-product]");

  if (!product) {
    return;
  }

  const variants = product.querySelectorAll("[data-product-variant]");
  const sku = product.querySelector("[data-product-sku]");
  const price = product.querySelector("[data-product-price]");
  const oldPrice = product.querySelector("[data-product-old-price]");

  const updateProduct = (weight) => {
    const variant = productVariants[weight];

    if (!variant) {
      return;
    }

    sku.textContent = variant.sku;
    price.textContent = variant.price;
    oldPrice.textContent = variant.oldPrice;

    variants.forEach((option) => {
      const isActive = option.dataset.weight === weight;

      option.classList.toggle("is-active", isActive);
      option.setAttribute("aria-pressed", String(isActive));
    });
  };

  variants.forEach((option) => {
    option.addEventListener("click", () => {
      updateProduct(option.dataset.weight);
    });
  });

  updateProduct(DEFAULT_WEIGHT);
};
