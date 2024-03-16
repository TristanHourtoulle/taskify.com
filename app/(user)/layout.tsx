import { Header } from '@/features/layout/Header';
import { LayoutParams } from '@/types/next';

export default async function RouteLayout(props: LayoutParams<{}>) {
    return(
        <div className='h-full'>
            <Header />
            {props.children}
        </div>
    );
}