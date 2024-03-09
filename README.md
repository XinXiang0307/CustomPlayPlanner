# ANLY 503 Visual Narrative Project Group 9

## Tailor-Made Fun: Your Personalized Gaming Guide

* Mingqian Liu ml2078@georgetown.edu
* Xin Xiang xx123@georgetown.edu
* Yanfeng Zhang yz1045@georgetown.edu


## Executive summary

Our project "Tailor-Made Fun: Your Personalized Gaming Guide" aims to help viewers choose the video game that best fits their needs based on four key factors: popularity, price, playtime, and ratings. To achieve this goal, we analyzed data from the official Steam video game record and created visualizations to represent our findings. We found that action games dominate the top 100 rankings in terms of popularity, while indie and casual games are more affordable. We also discovered that RPG and strategy games require the most time investment, while casual, indie, and sports games require the shortest playtimes. Additionally, we found that indie games have the highest average ratings, while sports games have the lowest. Our project provides valuable insights into video game selection and aims to help viewers make informed decisions about which games to play based on their preferences and time constraints.


## Repository structure

```.
├── README.md
├── code/
├── data/
├── img/
└── website/
```
## Description of files


* The `code/` directory contains all codes file during EDA process with following sub-directories:
    * `code_for_preprocess/`: Codes for necessary data preprocessing including `data_preprocess.ipynb`.
    * `code_for_eda/`: Codes for initial EDA including `data_eda_game_rating.ipynb` and `data_eda_game_price.ipynb`.
    * `code_for_viz/`: Codes for finalized visualization including `bubble_d3`, `hist_plotly`, `parallel_d3`,`radar_d3`,`scaleradial_d3`,`ridgeline_altair`, `violin_plotly` and `datatable_r`. For each sub-directories, there are js files for plots and showcase html.


* The `data/` directory contains all data files with following sub-directories:
    * `raw/`: Raw data directly from original data scoures, including `steam.csv`,`Video Game Sales with Ratings.csv`,`video-games-developers.csv`.
    * `processed/`: Processed data after necessary clean, merge and feature extract, including  `PC_games.csv` and `Console_games.csv`.
    * `analytical/`: Subsets from processed data that required for certain data visualization, including `cleaned_video_game.csv`, `sales.csv`, `steam_df.csv` and `topgames.csv`.

* The `img/` directory contains all external images that needed for the site. 

* The `website/` directory where the website will be deployed, including accessible `index.html`,`method.html`, `css`, `img`, `js`(including customized layout.js), `vandor`(including bootstrap.js) and `viz`(including d3.js files for visualization).
