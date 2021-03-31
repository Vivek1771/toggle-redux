import React from "react";

const score = [
  {
    status: 200,
    message: "Sucessful",
    data: {
      id: "fefb5920-3ffe-4c80-abd4-61d0bf754cd6",
      status: "closed",
      coverage: "full",
      scheduled: "2021-03-21T17:00:00+00:00",
      duration: "2:27",
      attendance: 0,
      lead_changes: 16,
      times_tied: 7,
      clock: "00:00",
      quarter: 5,
      track_on_court: true,
      reference: "0022000645",
      entry_mode: "WEBSOCKET",
      sr_id: "sr:match:26109632",
      clock_decimal: "00:00",
      time_zones: {
        venue: "US/Eastern",
        home: "US/Eastern",
        away: "US/Eastern",
      },
      venue: {
        id: "b67d5f09-28b2-5bc6-9097-af312007d2f4",
        name: "American Airlines Arena",
        capacity: 19600,
        address: "601 Biscayne Boulevard",
        city: "Miami",
        state: "FL",
        zip: "33132",
        country: "USA",
        sr_id: "sr:venue:6928",
      },
      home: {
        name: "Heat",
        alias: "MIA",
        market: "Miami",
        id: "583ecea6-fb46-11e1-82cb-f4ce4684ea4c",
        points: 106,
        bonus: true,
        sr_id: "sr:team:3435",
        reference: "1610612748",
        scoring: [
          {
            type: "quarter",
            number: 1,
            sequence: 1,
            points: 26,
          },
          {
            type: "quarter",
            number: 2,
            sequence: 2,
            points: 23,
          },
          {
            type: "quarter",
            number: 3,
            sequence: 3,
            points: 21,
          },
          {
            type: "quarter",
            number: 4,
            sequence: 4,
            points: 28,
          },
          {
            type: "overtime",
            number: 1,
            sequence: 5,
            points: 8,
          },
        ],
        statistics: {
          minutes: "4:25:00",
          field_goals_made: 39,
          field_goals_att: 97,
          field_goals_pct: 40.2,
          three_points_made: 9,
          three_points_att: 37,
          three_points_pct: 24.3,
          two_points_made: 30,
          two_points_att: 60,
          two_points_pct: 50,
          blocked_att: 10,
          free_throws_made: 19,
          free_throws_att: 23,
          free_throws_pct: 82.6,
          offensive_rebounds: 13,
          defensive_rebounds: 38,
          rebounds: 51,
          assists: 27,
          turnovers: 14,
          steals: 7,
          blocks: 7,
          assists_turnover_ratio: 1.93,
          personal_fouls: 19,
          ejections: 0,
          foulouts: 0,
          points: 106,
          fast_break_pts: 9,
          second_chance_pts: 10,
          team_turnovers: 2,
          points_off_turnovers: 12,
          team_rebounds: 11,
          flagrant_fouls: 0,
          player_tech_fouls: 0,
          team_tech_fouls: 0,
          coach_tech_fouls: 0,
          points_in_paint: 54,
          pls_min: -3,
          effective_fg_pct: 44.8,
          bench_points: 27,
          points_in_paint_att: 53,
          points_in_paint_made: 27,
          points_in_paint_pct: 50.9,
          true_shooting_att: 107.12,
          true_shooting_pct: 49.5,
          biggest_lead: 5,
          fouls_drawn: 22,
          offensive_fouls: 1,
          efficiency: 115,
          efficiency_game_score: 81.8,
          defensive_rating: 100.183823529412,
          offensive_rating: 96.2586269524156,
          coach_ejections: 0,
          points_against: 109,
          possessions: 110.12,
          opponent_possessions: 108.8,
          team_defensive_rebounds: 1,
          team_offensive_rebounds: 10,
          time_leading: "5:03",
          defensive_points_per_possession: 0.99,
          offensive_points_per_possession: 0.96,
          team_fouls: 0,
          total_rebounds: 62,
          total_fouls: 19,
          second_chance_att: 16,
          second_chance_made: 3,
          second_chance_pct: 18.8,
          fast_break_att: 9,
          fast_break_made: 4,
          fast_break_pct: 44.4,
          most_unanswered: {
            points: 11,
            own_score: 58,
            opp_score: 57,
          },
        },
      },
      away: {
        name: "Pacers",
        alias: "IND",
        market: "Indiana",
        id: "583ec7cd-fb46-11e1-82cb-f4ce4684ea4c",
        points: 109,
        bonus: false,
        sr_id: "sr:team:3419",
        reference: "1610612754",
        scoring: [
          {
            type: "quarter",
            number: 1,
            sequence: 1,
            points: 32,
          },
          {
            type: "quarter",
            number: 2,
            sequence: 2,
            points: 25,
          },
          {
            type: "quarter",
            number: 3,
            sequence: 3,
            points: 22,
          },
          {
            type: "quarter",
            number: 4,
            sequence: 4,
            points: 19,
          },
          {
            type: "overtime",
            number: 1,
            sequence: 5,
            points: 11,
          },
        ],
      },
    },
  },
];

const style = {
  border: "2px solid red",
  borderRadius: "5px",
};

const Nba = () => {
  return (
    <div>
      {score.map((score) => (
        <div style={style} key="i">
          <h4> Final </h4>
          <table style={{ width: "100%" }} border="4">
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>T</td>
              </tr>
              <tr>
                <td>{score.data.home.alias}</td>
                <td>{score.data.home.scoring[0].points}</td>
                <td>{score.data.home.scoring[1].points}</td>
                <td>{score.data.home.scoring[2].points}</td>
                <td>{score.data.home.scoring[3].points}</td>
                <td>{score.data.home.scoring[4].points}</td>
                <td>{score.data.home.points}</td>
              </tr>
              <tr>
                <td>{score.data.away.alias}</td>
                <td>{score.data.away.scoring[0].points}</td>
                <td>{score.data.away.scoring[1].points}</td>
                <td>{score.data.away.scoring[2].points}</td>
                <td>{score.data.away.scoring[3].points}</td>
                <td>{score.data.away.scoring[4].points}</td>
                <td>{score.data.away.points}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ paddingTop: "50px" }}>
            <h5>
              {score.data.home.market} {score.data.home.name}
            </h5>
            <p>{score.data.home.points}</p>
            <br />
            <p>VS</p>
            <h5>
              {score.data.away.market} {score.data.away.name}
            </h5>
            <p>{score.data.away.points}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nba;
