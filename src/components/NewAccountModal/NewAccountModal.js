import { Grid, IconButton, Modal, TextField, Button } from "@material-ui/core";

const NewAccountModal = ({ open, onClose, onSave }) => {
  const handleModalClose = () => {
    onClose();
  };

  const handleModalSave = () => {
    onSave();
  };

  return (
    <Modal open={open} onClose={handleModalClose}>
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
          <IconButton
            onClick={handleModalClose}
            style={{ marginRight: "15px" }}
          >
            x
          </IconButton>
        </Grid>

        <Grid
          container
          spacing={6}
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
                  border: "1px solid #D9D9D9",
                  width: "25rem",
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
                  border: "1px solid #D9D9D9",
                  width: "25rem",
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
                  border: "1px solid #D9D9D9",

                  width: "25rem",
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="flex-end"
          style={{ padding: "15px", marginTop: "15px" }}
        >
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
  );
};

export default NewAccountModal;
