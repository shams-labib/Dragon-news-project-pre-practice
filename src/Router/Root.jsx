import React, { use } from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import Ticket from '../components/Header/Ticket';
import Rightside from '../components/Twosidehandler/Rightside';
import LeftSideBtn from '../components/Twosidehandler/LeftSideBtn';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../Firebase/AuthContext/AuthContext';

const Root = () => {

  const {loading} = use(AuthContext);
    if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );
  }


    return (
        <div className=' '>
                <Header></Header>
            <div className='container mx-auto'>
            <Ticket></Ticket>
            </div>
            <div className='container mx-auto'>
                <Navber></Navber>
            </div>
             <main className="container mx-auto min-h-screen my-3 flex justify-between  gap-5">
        <aside className="w-[25%] ">
        <LeftSideBtn></LeftSideBtn>
        </aside>
        <section className="w-[50%]">
          <Outlet></Outlet>
        </section>
        <aside className="w-[25%]">
          <Rightside></Rightside>
        </aside>
      </main>
            <Footer></Footer>

            <ToastContainer
            position='top-center'
            ></ToastContainer>
        </div>
    );
};

export default Root;