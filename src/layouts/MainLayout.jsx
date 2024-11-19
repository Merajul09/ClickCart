import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <div>Navbar</div>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <div>footer</div>
        </>
    );
};

export default MainLayout;
