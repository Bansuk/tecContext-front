function ProductRow({ product, quantity }) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>
                {`R$ ${Number(product.price).toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                })}`}
            </td>
            <td>{quantity}</td>
            <td>{`R$ ${Number(quantity * product.price).toLocaleString(
                "pt-br",
                {
                    minimumFractionDigits: 2,
                }
            )}`}</td>
        </tr>
    );
}

export default ProductRow;
