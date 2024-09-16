import { useEffect, useState } from "react";
import { Alert } from "react-native";
const useAppwrite = (fn) => {

    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);

    const fetchData = async () => {
        setIsloading(true);

        try {
            const response = await fn();
            setData(response);
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setIsloading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => fetchData();
    return { data, isloading, refetch };
}

export default useAppwrite;