import { IconTent } from '@tabler/icons-react';

function Home() {
    return (
        <div className='container py-4 text-wa-brown'>
            <div className='text-center mb-3'>
                <IconTent stroke={2} size={80} className='text-wa-green' />
            </div>
            <h1 className='text-center mb-4'>Welcome to Whispering Acres</h1>
            <p className='text-center fs-5'>Your destination for camping and outdoor essentials</p>
        </div>
    )
}

export default Home;
