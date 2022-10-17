select playerID,nameFirst, nameLast, weight, birthYear
from people
limit 30
;

select yearID, round(avg(weight),1)
from people
join batting
 on people.playerID = batting.playerID
group by yearID
order by 1 desc
limit 20
;

with playerbatting as (
    select people.weight, batting.yearID, batting.teamID
    from people
    join batting
      on people.playerID = batting.playerID
)

select teams.name, round(avg(playerbatting.weight),1), playerbatting.yearID
from playerbatting
join teams
  on playerbatting.teamID = teams.teamID
group by teams.name, playerbatting.yearID
order by 2 desc
;

SELECT 
	AVG(people.weight), 
	teams.name, 
	batting.yearid 
FROM people 
INNER JOIN batting 
	ON people.playerid = batting.playerid
INNER JOIN teams
	ON batting.team_id = teams.id
GROUP BY 
	teams.name,
	batting.yearid
ORDER BY
	AVG(people.weight) 
	DESC;

select teams.name, round(avg(people.height),1), batting.yearID
from people
join batting
  on people.playerID = batting.playerID
join teams
  on batting.teamID = teams.teamID
group by batting.yearID, teams.name
order by 2 asc
;

SELECT teams.name, sum(salaries.salary), salaries.yearID
from salaries
left join teams
  on teams.teamID = salaries.teamID
  and teams.yearID = salaries.yearID
group by teams.name, salaries.yearID
order by 2 desc
limit 20
;

SELECT *
from salaries
left join teams
  on salaries.teamID = teams.teamID
  and salaries.yearID = teams.yearID
limit 20
;

SELECT round(sum(salaries.salary)/(teams.w)), teams.yearID, teams.w, teams.name 
from salaries
left join teams
  on salaries.teamID = teams.teamID
  and salaries.yearID = teams.yearID
GROUP by teams.yearid, teams.w, teams.name
HAVING teams.yearid = 2016
ORDER by 1 ASC
;

SELECT people.nameLast, salaries.playerid, salaries.yearid, salaries.teamid, 
salaries.salary, pitching.gs, round(salary/gs)
from salaries
left join pitching
 on salaries.playerid = pitching.playerid
 and salaries.yearid = pitching.yearid
 and salaries.teamid = pitching.teamid
join people 
 on salaries.playerid = people.playerid
group by salaries.playerid, salaries.yearid, salaries.teamid, 
pitching.gs, salaries.salary, people.namelast
having gs >= 10
order by 7 desc
;

SELECT 
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'chapter';