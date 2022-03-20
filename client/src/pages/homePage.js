import { DefaultLayout } from '../layouts/defaultLayout';
import Products from '../features/store/Products';

export function HomePage(props) {
    return (
        <DefaultLayout headerTitle="My Store">
           <Products />
        </DefaultLayout>
    )
}