import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';


const Home = () => (
    <div className="home-container">
        <div className="home-content">
            <div className="home-text">
                <h1 className="text-title"> Pró Gestão Condomínios </h1>
                <p className="text-subtitle">
                Página de acesso ao sistema <b>ProG Builder Manager</b>. 
                Toda a gestão de seu condomínio, em um só lugar.
                </p>
            </div>
    
        </div>
        <div className="btn-home">
                <Link to="/search">
                 <Button text= "Começar" />   
                </Link>   
        </div>
    </div>
);

export default Home;