import React from "react";
import PropTypes from "prop-types";

// Icons imports
import { FaBriefcase } from "react-icons/fa";

// Material UI imports
import { Typography, Grid } from "@material-ui/core";

// Conversion imports
import { jobTypes } from "../../../i18n/typesConversion";

const JobType = props => {
  const { jobTypeInfo, locale, justify } = props;

  const convertJobType = typeToConvert => {
    if (typeToConvert) {
      const targetType = jobTypes.filter(validType => validType.reliefJobsName === typeToConvert);
      return targetType && targetType.length !== 0 && locale === "en"
        ? targetType[0].enName
        : targetType[0].frName;
    } else return null;
  };

  const shortenLongTypes = type => {
    if (type === "Volunteer Opportunity") return "Volunteer";
    if (type === "Volontariat / Bénévolat") return "Volontariat";
    if (type === "Stage / Alternance") return "Stage";
    else return type;
  };

  if (jobTypeInfo)
    return (
      <Grid container direction="row" justify={justify} alignItems="center">
        <FaBriefcase />
        <Typography
          variant="body1"
          color="textPrimary"
          component="span"
          style={{ paddingLeft: "0.4em" }}
        >
          {shortenLongTypes(convertJobType(jobTypeInfo))}
        </Typography>
      </Grid>
    );
  else return null;
};

JobType.propTypes = {
  jobTypeInfo: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  justify: PropTypes.string.isRequired
};

export default JobType;