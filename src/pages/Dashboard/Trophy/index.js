import { Avatar, Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import calender from "assets/images/icons/calender.png";
import { trophy } from "assets/css/trophy";
import patnaPirates from "assets/images/Teams/logo/Patna Pirates.png";
import puneriPaltan from "assets/images/Teams/logo/Puneri Paltan TT.png";
import Divider from "@mui/material/Divider";
import PointsTable from "components/PointsTable";

const Trophy = () => {
  const classes = trophy();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box pt={3} pb={12} margin="0 16px">
      <Typography variant="h1" textAlign={"left"}>
        Hey Pawan Kumar! <br /> We have a game today…
      </Typography>
      <Typography variant="body1" pt={1} marginBottom="34px">
        Check out the Last season results
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h2" fontWeight="light">
          <b>Pro kabbadi</b> Schedule
        </Typography>
        <img width={24} src={calender} alt="" />
      </Box>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab
          className={classes.DateTap}
          label={
            <DateTab day="Fri" month="Dec">
              16
            </DateTab>
          }
        />
        <Tab
          className={classes.DateTap}
          label={
            <DateTab day="Sat" month="Dec">
              17
            </DateTab>
          }
        ></Tab>
        <Tab
          className={classes.DateTap}
          label={
            <DateTab day="Sun" month="Dec">
              18
            </DateTab>
          }
        />
        <Tab
          className={classes.DateTap}
          label={
            <DateTab day="Mon" month="Dec">
              19
            </DateTab>
          }
        />
        <Tab
          className={classes.DateTap}
          label={
            <DateTab day="Tue" month="Dec">
              20
            </DateTab>
          }
        />
        <Tab
          className={classes.DateTap}
          label={
            <DateTab day="Wed" month="Dec">
              21
            </DateTab>
          }
        />
        <Tab
          className={classes.DateTap}
          label={
            <DateTab day="Thu" month="Dec">
              22
            </DateTab>
          }
        />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Box textAlign="center">
          <Typography variant="body2" lineHeight={1.2}>
            Capacity: 47309
          </Typography>
          <Typography variant="body2" lineHeight={1.2}>
            Yankee Stadium, Bronx
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pt={1}
            pb={5}
          >
            <Box display="flex" gap={2} alignItems="center">
              <Avatar style={{ width: 60, height: 60 }} src={patnaPirates} />
              <Typography variant="h2">BAL</Typography>
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h1"
                fontFamily="League Gothic"
                fontWeight={400}
              >
                4:35 AM
              </Typography>
              <Typography>Dec 21</Typography>
            </Box>
            <Box display="flex" gap={2} alignItems="center">
              <Typography variant="h2">NYY</Typography>
              <Avatar style={{ width: 60, height: 60 }} src={puneriPaltan} />
            </Box>
          </Box>
          <Divider />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PointsTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Five
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Item Six
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Item Seven
      </CustomTabPanel>
    </Box>
  );
};

export default Trophy;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function DateTab(props) {
  const { children, day, month } = props;

  return (
    <>
      <Typography variant="body2" lineHeight="12px" fontWeight="bold">
        {day}
      </Typography>
      <Typography
        variant="h1"
        fontSize={42}
        fontFamily="League Gothic"
        fontWeight={400}
      >
        {children}
      </Typography>
      <Typography lineHeight="12px" variant="body2" fontWeight="bold">
        {month}
      </Typography>
    </>
  );
}
