import React, { useState, useEffect } from "react";
import { DataGrid } from "devextreme-react";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import {
  FiFilter,
  FiChevronDown,
  FiChevronUp,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import {
  Button,
  TextField,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import NewAccountModal from "./components/NewAccountModal/NewAccountModal";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowsShown, setRowsShown] = useState(4);
  const [currentPage] = useState(1);
  const [informationData, setInformationData] = useState([
    {
      "Sosyal Medya Linki": "",
      "Sosyal Medya Adı": "",
      Açıklama: "",
    },
  ]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("informationData")) || [];
    setInformationData(savedData);
  }, []);

  const handleSearchChange = (event) => {   //search inputunun içerisindeki yazılanlar alınır, boş durumda iken local'den ekli olanlar alınır.
    setSearchValue(event.target.value);
    if (event.target.value === "") {
      const savedData =
        JSON.parse(localStorage.getItem("informationData")) || [];
      setInformationData(savedData);
    }
  };

  const handleSearchClick = () => {     // girdiler içerisinde arama yapabilmek için JS metodları ile fonksiyon yazıldı.
    const filteredData = informationData.filter((data) =>
      Object.values(data)
        .join(" ")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setRowsShown(Math.min(filteredData.length, 24));
    setInformationData(filteredData);
  };

  const handleSortClick = () => {   // sosyal medya adına göre sıralama filtreleme butonuna eklendi.
    const sortedData = [...informationData].sort((a, b) =>
      a["Sosyal Medya Adı"].localeCompare(b["Sosyal Medya Adı"])
    );
    setInformationData(sortedData);
  };

  const handleAddAccountClick = () => {  //modal'i aç
    setIsModalOpen(true);
  };

  const handleModalClose = () => {   // modal'i kapat
    setIsModalOpen(false);
  };

  const handleModalSave = () => {
    const newAccount = {
      "Sosyal Medya Linki": document.getElementById("SosyalMedyaLinki").value,  // newAccountModal içerisindeki inputlar id ile yakalandı.
      "Sosyal Medya Adı": document.getElementById("SosyalMedyaAdi").value,    // newAccountModal içerisindeki inputlar id ile yakalandı.
      Açıklama: document.getElementById("Aciklama").value,    // newAccountModal içerisindeki inputlar id ile yakalandı.
    };
    setInformationData([...informationData, newAccount]);   // Alınan girdiler state'e eklendi.
    setIsModalOpen(false);

    const savedData = JSON.parse(localStorage.getItem("informationData")) || [];  // Girdiler localStorage'de saklandı.
    savedData.push(newAccount);
    localStorage.setItem("informationData", JSON.stringify(savedData));
  };

  const handleRowsUp = () => {    // satır sayısını güncelleme
    setRowsShown(Math.min(rowsShown + 1, 24));
  };

  const handleRowsDown = () => { // satır sayısını güncelleme
    setRowsShown(Math.max(rowsShown - 1, 4));
  };

  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Grid style={{ backgroundColor: "white", padding: "10px" }}>
        <Navbar />
      </Grid>
      <Grid item style={{ backgroundColor: "#F5F7FF", padding: "10px" }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          style={{ padding: "10px" }}
        >
          <Grid item>
            <Grid
              item
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px",
                margin: "15px",
              }}
            >
              <TextField
                type="text"
                placeholder="Search objects..."
                variant="outlined"
                value={searchValue}
                onChange={handleSearchChange}
                InputProps={{
                  style: {
                    borderRadius: "38px",
                    width: "25rem",
                    paddingRight: "0",
                    backgroundColor: "#ffff",
                    height: "42px",
                  },
                }}
              />
              <Button
                placeholder="Search objects..."
                variant="contained"
                color="primary"
                onClick={handleSearchClick}
                style={{
                  backgroundColor: "#744BFC",
                  marginLeft: "-40px",
                  borderBottomRightRadius: "30px",
                  borderTopRightRadius: "30px",
                  height: "42px",
                }}
              >
                <CiSearch size={"30px"} />
              </Button>
              <Button
                color="primary"
                style={{
                  color: "#744BFC",
                  backgroundColor: "#ffff",
                  borderRadius: "50%",
                }}
              >
                <FiFilter size={"30px"} onClick={handleSortClick} />
              </Button>
            </Grid>
          </Grid>

          <Button
            color="primary"
            variant="contained"
            onClick={handleAddAccountClick}
            style={{
              marginLeft: "10px",
              backgroundColor: "#744BFC",
              borderRadius: "39px",
              textTransform: "none",
              width: "175px",
              height: "42px",
              padding: "10px",
            }}
          >
            <FaPlus size={"18px"} style={{ marginRight: "15px" }} /> Yeni Hesap
            Ekle
          </Button>
        </Grid>

        <Grid
          item
          style={{
            flex: "1",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "25px",
          }}
        >
          <DataGrid
            dataSource={informationData}
            showBorders={true}
            remoteOperations={true}
            columnAutoWidth={true}
            hoverStateEnabled={true}
            rowAlternationEnabled={true}
            rowAlternationCount={1}
            rowAlternationColor="red"
            rowAlternationInterval={2}
          />
          <Grid
            container
            alignItems="center"
            justifyContent="flex-start"
            item
            style={{ marginTop: "10px" }}
          >
            <Typography style={{ color: "#744BFC" }}>Show:</Typography>

            <Grid
              item
              style={{
                backgroundColor: "#ffff",
                borderRadius: "39px",
                border: " 1px solid #CFC0FF",
                width: "5%",
                margin: "15px",
                padding: "5px",
              }}
            >
              <Typography>{informationData.length} rows</Typography>
            </Grid>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <IconButton onClick={handleRowsUp} disabled={rowsShown === 1}>
                    <FiChevronUp style={{ color: "#744BFC" }} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={handleRowsDown}
                    disabled={rowsShown === 15}
                  >
                    <FiChevronDown style={{ color: "#744BFC" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <IconButton>
                <FiChevronLeft style={{ color: "#744BFC" }} />
              </IconButton>
              <Typography style={{ color: "black" }}>Page</Typography>
              <Typography>{currentPage} of</Typography>
              <Typography>1</Typography>
              <IconButton>
                <FiChevronRight style={{ color: "#744BFC" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <NewAccountModal  
        open={isModalOpen}    // propslar alındı.
        onClose={handleModalClose}
        onSave={handleModalSave}
      />
    </Grid>
  );
}

export default App;
