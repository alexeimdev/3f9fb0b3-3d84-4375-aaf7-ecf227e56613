import { DefaultLayout } from '../layouts/defaultLayout';
import Products from '../features/store/products/Products';

export function HomePage(props) {
    return (
        <DefaultLayout headerTitle="My Store">
           <Products />
        </DefaultLayout>
    )
}