import { Box, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { APPLY_FILTERS } from "../redux/actionTypes";

// components
import MultiSelect from "./MultiSelect";

// utils & static data
import {
  ROLES,
  NUMBER_OF_EMPLOYEES_OPTIONS,
  EXPERIENCE_OPTIONS,
  MODE_OPTIONS,
  MIN_SALARY_OPTIONS,
} from "../utils/constants";

const FilterGroup = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // updating state of filters based on applied filters
  const handleApplyFilter = (filterName, value) => {
    dispatch({ type: APPLY_FILTERS, payload: { filterName, value } });
  };

  const filters = {
    roles: {
      options: ROLES,
      placeholder: "Select roles",
      label: "Roles",
      onChange: handleApplyFilter,
    },
    employees: {
      options: NUMBER_OF_EMPLOYEES_OPTIONS,
      placeholder: "Number of Employees",
      label: "Number of Employees",
      onChange: handleApplyFilter,
    },
    experience: {
      options: EXPERIENCE_OPTIONS,
      placeholder: "Select experience",
      label: "Experience",
      onChange: handleApplyFilter,
    },
    mode: {
      options: MODE_OPTIONS,
      placeholder: "Select mode",
      label: "Mode",
      onChange: handleApplyFilter,
    },
    minSalary: {
      options: MIN_SALARY_OPTIONS,
      placeholder: "Minimum Salary",
      label: "Minimum Base Pay Salary",
      onChange: handleApplyFilter,
    },
    companyName: {
      id: "companyName",
      label: "Search Company Name",
      onChange: (e) => {
        handleApplyFilter("companyName", e.target.value);
      },
    },
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginBottom: 2,
        marginTop: 1,
        padding: 2,
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        Filters
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ flexWrap: isMobile ? "wrap" : "nowrap" }}
      >
        {/* Roles filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <MultiSelect
            {...filters.roles}
            InputProps={{
              style: {
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.default,
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              },
            }}
          />
        </Grid>
        {/* no. of employee filter */}
        {/* <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <MultiSelect {...filters.employees} />
        </Grid> */}
        {/* experience filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <MultiSelect
            {...filters.experience}
            InputProps={{
              style: {
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.default,
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              },
            }}
          />
        </Grid>
        {/* location filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <MultiSelect
            {...filters.mode}
            InputProps={{
              style: {
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.default,
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              },
            }}
          />
        </Grid>
        {/* minimum salary filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <MultiSelect
            {...filters.minSalary}
            InputProps={{
              style: {
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.default,
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              },
            }}
          />
        </Grid>
        {/* company name search filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <TextField
            fullWidth
            variant="outlined"
            {...filters.companyName}
            InputProps={{
              style: {
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.default,
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterGroup;