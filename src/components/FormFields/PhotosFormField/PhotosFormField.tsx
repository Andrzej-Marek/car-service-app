import React, { FC, useState } from "react";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import FormFieldLabel from "../FormFieldLabel/FormFieldLabel";
import { DropzoneDialog } from "material-ui-dropzone";

import styled from "styled-components";
import { useField } from "formik";
import { AddNewElementButton } from "@/components";

interface OwnProps {
  name: string;
}

type Props = OwnProps;

const MAX_FILE_SIZE = 3000000; // 3 MB
const MAX_FILES_AMOUNT = 15;

const PhotosFormField: FC<Props> = ({ name }) => {
  const [_, { value }, { setValue }] = useField<File[]>(name);

  const [open, setOpen] = useState(false);
  const { t } = useTranslation(["buttons", "uploadPhotos"]);

  return (
    <>
      <FormFieldLabel text={t("uploadPhotos:title")} />
      <ContentWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <AddNewElementButton onClick={() => setOpen(true)}>
              {value.length
                ? t("uploadPhotos:addOrRemovePhotos", { amount: value.length })
                : t("uploadPhotos:addPhotos")}
            </AddNewElementButton>

            <DropzoneDialog
              acceptedFiles={["image/*"]}
              cancelButtonText={t("buttons:cancel")}
              submitButtonText={t("buttons:save")}
              dropzoneText={t("uploadPhotos:clickOrDropPhoto")}
              maxFileSize={MAX_FILE_SIZE}
              open={open}
              onClose={() => setOpen(false)}
              onSave={(files) => {
                console.log("Files:", files);
                setValue(files);
                setOpen(false);
              }}
              filesLimit={MAX_FILES_AMOUNT}
              showPreviews
              showFileNamesInPreview={false}
              showAlerts={false}
              clearOnUnmount={false}
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
