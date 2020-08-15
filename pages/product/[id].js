import React from 'react';
import { useRouter } from 'next/router';

function ProductItem() {

    const { query: { id } } = useRouter();

    return (
        <div>
            Esta es la pagina del producto: {id}
        </div>
    )
}

export default ProductItem
