import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SelectedClass = () => {
    const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();


  const { data: myclasscart = [] } = useQuery({
    queryKey: ['myclasscart', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/myclasscart?email=${user?.email}`)
      console.log('res from axios', res)
      return res.data;
    },
  })

    return (
        <div>
            {myclasscart.length}
        </div>
    );
};

export default SelectedClass;