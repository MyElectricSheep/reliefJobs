import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // mix classes

// i18n imports
import { FormattedMessage } from "react-intl";

// Material UI imports
import { MenuItem, Menu, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

// Custom components imports
import ExperienceSubMenu from "./ExperienceSubMenu";
import ContractSubMenu from "./ContractSubMenu";
import CareerSubMenu from "./CareerSubMenu";

const useStyles = makeStyles(theme => ({
  expand: {
    transform: "rotate(0deg)",
    marginRight: "0.5em",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  filterSection: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  divider: {
    width: "1px",
    zIndex: 3,
    height: "100%",
    backgroundColor: theme.palette.reliefJobsGrey,
    opacity: 0.9,
    marginRight: "1em"
  },
  sectionTitle: {
    marginRight: "0.5em"
  }
}));

const MenuSection = ({ title, filters, setFilters, filterBadges }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const getStyle = () => {
    if (filterBadges) {
      if (
        (filterBadges.experience && title === "experience") ||
        (filterBadges.contract && title === "contract") ||
        (filterBadges.career && title === "career")
      )
        return { paddingBottom: "0.15em", marginLeft: "0.95em" };
    } else return { paddingBottom: "0.15em" };
  };

  const menuId = `primary-filter-menu-${title}`;

  const renderMenu = title => {
    const renderSubMenu = () => {
      if (title === "experience")
        return <ExperienceSubMenu filters={filters} setFilters={setFilters} />;
      if (title === "contract")
        return <ContractSubMenu filters={filters} setFilters={setFilters} />;
      if (title === "career") return <CareerSubMenu filters={filters} setFilters={setFilters} />;
      else return null;
    };
    return (
      <Menu
        anchorEl={anchorEl}
        id={menuId}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        style={{ marginTop: "1.56em" }}
      >
        {renderSubMenu()}
      </Menu>
    );
  };

  return (
    <>
      <div className={classes.filterSection} onClick={handleProfileMenuOpen}>
        <div className={classes.divider} />
        <Typography variant="subtitle1" className={classes.sectionTitle}>
          <FormattedMessage id={`component.filterBox.${title}`} />
        </Typography>
        <ExpandMoreIcon
          className={clsx(classes.expand, {
            [classes.expandOpen]: anchorEl
          })}
          aria-controls={menuId}
          aria-haspopup="true"
          aria-label="Expand menu"
          color="disabled"
          style={getStyle()}
        />
      </div>
      {renderMenu(title)}
    </>
  );
};

MenuSection.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  filterBadges: PropTypes.object.isRequired
};

export default MenuSection;
