import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { api } from "../../services";
import { Blog } from "types";
import DpgCard from "../../components/DpgCard";
import { Link } from "react-router-dom";

interface Error {
  status?: number;
  data: string;
}

/**
 * Landing Page
 * @constructor
 */
export function Home() {
  const [blogs, setBlogs] = useState<Blog[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    setLoading(true);
    api
      .get("blog", null)
      .then((response) => {
        // ToDo: move this logic to services dir
        if (response.status === 200) {
          let recentBlogs = response.data as Blog[];
          recentBlogs = recentBlogs.slice(0, 3);
          setBlogs(recentBlogs);
        } else {
          setError({ status: response.status, data: response.data });
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError({ data: error });
        console.error(error);
      });
  }, []);

  return <></>;
}
