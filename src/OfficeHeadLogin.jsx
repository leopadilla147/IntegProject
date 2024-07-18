// OfficeHeadLoginPage.jsx

import { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Form, Button } from 'react-bootstrap';
import './OfficeHeadLogin.css'; // Import CSS file
import Header from './components/Header'
import Footer from './components/Footer'

const OfficeHeadLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        
        
        <div className="container">
            <Header/>
            <div className="header">
                <FaUsers size={67} className="icon" style={{ color: '#8D0E0E' }} /> {/* Icon color */}
                <div className="title">OFFICE HEAD</div>
            </div>
            <Form onSubmit={handleLogin} className="form">
                <Form.Group className="inputGroup">
                    <Form.Label htmlFor="username" className="label">Username </Form.Label>
                    <Form.Control
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="input"
                    />
                </Form.Group>
                <Form.Group className="inputGroup">
                    <Form.Label htmlFor="password" className="label">Password </Form.Label>
                    <div className="passwordContainer">
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input"
                        />
                        <Button type="button" onClick={togglePasswordVisibility} className="toggleButton">
                            {showPassword ? 'Hide' : 'Show'}
                        </Button>
                    </div>
                </Form.Group>
                <Button type="submit" className="loginButton">Proceed</Button>
            </Form>
            <Button type="button" className="backButton" onClick={() => alert('Back button clicked')}>Back</Button>
            <Footer />
        </div>
    );
};

export default OfficeHeadLoginPage;
