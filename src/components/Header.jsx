import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../components/CNSC Logo - White Border.png';
import AdminLoginPage from '../pages/AdminLoginPage';
import CustomerLoginPage from '../pages/CustomerLoginPage';
import OfficeHeadLoginPage from '../pages/OfficeHeadLoginPage';
import './Header.css'; // Import CSS file

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false); // Initially hide dropdown
    const [selectedRole, setSelectedRole] = useState(null); // State to manage selected role

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown); // Toggle dropdown visibility
    };

    const handleRoleChange = (role) => {
        console.log('Selected Role:', role);
        setSelectedRole(role); // Set selected role
        setShowDropdown(false); // Hide dropdown after selection
    };

    const renderLoginPage = () => {
        switch (selectedRole) {
            case 'Administrator':
                return <AdminLoginPage />;
            case 'Customer':
                return <CustomerLoginPage />;
            case 'Office Head':
                return <OfficeHeadLoginPage />;
            default:
                return null;
        }
    };

    return (
        <>
            <header className="header">
                <div className="logo-container">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>
                <div className="title-container">
                    <h1 className="h1">Camarines Norte State College</h1>
                    <h2 className="h2">Customer Feedback System</h2>
                </div>
                <div className="menu-container">
                    <FaBars size={24} className="menu-icon" onClick={toggleDropdown} />
                    {showDropdown && (
                        <div className="dropdown-container">
                            <div className="custom-dropdown">
                                <div className="dropdown-item" onClick={() => handleRoleChange('Administrator')}>
                                    Administrator
                                </div>
                                <div className="dropdown-item" onClick={() => handleRoleChange('Customer')}>
                                    Customer
                                </div>
                                <div className="dropdown-item" onClick={() => handleRoleChange('Office Head')}>
                                    Office Head
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            {selectedRole && renderLoginPage()}
        </>
    );
};

export default Header;
