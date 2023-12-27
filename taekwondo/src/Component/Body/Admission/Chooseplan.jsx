
import React, { useState } from 'react';
import './Choose.css';
import imgs from './img/kowndo.jpg';
const ChoosePlan = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const admissionCost = 2000;
    const monthlyFee = 1000;
    const uniformCost = 3500;

    const handlePackageSelect = (packageMonths) => {
        setSelectedPackage(packageMonths);
        setShowPopup(true);
    };

    const handlePlanSubmit = () => {
        // You can implement your submission logic here
        if (selectedPackage !== null) {
            const totalCost = admissionCost + (monthlyFee * selectedPackage) + uniformCost;
            alert(`Plan selected: ${selectedPackage} Months\nTotal Cost: Tk ${totalCost}`);
            // Reset the selected package
            setSelectedPackage(null);
        }
    };

    return (

        <div className="choosepln">

            <div className="Apps">

                <div className="box">

                    <button onClick={() => handlePackageSelect(6)} className='plnbtns'>Choose Your Plan</button>

                    {showPopup && (
                        <div className="popup">
                            <h3>Choose Your Package</h3>
                            <button onClick={() => handlePackageSelect(6)} className='mbtn'>Six-Month Package</button>
                            <button onClick={() => handlePackageSelect(8)} className='mbtn'>Eight-Month Package</button>
                            <button onClick={() => handlePackageSelect(12)} className='mbtn'>One-Year Package</button>
                            <p className='cost'>
                                Total Cost: {(admissionCost + monthlyFee * selectedPackage + uniformCost).toFixed(2)} Tk
                            </p>
                            <button onClick={() => setShowPopup(false)} className='mbtn'>Close</button>
                            <button onClick={handlePlanSubmit} className='mbtn'>Submit</button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ChoosePlan;
