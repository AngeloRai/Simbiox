import React, { useEffect, useState } from "react";
import api from "../../api";
import Pagination from "../Pagination";
import data from "../../data.json";
import "./ListScholarships.css";
import ScholarshipCard from "../ScolarshipCard/ScolarshipCard";
import SerachFilterInput from "../SerachFilterInput/SerachFilterInput";

function ListScholarships() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [scholarships, setScholarships] = useState([{}]);
  const scholarshipsPerPage = 10;
  const [searchState, setSearchState] = useState({
    city: "",
    price: 0,
    course: "",
  });

  useEffect(() => {
    const fetchScolarships = async () => {
      setLoading(true);
      const fetchedScholarships = await api.get("/scholarships");
      setScholarships([fetchedScholarships.data]);
      console.log(fetchedScholarships.data);
      setLoading(false);
    };
    fetchScolarships();
  }, []);
  console.log(scholarships);

  //Generate filtered data
  const filteredList = data
    .filter((searchCity) =>
      searchCity.campus.city
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          searchState.city
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
    )
    .filter((serachPrice) =>
      String(serachPrice.full_price).includes(String(searchState.price))
    )
    .filter((searchCourse) =>
      searchCourse.course.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          searchState.course
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
    );

  console.log(filteredList);

  // Get current scholarships
  const indexOfLastScholarship = currentPage * scholarshipsPerPage;
  const indexOfFirstScholarship = indexOfLastScholarship - scholarshipsPerPage;

  let currentScholarships = data.slice(
    indexOfFirstScholarship,
    indexOfLastScholarship
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log(searchState);
  return (
    <div className="main-scholarship-container">
      <SerachFilterInput setSearchState={setSearchState} />
      <Pagination
        scholarshipsPerPage={scholarshipsPerPage}
        totalScholarShips={data.length}
        paginate={paginate}
      />
      <div className="row d-flex justify-content-center">
        {currentScholarships &&
          currentScholarships
            .filter(
              (filteredScholarship) => filteredScholarship.enabled === true
            )
            .map((loopedScholarship, i) => (
              <ScholarshipCard key={i} scholarship={loopedScholarship} />
            ))}
      </div>

      <Pagination
        scholarshipsPerPage={scholarshipsPerPage}
        totalScholarShips={data.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ListScholarships;
