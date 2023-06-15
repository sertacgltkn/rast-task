import React, { useState } from "react";
import { DataGrid } from "devextreme-react";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineBehance,
} from "react-icons/ai";
import { FiFilter, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import {
  Modal,
  Button,
  TextField,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useEffect } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowsShown, setRowsShown] = useState(4);
  const [informationData, setInformationData] = useState([
    {
      "Sosyal Medya Linki": "instagram/sertacgltkn",
      "Sosyal Medya Adı": "Instagram",
      Açıklama: "Succesfully",
    },
  ]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("informationData")) || [];
    setInformationData(savedData);
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {};

  const handleSortClick = () => {};

  const handleAddAccountClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSave = () => {
    const newAccount = {
      "Sosyal Medya Linki": document.getElementById("SosyalMedyaLinki").value,
      "Sosyal Medya Adı": document.getElementById("SosyalMedyaAdi").value,
      Açıklama: document.getElementById("Aciklama").value,
    };
    setInformationData([...informationData, newAccount]);
    setIsModalOpen(false);

    const savedData = JSON.parse(localStorage.getItem("informationData")) || [];
    savedData.push(newAccount);
    localStorage.setItem("informationData", JSON.stringify(savedData));
  };

  const handleRowsUp = () => {
    setRowsShown(Math.min(rowsShown + 1, 24));
  };

  const handleRowsDown = () => {
    setRowsShown(Math.max(rowsShown - 1, 4));
  };

  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Grid item style={{ backgroundColor: "white", padding: "10px" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <img
              src="/assets/rast-mobile.svg"
              alt="Rast Mobile"
              style={{ width: "124.27px", height: "36.7px" }}
            />
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent="center"
              style={{ marginTop: "15px" }}
            >
              <Grid
                item
                className="text-bar"
                style={{ display: "flex", alignItems: "center", gap: "250px" }}
              >
                <Typography style={{ marginRight: "10px" }}>
                  Hakkımızda
                </Typography>
                <Typography style={{ marginRight: "10px" }}>
                  Jüri-Yarışma Yazılımı
                </Typography>
                <Typography style={{ marginRight: "10px" }}>
                  Word Ninja
                </Typography>
                <Typography style={{ marginRight: "80px" }}>
                  Word Pyramids
                </Typography>
              </Grid>
              <Grid item style={{ display: "flex" }}>
                <Typography style={{ padding: "0 10px" }}>
                  <AiOutlineYoutube
                    style={{ width: "20px", height: "20px", color: "#744BFC" }}
                  />
                </Typography>
                <Typography style={{ padding: "0 10px" }}>
                  <AiOutlineInstagram
                    style={{ width: "20px", height: "20px", color: "#744BFC" }}
                  />
                </Typography>
                <Typography style={{ padding: "0 10px" }}>
                  <AiFillLinkedin
                    style={{ width: "20px", height: "20px", color: "#744BFC" }}
                  />
                </Typography>
                <Typography style={{ padding: "0 10px" }}>
                  <AiOutlineBehance
                    style={{ width: "20px", height: "20px", color: "#744BFC" }}
                  />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "10px" }}
        >
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <TextField
                  type="text"
                  placeholder="Search"
                  variant="outlined"
                  value={searchValue}
                  onChange={handleSearchChange}
                  sx={{
                    borderRadius: "5px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "5px",
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid item>
                <Button
                  placeholder="Search objects..."
                  variant="contained"
                  color="primary"
                  onClick={handleSearchClick}
                  style={{ backgroundColor: "#744BFC" }}
                >
                  <CiSearch />
                </Button>
              </Grid>
              <Grid item>
                <FiFilter onClick={handleSortClick} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={handleAddAccountClick}
              style={{
                marginLeft: "10px",
                backgroundColor: "#744BFC",
                textTransform: "none",
              }}
            >
              + Yeni Hesap Ekle
            </Button>
          </Grid>
        </Grid>
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
        }}
      >
        <DataGrid
          dataSource={informationData}
          showBorders={true}
          remoteOperations={true}
          columnAutoWidth={true}
          hoverStateEnabled={true}
        />
        <Grid item style={{ marginTop: "10px" }}>
          <Typography variant="body1">
            Show: {informationData.length} rows
          </Typography>
          <Grid container>
            <Grid item>
              <IconButton onClick={handleRowsUp} disabled={rowsShown === 1}>
                <FiChevronUp />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={handleRowsDown} disabled={rowsShown === 15}>
                <FiChevronDown />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Grid
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "488px",
            height: "406px",
            backgroundColor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: "13px",
            maxWidth: "600px",
          }}
        >
          <Grid container justifyContent="flex-end">
            <IconButton onClick={handleModalClose}>X</IconButton>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="column"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item>
              <TextField
                variant="outlined"
                id="SosyalMedyaLinki"
                label="Sosyal Medya Linki"
                InputProps={{
                  style: {
                    borderRadius: "38px",
                  },
                }}
              />
            </Grid>

            <Grid item>
              <TextField
                variant="outlined"
                id="SosyalMedyaAdi"
                label="Sosyal Medya Adı"
                InputProps={{
                  style: {
                    borderRadius: "38px",
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                id="Aciklama"
                label="Açıklama"
                InputProps={{
                  style: {
                    borderRadius: "38px",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={handleModalClose}
              style={{
                marginRight: "10px",
                backgroundColor: "#F5F7FF",

                color: "#744BFC",
                borderRadius: "34px",
                textTransform: "none",
              }}
            >
              Vazgeç
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleModalSave}
              style={{
                backgroundColor: "#744BFC",
                borderRadius: "34px",
                textTransform: "none",
              }}
            >
              Kaydet
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </Grid>
  );
}

export default App;
