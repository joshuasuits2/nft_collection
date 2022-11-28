import { useEffect, useState } from "react";
import CardSlide from "../../components/layout/CardSlide";
import Heading from "../../components/layout/Heading";
import axios from "axios";
//"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTEzNDcxYzhlYmNjZjJlMTFlN2NlMTM2MzQ4NGVkODIzNmVlMjE3MzRjZDc1MDZhODU4NzhiNDkwNmE0OTYwNzBmODViZWE0ODlmNjhhMjkiLCJpYXQiOjE2Njk2MjI1NzQuODU1NTYzLCJuYmYiOjE2Njk2MjI1NzQuODU1NTY3LCJleHAiOjE3MDExNTg1NzQuODQyOTE1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.WGXnE4qSN6HK3pDmLpNnShPq6M6GeSkp5nFlLu_sIQYLXSJhVCN35GP6_BNcgRwfyBkmFk-VXnS1GqK1RSY9baqYWPswuDt3oqUy9ErsJLQT7u1qYTNbCvcy2UqJpBlmjPw_Nz30ujQBHfVVw1_vlM8X0gnE283-gaWMw03o5Y7ZCpOgtP8gJQ1ktDEKAYCRuPg0a-0jWC2wQdgTlc_FlI98xYvMKDxg4DTLcjFu2d7rkxctvNEzeJn5TCLYoujf7RRzF5UTfADschq9XOzRbTuL2AIWoR30kZbL_JLFveGIpW_CYbXT9MqfmDgYDa5FEGjOR9YIMTZ49wj4sy-NYmqAYMg0C34GCAfxKqqbfaaKkPJM-9FD2HcfbY2bPum3tJYKKKsWsNxPxVJOlMpiM7Rpoiy-Ceujd_CcGsuM9RuRb1BpGFFI3AluHtU3pxvGnqpAoJfA7Py0WJBzx-OW1g91TCzCEP6BD37mIqV9eexd0r_oQGJFMDkAikhGDxfaK4X0xft8qgTxPDXwlKesin_TTYHrY_gWc8EbHIfRSODNPcdO3H60e94dt_gyHLCJ8hmsXsQ0MRgOnAq653cvySpbDOGNhQPEfmRBofMPJV7LFCYJdsIDXu1KbdCGhYndWY6-7ujSHLTU02OqoE0Cm4LMdnqDWIH7fMrOEyUn1Fo"

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTEzNDcxYzhlYmNjZjJlMTFlN2NlMTM2MzQ4NGVkODIzNmVlMjE3MzRjZDc1MDZhODU4NzhiNDkwNmE0OTYwNzBmODViZWE0ODlmNjhhMjkiLCJpYXQiOjE2Njk2MjI1NzQuODU1NTYzLCJuYmYiOjE2Njk2MjI1NzQuODU1NTY3LCJleHAiOjE3MDExNTg1NzQuODQyOTE1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.WGXnE4qSN6HK3pDmLpNnShPq6M6GeSkp5nFlLu_sIQYLXSJhVCN35GP6_BNcgRwfyBkmFk-VXnS1GqK1RSY9baqYWPswuDt3oqUy9ErsJLQT7u1qYTNbCvcy2UqJpBlmjPw_Nz30ujQBHfVVw1_vlM8X0gnE283-gaWMw03o5Y7ZCpOgtP8gJQ1ktDEKAYCRuPg0a-0jWC2wQdgTlc_FlI98xYvMKDxg4DTLcjFu2d7rkxctvNEzeJn5TCLYoujf7RRzF5UTfADschq9XOzRbTuL2AIWoR30kZbL_JLFveGIpW_CYbXT9MqfmDgYDa5FEGjOR9YIMTZ49wj4sy-NYmqAYMg0C34GCAfxKqqbfaaKkPJM-9FD2HcfbY2bPum3tJYKKKsWsNxPxVJOlMpiM7Rpoiy-Ceujd_CcGsuM9RuRb1BpGFFI3AluHtU3pxvGnqpAoJfA7Py0WJBzx-OW1g91TCzCEP6BD37mIqV9eexd0r_oQGJFMDkAikhGDxfaK4X0xft8qgTxPDXwlKesin_TTYHrY_gWc8EbHIfRSODNPcdO3H60e94dt_gyHLCJ8hmsXsQ0MRgOnAq653cvySpbDOGNhQPEfmRBofMPJV7LFCYJdsIDXu1KbdCGhYndWY6-7ujSHLTU02OqoE0Cm4LMdnqDWIH7fMrOEyUn1Fo";
const TrendingCollection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const value = {
        // name: "admin",
        email: "admin123@gmail.com",
        password: "admin123456",
        password_confirmation: "admin123456",
      };
      const headers = {
        authorization: `Bearer ${token}`,
      };
      try {
        const res = await axios.get("/api/posts", {
          headers,
        });
        // const json = await res.json();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log("Data:", data);
  return (
    <div className="mt-[100px] relative">
      <Heading desc={"Check out our daily updated trending collections"}>
        TRENDING COLLECTION
      </Heading>
      <CardSlide></CardSlide>
    </div>
  );
};

export default TrendingCollection;
