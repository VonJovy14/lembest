import React, { useEffect, useState } from "react";

import "stylesheets/modules/news.scss";

import { NewsData } from "script/constant/News";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

import Title from "script/components/display/Title";
import Icon from "script/components/display/Icon";
import NewsCard from "./NewsCard";
import Collapsible from "script/components/display/Collapsible";
import Container from "script/components/display/Container";

function News() {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    filterYears();
  }, []);

  const filterYears = () => {
    const newYears = NewsData.filter((item) => item.about_display).map(
      (data) => data.year
    );

    setYears(
      newYears.filter((item, index) => newYears.indexOf(item) === index).sort()
    );
  };

  const handleSelectYear = (year) => {
    if (selectedYear !== year) {
      setSelectedYear(year);
    } else {
      setSelectedYear(null);
    }
  };

  return (
    <div className="news-container">
      <Title
        text="Learn more about lembest"
        variant="underline"
        size="large"
        color="red"
      />

      <div className="news-per-year-container">
        {years.map((data, index) => (
          <div
            key={index}
            className="news-sort-per-year-container"
            onClick={() => handleSelectYear(data)}
          >
            <Container variant="outlined" color="yellow">
              <Grid container alignItems="center">
                <Grid item xs>
                  <div className="news-title-container">
                    <Title
                      text={data.toString()}
                      variant="inline"
                      color="blue"
                      size="large"
                    />
                  </div>
                </Grid>

                <Grid item>
                  <div className="news-expand-icon-container">
                    <Avatar>
                      {selectedYear === data ? (
                        <Icon type="expandless" size={20} />
                      ) : (
                        <Icon type="expandmore" size={20} />
                      )}
                    </Avatar>
                  </div>
                </Grid>
              </Grid>

              <Collapsible open={selectedYear === data ? true : false}>
                <div className="news-sort-per-year-wrapper">
                  {NewsData.filter(
                    (item) => item.year === data && item.about_display
                  ).map((data, index) => (
                    <div key={index}>
                      <NewsCard data={data} key={index} />
                      <div className="divider" />
                    </div>
                  ))}
                </div>
              </Collapsible>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
