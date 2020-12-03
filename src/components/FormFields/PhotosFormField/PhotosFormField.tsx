import React, { FC, useState } from "react";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import FormFieldLabel from "../FormFieldLabel/FormFieldLabel";
import { DropzoneDialog } from "material-ui-dropzone";
import AddNewElementButton from "@/components/Buttons/AddNewElementButton/AddNewElementButton";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const PhotosFormField: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation(["buttons", "uploadPhotos"]);

  return (
    <>
      <FormFieldLabel text={t("uploadPhotos:title")} />
      <ContentWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <AddNewElementButton onClick={() => setOpen(true)}>
              {t("uploadPhotos:addPhotos")}
            </AddNewElementButton>

            <DropzoneDialog
              acceptedFiles={["image/*"]}
              cancelButtonText={t("buttons:cancel")}
              submitButtonText={t("buttons:save")}
              dropzoneText={t("uploadPhotos:clickOrDropPhoto")}
              maxFileSize={3000000}
              open={open}
              onClose={() => setOpen(false)}
              onSave={(files) => {
                console.log("Files:", files);
                setOpen(false);
              }}
              filesLimit={3}
              showPreviews
              showFileNamesInPreview={false}
              showAlerts={false}
            />
          </Grid>
        </Grid>
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  max-width: 1000px;
`;
export default PhotosFormField;
