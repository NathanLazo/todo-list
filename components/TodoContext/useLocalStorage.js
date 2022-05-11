import React, { useEffect, useState} from 'react'

function useLocalStorage(itemName, initialValue) {

    let localStorageItem = '';         // declared here to use them on 
    let parsedItem = initialValue;     // scope because of the useEffect
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        try {
          localStorageItem = localStorage.getItem(itemName) 
      
          if (localStorageItem)  //If there is an item in localStorage we parse it to JSON
          {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          } 
          else  //If there is not an item in localStorage we set it to an empty array
          {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
          } 
    
          setItem(parsedItem);
          setLoading(false);
        } 
        catch (error) {
          setError(error);
        }
      }, 500);
    }, [])
  
    const saveItem = (newItem) => {
      try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      }
      catch (error) {
        setError(error);
      }
    }
  
    return {
      item, 
      saveItem,
      loading,
      error,
    };
  }

  export { useLocalStorage };
