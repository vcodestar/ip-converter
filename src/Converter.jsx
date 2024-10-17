import React, { useState } from 'react';

function Converter() {
    const [ipAddress, setIpAddress] = useState('');
    const [binaryResult, setBinaryResult] = useState('');
    const [error, setError] = useState('');

    const ipRegex = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;

    const convertToBinary = (ip) => {
        return ip
            .split('.')                       
            .map(octet => parseInt(octet, 10)  
            .toString(2)                      
            .padStart(8, '0'))                
            .join('.');                       
    };

    const handleConvert = () => {
        setError('');

        if (!ipAddress) {
            setError('IP address cannot be empty');
            return;
        }

        if (ipRegex.test(ipAddress)) {
            const binary = convertToBinary(ipAddress);
            setBinaryResult(binary); 
        } else {
            setError('Please enter a valid IP address');
            setBinaryResult(''); 
        }
    };

    const copyToClipboard = () => {
        if (binaryResult) {
            navigator.clipboard.writeText(binaryResult).then(() => {
                alert('Binary IP result copied to clipboard!');
            });
        }
    };

    return (
        <div id="converter">
            <p id="enter_prompt">Enter IP address: </p>
            <div id="input_line">
                <input
                    id="ip_input"
                    placeholder="e.g., 203.0.113.0"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                />
                <button id="submit_button" onClick={handleConvert}>
                    Convert
                </button>
            </div>

            {error && <p className="error-message">{error}</p>} 

            {binaryResult && (  
                <>
                    <p id="bin_prompt" className="show">Binary Result:</p>
                    <p id="ip_result" className="show">{binaryResult}</p>
                    <button id="copy_button" className="show" onClick={copyToClipboard}>
                        Copy Binary to Clipboard
                    </button>
                </>
            )}
        </div>
    );
}

export default Converter;
