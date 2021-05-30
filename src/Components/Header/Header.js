import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section className='header'>
        <div className=''>
            <div className="col-md-8 mx-auto text-wwhite header-description ">
                <h1 className='mb-3'>Welcome In <span className='text-danger'>Blog Site</span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, illum tenetur suscipit nulla dolores consectetur omnis quia dolorem in reiciendis eaque a dicta sunt nesciunt iure qui! Architecto ex quae error nulla tempora consequatur blanditiis impedit, ut iste recusandae amet officia fugit natus, repellat consectetur maxime dolor deleniti facilis! Culpa pariatur omnis iusto neque corrupti reprehenderit odio esse molestias. Qui delectus repellendus voluptas deserunt. Maxime nobis quibusdam est fuga explicabo.
                </p>
                <button className='headerBtn'>Explore Our Blogs</button>
            </div>
        </div>
        </section>
    );
};

export default Header;