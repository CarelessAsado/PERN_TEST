import errorWrapper from "../ERRORS/asyncErrorWrapper";
import { pool } from "../db/connect";

// INITIAL LOAD

export const initialLoad = errorWrapper(async (req, res, next) => {
  const query = `--sql
   select * from facilities`;
  const resp = await pool.query(query);

  return res.status(200).json(resp.rows);
});

export const nurseData = errorWrapper(async (req, res, next) => {
  const { facid } = req.params;

  const query = `--sql
   select nurse_id, sum((CASE WHEN worked_shift = true  THEN 1 ELSE 0 END)+(CASE WHEN call_out = true THEN -3 ELSE 0 END)+(CASE WHEN no_call_no_show = true THEN -5 ELSE 0 END)) as score
   from clinician_work_history where facility_id = ${facid} group by nurse_id ORDER BY score DESC,nurse_id DESC`;

  const resp = await pool.query(query);

  return res.status(200).json(resp.rows);
});

export const exercise4 = errorWrapper(async (req, res, next) => {
  const query = `--sql
   select job_id, total_number_nurses_needed + sum(-1) as remaining_spots from jobs
   NATURAL JOIN nurse_hired_jobs group by job_id `;
  const resp = await pool.query(query);

  return res.status(200).json(resp.rows);
});
export const exercise5 = errorWrapper(async (req, res, next) => {
  const query = `--sql
     select nurse_id,nurse_name,nurse_type, sum(CASE WHEN 
            EXISTS(select * from nurse_hired_jobs where nurse_id = nurses.nurse_id  AND job_id=jobs.job_id ) 
            OR (select count(*) from nurse_hired_jobs where job_id = jobs.job_id) = jobs.total_number_nurses_needed
            THEN 0 ELSE 1 END) as potential_matches  
     from nurses
   INNER JOIN jobs ON jobs.nurse_type_needed = nurses.nurse_type  group by nurse_id,nurse_name,nurse_type order by nurse_id`;

  const resp = await pool.query(query);

  return res.status(200).json(resp.rows);
});
export const exercise6 = errorWrapper(async (req, res, next) => {
  const {} = req.body;
  const {} = req.params;
  const query = `--sql
   select (select facility_name from facilities where facility_id=jobs.facility_id),(select nurse_name from nurses where nurse_id=nurse_hired_jobs.nurse_id),count(*) from nurse_hired_jobs
    natural join jobs  
       group by facility_id,nurse_id 
    HAVING count(*)=(select max(sub.sum) 
  from (select facility_id,nurse_id,sum(1) 
                from nurse_hired_jobs natural join jobs 
                 group by facility_id,nurse_id
                       having facility_id=100
                
          ) as sub )                   
 order by facility_name`;

  const resp = await pool.query(query);

  return res.status(200).json(resp.rows);
});
