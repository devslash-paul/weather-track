import fs from 'fs';
import { join } from 'path';

export const dynamicParams = false

const dataDir = join(process.cwd(), "public/data");

export async function generateStaticParams() {
    const names = fs.readdirSync(dataDir)
    const final =  names.map(name => { return {products: name.replaceAll(":", "-").replaceAll(".", "-") }})
    return final
}

export default function Test({ params }: { params: { products: string } }) {
    return <div>Hi{params.products}!</div>
}