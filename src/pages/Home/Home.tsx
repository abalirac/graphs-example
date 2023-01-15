import { Card } from 'primereact/card';
import homeImage from '../../assets/images/home-image.jpg';

export default function Home() {
    return (
    <Card className='text-center'>
        <h3>Welcome to graphs test app</h3>
        <img style={{width: '100%'}} src={homeImage} alt="Logo" />
    </Card>
    )
}