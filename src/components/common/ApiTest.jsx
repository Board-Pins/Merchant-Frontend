import React, { useEffect, useState } from 'react';
import { useGetUserProfileQuery, useGetUserInfoQuery } from '../../services/userApi';

const ApiTest = () => {
    const [testResults, setTestResults] = useState([]);
    const { data: profileData, error: profileError, isLoading: profileLoading } = useGetUserProfileQuery();
    const { data: userInfoData, error: userInfoError, isLoading: userInfoLoading } = useGetUserInfoQuery();

    useEffect(() => {
        const results = [];
        results.push('=== GET USER PROFILE ===');
        results.push(`Loading: ${profileLoading}`);
        results.push(`Has Data: ${!!profileData}`);
        results.push(`Has Error: ${!!profileError}`);

        if (profileData) {
            results.push(`Profile Data: ${JSON.stringify(profileData, null, 2)}`);
        }

        if (profileError) {
            results.push(`Profile Error Status: ${profileError.status}`);
            results.push(`Profile Error Data: ${JSON.stringify(profileError, null, 2)}`);
        }

        results.push('\n=== GET USER INFO ===');
        results.push(`Loading: ${userInfoLoading}`);
        results.push(`Has Data: ${!!userInfoData}`);
        results.push(`Has Error: ${!!userInfoError}`);

        if (userInfoData) {
            results.push(`User Info Data: ${JSON.stringify(userInfoData, null, 2)}`);
        }

        if (userInfoError) {
            results.push(`User Info Error Status: ${userInfoError.status}`);
            results.push(`User Info Error Data: ${JSON.stringify(userInfoError, null, 2)}`);
        }

        setTestResults(results);
    }, [profileData, profileError, profileLoading, userInfoData, userInfoError, userInfoLoading]);

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', margin: '10px' }}>
            <h3>API Test Results:</h3>
            <pre>{testResults.join('\n')}</pre>
        </div>
    );
};

export default ApiTest; 