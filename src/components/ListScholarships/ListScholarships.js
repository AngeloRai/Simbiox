import React, { useState } from "react";
//import api from "../../api";
import Pagination from "../Pagination";
import data from "../../data.json";
import "./ListScholarships.css";
import ScholarshipCard from "../ScolarshipCard/ScolarshipCard";
import SearchFilterInput from "../SearchFilterInput/SearchFilterInput";

function ListScholarships() {
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [listScholarships, setListScholarships] = useState(data);
  const scholarshipsPerPage = 10;


  // ***data from this api is not in appropriate format to be consumed
  // useEffect(() => {
  //   const fetchScolarships = async () => {
  //
  //     const fetchedScholarships = await api.get("/scholarships");
  //     setListScholarships([fetchedScholarships.data]);
  //
  //   };
  //   fetchScolarships();
  // }, []);


  //Generate filtered data

  function filterScholarships(values) {
    let filteredList = [];

    filteredList = data
      .filter((searchCity) =>
        searchCity.campus.city
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            values.city
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
      .filter((searchPrice) =>
        String(searchPrice.full_price).includes(String(values.price))
      )
      .filter((searchCourse) =>
        searchCourse.course.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            values.course
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      );

    setListScholarships([...filteredList]);
  }

  // Get current scholarships
  const indexOfLastScholarship = currentPage * scholarshipsPerPage;
  const indexOfFirstScholarship = indexOfLastScholarship - scholarshipsPerPage;

  let currentScholarships = listScholarships.slice(
    indexOfFirstScholarship,
    indexOfLastScholarship
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main-scholarship-container">
      <div className="m-4">
        <SearchFilterInput filterScholarships={filterScholarships} />
      </div>
      <Pagination
        scholarshipsPerPage={scholarshipsPerPage}
        totalScholarShips={listScholarships.length}
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
        totalScholarShips={listScholarships.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ListScholarships;
