export default async (req, res) => {
    const API_KEY = process.env.API_KEY;
    const productId = req.query.productId;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const response = await fetch(`https://api.bestbuy.com/v1/products(sku=${productId})?apiKey=${API_KEY}&sort=name.asc&show=name,image,salePrice,url,sku&format=json`);

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Fetch request failed' });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}
