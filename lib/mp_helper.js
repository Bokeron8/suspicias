import initMercadoPago from '/node_modules/@mercadopago/sdk-react/mercadoPago/initMercadoPago'

const key = process.env.NEXT_PUBLIC_MP_KEY;
export const initMP = () => {initMercadoPago(key, { locale: 'es-AR' })};

