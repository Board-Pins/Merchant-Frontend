import { useState, useRef, useCallback, useEffect } from 'react';
import config from '../config';

export const useSearch = (options = {}) => {
    const {
        minSearchLength = 2,
        debounceMs = 300,
        maxResults = 5,
        endpoint = '/users-service/profiles/search/'
    } = options;

    const [searchValue, setSearchValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [loading, setLoading] = useState(false);
    const debounceTimeout = useRef(null);

    const getLabel = useCallback((item) => {
        if (!item) return 'Unknown';
        if (item.name) return item.name;
        if (item.title) return item.title;
        if (item.company_name) return item.company_name;
        if (item.user?.email) return item.user.email;
        if (item.user?.name) return item.user.name;
        return 'Unknown Item';
    }, []);

    const fetchSuggestions = useCallback(async (value) => {
        if (!value || value.trim().length < minSearchLength) {
            setSuggestions([]);
            setShowDropdown(!!value);
            setLoading(false);
            return;
        }

        setLoading(true);
        const ApiURL = config.apiBaseUrl;

        try {
            const url = `${ApiURL}${endpoint}?q=${encodeURIComponent(value.trim())}`;
            console.log('Fetching suggestions:', url);
            const response = await fetch(url, { credentials: 'include' });
            console.log('Suggestions response status:', response.status);
            const text = await response.text();
            console.log('Suggestions raw response:', text);
            if (!response.ok) {
                console.warn('Search failed with status:', response.status);
                setSuggestions([]);
                setShowDropdown(true);
                return;
            }

            const data = JSON.parse(text);
            const results = Array.isArray(data?.data?.results) ? data.data.results : [];

            const formattedResults = results.slice(0, maxResults).map(item => ({
                ...item,
                label: getLabel(item)
            })).filter(item => item.label !== 'Unknown Item');

            setSuggestions(formattedResults);
            setShowDropdown(true);
        } catch (error) {
            console.error('Search error:', error);
            setSuggestions([]);
            setShowDropdown(true);
        } finally {
            setLoading(false);
        }
    }, [minSearchLength, maxResults, endpoint, getLabel]);

    const handleInputChange = useCallback((e) => {
        const value = e.target.value;
        setSearchValue(value);
        setShowDropdown(false);

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            fetchSuggestions(value);
        }, debounceMs);
    }, [debounceMs, fetchSuggestions]);

    const handleSuggestionClick = useCallback((label) => {
        setSearchValue(label);
        setShowDropdown(false);
    }, []);

    const handleSearch = useCallback(async (e, customCallback) => {
        e.preventDefault();
        if (!searchValue.trim()) {
            return null;
        }

        setShowDropdown(false);
        setLoading(true);

        const ApiURL = config.apiBaseUrl;
        try {
            const url = `${ApiURL}${endpoint}?q=${encodeURIComponent(searchValue.trim())}`;
            console.log('Fetching search:', url);
            const response = await fetch(url, { credentials: 'include' });
            console.log('Search response status:', response.status);
            const text = await response.text();
            console.log('Search raw response:', text);
            if (!response.ok) {
                console.warn('Search failed with status:', response.status);
                return null;
            }
            const data = JSON.parse(text);

            if (customCallback) {
                customCallback(data);
            }

            return data;
        } catch (error) {
            console.error('Search error:', error);
            return null;
        } finally {
            setLoading(false);
        }
    }, [searchValue, endpoint]);

    const clearSearch = useCallback(() => {
        setSearchValue("");
        setSuggestions([]);
        setShowDropdown(false);
        setLoading(false);
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
    }, []);

    useEffect(() => {
        return () => {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        };
    }, []);

    return {
        searchValue,
        suggestions,
        showDropdown,
        loading,
        setSearchValue,
        setShowDropdown,
        handleInputChange,
        handleSuggestionClick,
        handleSearch,
        clearSearch
    };
};
